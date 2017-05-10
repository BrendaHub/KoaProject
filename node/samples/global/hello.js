/**
 * Created by bg_cloud on 17/5/10.
 */
'use strict'

var name = 'Node.js'
var name_obj = {"name":'node.js',"version":'6.10.2'}
//es6，支持这种简单的模块的数据绑定
var s = `Hello, ${name}`
var ss = `Hello, ${name_obj.name},is version : ${name_obj.version}`

console.log(s)
console.log(ss)