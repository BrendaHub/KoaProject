/**
 * Created by bg_cloud on 17/4/21.
 * 进入到应的根目录后， 显示欢迎页
 */

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome Koa nunjucks'
        })
    }
}