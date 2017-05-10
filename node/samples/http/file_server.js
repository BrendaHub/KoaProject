/**
 * Created by bg_cloud on 17/5/10.
 */
'use strict'
var fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http')

// console.log('path = ' + JSON.stringify(process.argv))
var root = path.resolve(process.argv[2] || '.')

var server = http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname,
        filepath = path.join(root,pathname)

    fs.stat(filepath, (err, stats)=>{
        if(!err && stats.isFile()){
            console.log('200' + req.url)
            res.writeHead(200)
            fs.createReadStream(filepath).pipe(res)
        }else{
            console.log('404' + req.url)
            res.writeHead(404)
            res.end('404 Not ')
        }
    })
})

server.listen(3000)

console.log('Server is running at http://127.0.0.1:3000/')