/**
 * koa 的控制层
 */
const  fs = require('fs')

function addMapping(router, mapping){
    console.log(
        'mapping:' + JSON.stringify(mapping)
    )
    for(var url in mapping){
        console.log(
            'url:' + JSON.stringify(url)
        )
        if(url.startsWith('GET ')){
            var path = url.substring(4)
            router.get(path, mapping[url])
            console.log(`request URL mapping: GET ${path}`)
        } else if(url.startsWith('POST ')){
            var path = url.substring(5)
            router.post(path, mapping[url])

            console.log(`register URL mapping: POST ${path}`)
        } else if(url.startsWith('PUT ')){
            var path = url.substring(4)
            router.put(path, mapping[url])
            console.log(`register URL mapping: PUT ${path}`)
        } else if(url.startsWith('DELETE ')){
            var path = url.substring(7)
            router.del(path, mapping[url])
            console.log(`register URL mapping: DELETE ${path}`)
        }else {
            console.log(`invalid URL: ${path}`)
        }
    }
}

function  addController(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f)=>{
        return f.endsWith('.js')
    }).forEach((f)=>{
        console.log(`process controller: ${f}....`)
        let mapping = require(__dirname + '/' + dir + '/' + f)
        addMapping(router, mapping)
    })
}

module.exports = function(dir){
    let controllers_dir = dir ||'controllers',
        router = require('koa-router');

    var Router = new router();

    addController(Router, controllers_dir)

    return Router.routes()
}