require('dotenv').config()
const {Keystone} = require('@keystonejs/keystone')
const {KnexAdapter} = require('@keystonejs/adapter-knex')
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const {createItems, getItem} = require('@keystonejs/server-side-graphql-client');
const Knex = require('knex');

const {PasswordAuthStrategy} = require('@keystonejs/auth-password');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {GraphQLApp} = require('@keystonejs/app-graphql');
const {StaticApp} = require('@keystonejs/app-static');

const bcrypt = require('bcryptjs');
const {createImg} = require('./apps/createCaptcha')
const UserSchema = require('./lists/User')
const SocialLinkSchema = require('./lists/SocialLink')
const ReleaseSchema = require('./lists/Release')
const NewsArticleSchema = require('./lists/NewsArtice') //Todo Разбить на файлы
const {ApolloError} = require('apollo-server-errors')

const knex = Knex({
    client: process.env.CLIENT,
    connection: {
        host: process.env.HOSTDB,
        port: process.env.PORTDB,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
});

const keystone = new Keystone({
    adapter: new KnexAdapter({
        knexOptions: {
            client: process.env.CLIENT,
            connection: {
                host: process.env.HOSTDB,
                port: process.env.PORTDB,
                user: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.DATABASE
            }
        }
    }),
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: false,
    },
    cookieSecret: process.env.COOKIE_SECRET,
    sessionStore: new KnexSessionStore({
        knex,
        tablename: process.env.SESSIONTABLENAME,
    }),
    // onConnect: async keystone => {
    //     await createItems({
    //         keystone,
    //         listKey: 'User',
    //         items: [
    //             {
    //                 data: {
    //                     name: 'Admin',
    //                     email: 'admin@admin.admin',
    //                     phone: '',
    //                     password: 'adminadmin',
    //                 },
    //             },
    //         ],
    //     });
    // }
})

keystone.createList('SocialLink', SocialLinkSchema)
keystone.createList('Release', ReleaseSchema)
keystone.createList('User', UserSchema)
keystone.createList('NewsArticle', NewsArticleSchema)

keystone.extendGraphQLSchema({
    queries: [
        {
            schema: 'getCaptcha: String!',
            resolver: async (_, {}, context) => {
                const {img, text} = await createImg()
                const hashCaptcha = bcrypt.hashSync(text, 3)
                context.req.session.captcha = hashCaptcha
                return img
            },
        },
        {
            schema: 'checkCaptcha(receivedCaptcha: String!): Boolean',
            resolver: (_, {receivedCaptcha}, context) => {
                return bcrypt.compareSync(receivedCaptcha, context.req.session.captcha)
            },
        },
    ]
})

const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
    hooks: {
        validateAuthInput: async ({originalInput, addValidationError, context}) => {
            console.log(originalInput)
            console.log(`SessionID: ${context.req.sessionID}, Captcha: ${context.req.session.captcha}`,)

            if (!!!originalInput.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) throw new ApolloError('Введен некорректный email') //Todo Вывод сразу всех ошибок
            if (originalInput.password.length < 8) throw new ApolloError('Пароль должен содержать не менее 8 символов')
        }
    }
})

module.exports = {
    keystone,
    apps: [
        new GraphQLApp({
            apollo: {
                formatError: (err) => {
                    // Don't give the specific errors to the client.
                    if (err.message.startsWith('[passwordAuth:failure]')) {
                        return new ApolloError('Логин или пароль неверны');
                    }
                    // Otherwise return the original error. The error can also
                    // be manipulated in other ways, as long as it's returned.
                    return err;
                },
            }
        }),
        new AdminUIApp({
            name: 'Link Music',
            authStrategy,
        }),
        new StaticApp({
            path: '/',
            src: 'client/build',
            fallback: 'index.html',
        }),
    ]
};