/**
 * Created by bg_cloud on 17/5/9.
 */
'use strict'

const fs = require('fs')

//创建一个读取流，
var thunk = fs.readFileSync('sample.txt','utf-8')

console.log(thunk.toString('utf-8'))


fs.writeFileSync('ext_file.txt', thunk, (err)=>{
    if(err){
        console.log('写文件失败')
    }else{
        console.log('写文件成功！')
    }
})