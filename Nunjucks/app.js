/**
 * Created by bg_cloud on 17/4/20.
 */
const nunjucks = require('nunjucks')

function createEnv(path, opts) {
    //定义全局环境变量
    var
        autoescape = opts.autoescape && true,
        noCache = opts.noCache || false,
        watch = opts.watch || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: watch,
            }), {
                autoescape: autoescape,
                throwOnUndefined: throwOnUndefined
            });
    if (opts.filters) {
        for (var f in opts.filters) {
            env.addFilter(f, opts.filters[f]);
        }
    }
    return env;
}

var env = createEnv('views', {
    watch: false,
    filters: {
        hex: function (n) {
            return '0x' + n.toString(16);
        }
    }
})

var s = env.render('hello.html', {name: '9'})

console.log(s)

console.log('================================')

console.log(env.render('extend.html', {
    header: 'Hello nunjucks',
    body : ' ha ha , my like nunjucks .... ',
    footer:' my is footer copy@me 2017'
}))