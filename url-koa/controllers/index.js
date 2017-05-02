/**
 * Created by bg_cloud on 17/4/20.
 */
var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1><form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`
}

var fn_signin = async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''

    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }}

var ready = function(){
    return 'index.js 加载完毕！'
}
//把以上二个片是函数暴露出来
module.exports = {
    'GET /a' : fn_index,
    'POST /signin' : fn_signin,
    ready
}