/**
 * Created by bg_cloud on 17/4/18.
 */
const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start
    //在代码中执行代码需要采用`这样的字符， 显示变量 ${} 采用这样的符号， `${ctx.request.method} ${ctx.request.url}
    console.log(`${ctx.request.method} ${ctx.request.url}: ${ms}ms`);
    console.log(`输入编号为：${ctx.request.inputEncoding}`)
    console.log(`编号： ${ctx.response.method}`)
    ctx.response.set('X-Response-Time', `${ms}ms`);
})

//再创建一个 async (ctx, next),
// ctx 表示上下文， 里面可以获取到request, response 二个对象， next 代表下一个回调函数
//类似于采用了请求链的设计模式
app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Hello , Koa2!</h1>'
})

app.listen(3000)
console.log('app started at port 3000, ....')