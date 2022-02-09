require('dotenv').config()
const {Keystone} = require('@keystonejs/keystone')
const {KnexAdapter} = require('@keystonejs/adapter-knex')
const {PasswordAuthStrategy} = require('@keystonejs/auth-password');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {GraphQLApp} = require('@keystonejs/app-graphql');
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
    cookieSecret: process.env.COOKIE_SECRET
})

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
    configureExpress: app => {
        const express = require('express')
        const path = require('path')
        if (process.env.NODE_ENV === 'production') {
            app.use('/', express.static(path.join(__dirname, 'client', 'build')));

            app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
            })
        }
    },
    keystone,
    apps: [
        new GraphQLApp(),
        new AdminUIApp({
            name: 'Link Music',
            authStrategy
        }),
    ],
};