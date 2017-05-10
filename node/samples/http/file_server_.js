/**
 * Created by bg_cloud on 17/5/10.
 */
'use strick'

//引入node.js与本功能相关的中间件
var fs = require('fs'),
    path = require('path'),
    url = require('url'),
    http = require('http')

//获取地址栏里的参烽
console.log('argv[0]: ' + process.argv[0])
console.log('argv[1]: ' + process.argv[1])
console.log('argv[2]: ' + process.argv[2])
console.log('argv[3]: ' + process.argv[3])
console.log(
    'sss' + process.argv[2] || '.'
)
console.log(
    'aaa' + path.resolve()+'|||'
)
//通过path.resolve可以得到当前应该所在目录
var root = path.resolve(process.argv[2] || '.')


//创建一个http 服务

var server = http.createServer((req, res)=>{

    //需要从请求的url中解析出pathname
    console.log('req.url : ' + JSON.stringify(url.parse(req.url)))
    var pathname = url.parse(req.url).pathname,
        filepath = path.join(root, pathname)

    //通过fs里的stat来判断文件的相关属性
    fs.stat(filepath,(err, stats)=>{
        console.log('err = ' + JSON.stringify(err))
        console.log('chunk = ' + JSON.stringify(stats))
        //如果stat读到了文件信息,err为null, chunk里将为有文件所有相关属性
        // if(!err && chunk.isfile())
        console.log('stats.isfule;' + stats.isFile())
        if(!err && stats.isFile()){
            res.writeHead('200')
            fs.createReadStream(filepath).pipe(res)
        }else{
            res.writeHead('404')
            res.write('file not find')
            res.end()
        }
    })

})

server.listen(3000)

console.log('Service is start on 3000')