/**
 * Created by bg_cloud on 17/5/16.
 * Rest API 接口例子，基于koa
 */

var url = require('url')

var products = [{
    name:'iPhone',
    price:6999
},{
    name:'Kindle',
    price:999
}]
module.exports = {
    'GET /api/products': async (ctx, next) =>{
        console.log(url.parse(ctx.request.url))
        ctx.response.type = 'application/json';
        ctx.response.body = {
            products:products
        }
    },
    'POST /api/products': async (ctx, next)=>{
        console.log(ctx.request)
        //通过request获取get 请求的参数值
        var p = {
            name:ctx.request.body.name,
            price:ctx.request.body.price
        }
        console.log(JSON.stringify(p))
        products.push(p)
        ctx.response.type = 'application/json'
        ctx.response.body = p
    }
}