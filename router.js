const Router = require('koa-router')
const cheerio = require('cheerio')
const superagent = require('superagent')

const cnode = require('./spider/cnode')

const router = new Router()

router
  .get('/foo', (ctx, next) => {
    ctx.body = 'foo'
  })
  .get('/bar', (ctx, next) => {
    ctx.body = 'bar'
  })
  .get('/cnode', async (ctx, next) => {
    ctx.body = await cnode()
  })

module.exports = router
