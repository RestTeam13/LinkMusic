require('dotenv').config()
const {Keystone} = require('@keystonejs/keystone')
const {KnexAdapter} = require('@keystonejs/adapter-knex')
const {PasswordAuthStrategy} = require('@keystonejs/auth-password');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {GraphQLApp} = require('@keystonejs/app-graphql');
const { StaticApp } = require('@keystonejs/app-static');
const {createImg} = require('./apps/createCaptcha')
const UserSchema = require('./lists/User')
const NewsArticleSchema = require('./lists/NewsArtice')

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
        secure: false,//process.env.NODE_ENV === 'production', // Defaults to true in production
        maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
        sameSite: false,
    },
    cookieSecret: process.env.COOKIE_SECRET
})

keystone.connect()

keystone.createList('User', UserSchema)
keystone.createList('NewsArticle', NewsArticleSchema)

keystone.extendGraphQLSchema({
    queries: [
        {
            schema: 'getCaptcha: String!',
            resolver: (_, {}) => createImg(),
        },
    ]
})

const authStrategy = keystone.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
})

module.exports = {
    keystone,
    apps: [
        new GraphQLApp(),
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