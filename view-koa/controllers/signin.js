/**
 * Created by bg_cloud on 17/4/21.
 * 处理登录表单的处理类。
 */

module.exports = {
    'POST /signin': async (ctx, next) => {
        //采用bodyparser中间件从body中解析出表单参数， 如果是undefined 的话， 则显示为空字符串
        var email = ctx.request.body.email || ''
        var password = ctx.request.body.password || ''
        if(email === 'admin@example.com' && password === '123456a'){
            ctx.render('signin-ok.html',{
                title:'Sign In OK ',
                name:'Mr Node ....'
            })
        }else{
            console.log('signin failed!')
            ctx.render('signin-failed.html', {
                title:'Sign In Failed!....'
            })
        }
    }
}