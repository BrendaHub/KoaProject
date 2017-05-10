/**
 * Created by bg_cloud on 17/5/9.
 */
'use strict' //严格模式

const fs = require('fs')

console.log('>>>> BEGIN >>>> ')
fs.readFile('sample.png', function(err, data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
        console.log(typeof  data)
        console.log(data instanceof Buffer)
        console.log(data.toString())
        console.log(data.length + 'bytes')
    }
})
console.log(">>>> END >>>>>")
