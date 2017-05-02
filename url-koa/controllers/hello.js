/**
 * Created by bg_cloud on 17/4/20.
 */
var fn_hello = async (ctx, next) => {
    var name = ctx.params.name

    ctx.response.body = `<h1>Hello, ${name} ! </h1>`
}

var ready = function hello(){
    return 'hello 函数加载完成！！'
}

module.exports = {
    'GET /hello/:name': fn_hello,
    ready
}