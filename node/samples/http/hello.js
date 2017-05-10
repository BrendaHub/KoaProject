/**
 * Created by bg_cloud on 17/5/10.
 */
'use strict'

var http = require('http')
var server = http.createServer((request, response)=>{
    console.log(request.method + ": " + request.url)
    response.writeHead(404, {'Content-Type':'text/html'})
    response.end('<h1>Hello World!</h1>')
})

server.listen(8080)
console.log('Servers is running at http://127.0.0.1:8080')