/**
 * Created by bg_cloud on 17/4/20.
 */
//先导入fs模块，然后用readdirSync列出文件
//这里可以用sync是因为启动时中运行一次， 不存在性能问题， sync阻塞模式是存在性能问题的
var fs = require('fs')
var files = fs.readdirSync(__dirname + '/controllers')

//过滤出.js文件
var js_files = files.filter((f) => {
    return f.endsWith('.js')
})

//处理每一个js文件
for(var f of js_files){
    console.log(`process controller: ${f} ...`)

    //导入js文件
    let mapping = require(__dirname +'/controllers/' + f)
    for(var url in mapping){
        console.log(`mapping url : ${url}`)
        if(url.startsWith('GET ')){
            //如果url类似"GET xxxx"
            var path = url.substring(4)
            router.get(path, mapping[url])
        }else if(url.startsWith('POST ')){
            //如果url 类似“POST xxx”
            var path = url.substring(5)
            router.post(path, mapping[url])
            console.log(`register URL mapping POST ${path}`)
        }else{
            //无效的url
            console.log(`invalid URL : ${url}`)
        }
    }
}