const Router = require('koa-router')

const router = new Router()

router
  .get('/foo', (ctx, next) => {
    ctx.body = 'foo'
  })
  .get('/bar', (ctx, next) => {
    ctx.body = 'bar'
  })

module.exports = router
