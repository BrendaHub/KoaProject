/**
 * Created by bg_cloud on 17/4/21.
 * 处理静态资源文件的中间件middleware
 */
const path = require('path')
const mime = require('mime')
const fs = require('mz/fs')//是一种支持Promise的异步处理机制的fs模块

function staticFiles(url, dir){
    //采用es6的异步语法
    return async (ctx, next) => {
        let rpath = ctx.request.path
        console.log(` ctx.request.path : ${rpath}`)
        if(rpath.startsWith(url)){
            let fp = path.join(dir, rpath.substring(url.length))
            console.log(`拼接后的文件路径： ${fp}`)
            if(await fs.exists(fp)) {//实现一个异步的逻辑， 判断当前的这个文件是否存在
                //如果存在
                ctx.response.type = mime.lookup(rpath)
                ctx.response.body = await fs.readFile(fp)
            }else{
                //如果不存在
                ctx.response.status = 404
            }
        }else{
           await next()
        }
    }
}

module.exports = staticFiles