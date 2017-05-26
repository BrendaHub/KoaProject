/**
 * Created by bg_cloud on 17/5/18.
 * 编写了一个简单的koa框架的中间件，功能是
 * 判断请求的url如果是‘/api/’开头的path就在响应里添加
 * ctx.response.type = 'application/json'
 * ctx.response.body = data
 * 个性请求响应内容
 * 写好后， 通过
 * app.use(xxx)来使用这个中间件
 */

module.exports = {
    // APIError: function (code, message){
    //     this.code = code || 'internal: unknown_error'
    //     this.message = message || ''
    // },
    APIError:(code, message)=>{
        this.code = code || 'internal: unknown_error'
        this.message = message || ''
    },
    //以下这个写法等同于
    /**
     *
     * restify:function(pathPrefix){}
     */
    restify : (pathPrefix) =>{
        //Rest API 前缀，默认为/api/:
        pathPrefix = pathPrefix || '/api/'
        return async (ctx, next)=>{
            //是否是REST API 前缀
            if(ctx.request.path,startsWith(pathPrefix)){
                //绑定rest() 方法
                ctx.rest = (data)=>{
                    ctx.response.type = 'application/json'
                    ctx.response.body = data
                }
                try{
                    await next()
                } catch( e){
                    //返回错误
                    ctx.response.status = 400
                    ctx.response.type = 'application/json'
                    ctx.response.body = {
                        code : e.code || 'internal:unknown_error',
                        message: e.message || ''
                    }
                }
            } else {
                await next()
            }
        }
    }
}