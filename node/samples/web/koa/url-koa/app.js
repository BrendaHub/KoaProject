/**
 * Created by bg_cloud on 17/5/17.
 */
const  Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const  Router = require('koa-router')
var router = new Router()

const app = new Koa()

//log request URL , 注册一个koa的中件间逻辑
app.use(async (ctx,next)=>{
    console.log(`process ${ctx.request.method}, ${ctx.request.url}.....`)
    await next()

})

//parse request body
app.use(bodyParser())

//add url-route
router.get('/hello/:name', async (ctx, next)=>{
    var name = ctx.params.name
    ctx.response.body = `<h1>Hello, ${name}!</h1>`
})

router.get('/', async (ctx, next)=>{
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post"
        <p>Name:<input name="name" value="koa"></p>
        <p>Password:<input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
    `
})

router.post('signin', async (ctx,next)=>{
    //以下是获取post请求中的参数值
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''

    console.log(`signin with name: ${name}, password: ${password}`)

    if(name === 'koa' && password === '123456'){
        ctx.response.body = `<h1>Welcome, ${name}</h1>`
    }else{
        ctx.response.body = `<h1>Login failed!</h1><p><a href="/">Try again</a></p>`

    }
})

//在中间件中注入koa路由
app.use(router.routes())

app.listen(3000)

console.log('app started at port 3000...... ')