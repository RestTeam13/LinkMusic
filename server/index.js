require('dotenv').config()
const {Keystone} = require('@keystonejs/keystone')
const {KnexAdapter} = require('@keystonejs/adapter-knex')
const {PasswordAuthStrategy} = require('@keystonejs/auth-password');
const {AdminUIApp} = require('@keystonejs/app-admin-ui');
const {GraphQLApp} = require('@keystonejs/app-graphql');
const {StaticApp} = require('@keystonejs/app-static')
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

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User'
})

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: 'Link Music',
      enableDefaultRoute: true,
      authStrategy
    }),
    new StaticApp({
      path: './',
      src: 'public',
      fallback: 'index.html',
    }),
  ],
};