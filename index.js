const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router
  .get('/foo', (ctx, next) => {
    ctx.body = 'foo'
  })
  .get('/bar', (ctx, next) => {
    ctx.body = 'bar'
  })

app.use(router.routes())

app.listen(3000)
console.log('listen port 3000')
