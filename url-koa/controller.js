/**
 * Created by bg_cloud on 17/4/20.
 */
const  fs = require('fs')
//add url-router in /constrollers:

function addMapping(router, mapping){
    for(var url in mapping){
        console.log(`mapping in url  : ${url}`)
        if(url.startsWith('GET ')){
            var path = url.substring('4')//解析出GET 后面的url配置
            router.get(path, mapping[url])
            console.log(`register URL mapping: GET ${path}`);
        }else if(url.startsWith('POST ')){
            var path = url.substring(5)
            router.post(path, mapping[url])
            console.log(`register URL mapping: POST ${path}`);
        }else if(url.startsWith('PUT ')){
            var path = url.substring(4)
            router.put(path, mapping[url])
            console.log(`register URL mapping: PUT ${path}`);
        }else if(url.startsWith('DELETE ')){
            var path = url.substring(7)
            router.del(path, mapping[url])
            console.log(`register URL mapping: DELETE ${path}`);
        }else{
            console.log(`invalid URL: ${url}`)
        }
    }
}


function displayProp(obj){
    var names = ''
    for(var name in obj){
        names += name + ":" + obj[name] + ", "
    }
    return names;
}

function addControllers(router, dir){
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        return f.endsWith('.js')
    }).forEach((f) => {
        console.log(`process controller: ${f}`)
        let mapping = require(__dirname + '/' + dir + '/' + f)
        //通过require加载js文件后， 会显示module.exports的内容
        if(f.startsWith('hello')){
            // console.log(displayProp(mapping))
            console.log(mapping.ready())
        }else if(f.startsWith('index')){
            console.log(mapping.ready())
        }
        addMapping(router, mapping)
    })
}

//暴露
module.exports = function(dir){
    let controllers_dir = dir || 'controllers'
    let router = require('koa-router')()
    addControllers(router, controllers_dir)
    return router.routes()
}