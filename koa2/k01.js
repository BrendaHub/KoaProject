/**
 * Created by bg_cloud on 17/4/18.
 */
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Hello, Koa2!</h1>'
})

app.listen(3000)
console.log('app started at port 3000....')