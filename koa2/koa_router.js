/**
 * Created by bg_cloud on 17/4/19.
 */
const Koa = require('koa')
//注意require('koa-router')返回的是函数
const _router = require('koa-router')
//引入koa-bodyparser中间件
const  bodyParser = require('koa-bodyparser')


// const router = new _router()
const router = _router()
const app = new Koa()

//log request URL :
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
})

//add url-route
router.get('/hello/:name/:age', async (ctx, next) =>{
    var name = ctx.params.name; //从请求中获取name 参数；
    var age = ctx.params.age;//这个是从ctx中获取年龄的参数值；
    ctx.response.body = `<h1>Hello, ${name},你年龄为：${age}!</h1>`
})

router.get('/useinfo', async(ctx, next) => {
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>访问了/useinfo 链接！</h1>'
})

router.get('/', async(ctx, next) => {
    ctx.response.body = '<h1>Index </h1>'
})
//注意，上机看到，router有一个get 请求方式， 但同时也存在一个post请求方式
//router.post('/', async ( ctx, next) => ....,但是post请求的参数是需要提交表单或json数据，
//然而nodejs和koa的request对象里面都没有解析request的body功能， 所以如果需要提交post请求时还需要
//引入一个新的中间件（middleware）来完成body的内容解析， 中间件（middleware）就是koa-bodyparser.
//同样需要在package.json中添加中间件的依赖
// ‘’koa-bodyparser':'3.2.0'

//写一个post请求
router.get('/a', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
        <p>name:<input name="name" value="koa"></p>
        <p>Password:<input name="password", value="password"> </p>
        <p><input type="submit" value="Submit"></p>
</form>`
})

router.post('/signin', async (ctx, next) =>{
    var name = ctx.request.body.name || ''// 只有加载了koa-bodyParser中间件后， 才可以在request里面获到post的参数内容
    var password = ctx.request.body.password || ''
    console.log(`signin with name : ${name}, password: ${password}`)

    if(name === 'koa' && password === '12345'){
        ctx.response.body = `<h1>Welcome, ${name} </h1>`
    }else{
        ctx.response.body = `<h1>Login failed !</h1>
        <p><a href="/a">Try again!</a></p>`

    }

})


//注意， middleware的顺序很重要， 这个koa-bodyParser必须在router之前被注册到app对象上

//在 app 应用中添加 koa-bodyparser中间件的支持
app.use(bodyParser())
//add router middleware,, 在app中添加router 的url-router 路由中间件
app.use(router.routes())

app.listen(3000)

console.log('app started at port 3000.....')