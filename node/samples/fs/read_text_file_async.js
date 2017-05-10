/**
 * Created by bg_cloud on 17/5/9.
 * 严格模式下，读取文本文件的的例子， 非同步机制
 */

'use strict'

const fs = require('fs')
console.log(' BEGIN ')

fs.readFile('sample.txt' , 'utf-8', (err,data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
        console.log(data.length + 'bytes')
    }
})
console.log('   END    '  )