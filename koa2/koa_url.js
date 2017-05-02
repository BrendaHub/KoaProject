/**
 * Created by bg_cloud on 17/4/19.
 */
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
    if(ctx.request.path === '/'){
        ctx.response.body = 'index page'
    }else{
        await next()
    }

})

app.use(async (ctx, next) => {
    if(ctx.request.path === '/test'){
        ctx.response.body = 'Test Page'
    }else{
        await next()
    }
})
//在使用es6时， 这样的函数可以写多个， 这几个会形成一个责任链的方式。
app.use(async (ctx, next) =>{
    if(ctx.request.path === '/error'){
        ctx.response.body = 'Error page'
    }else{
        await  next()
    }
})

app.listen(3000)

console.log('app started at port 3000, ....')