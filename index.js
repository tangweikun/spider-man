const Koa = require('koa')
const app = new Koa()

const router = require('./router')

app.use(router.routes())

app.listen(3000)
console.log('listen port 3000')
