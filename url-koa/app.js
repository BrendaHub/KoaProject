/**
 * Created by bg_cloud on 17/4/20.
 */
'use strick';

const easyMonitor = require('easy-monitor');
const  Koa = require('koa');
const  bodyParser = require('koa-bodyparser');
const  controller = require('./controller');
const  app = new Koa();

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
//加截解析bodyparser的内容
app.use(bodyParser());

app.use(controller());

easyMonitor('KoaProject');

app.listen(3000);
console.log('app started at port 3000...');