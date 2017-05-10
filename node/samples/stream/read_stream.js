/**
 * Created by bg_cloud on 17/5/10.
 */
'use strick'

const fs = require('fs')

var rs = fs.createReadStream('../http/static/index.html')

var n = 0
rs.on('data', (chunk)=>{
    n++
    console.log('event cmmit')
    console.log(Buffer.isBuffer(chunk))
    setTimeout(()=>{
        console.log('读取次数：' + n)
        console.log(chunk.toString('utf8'))

    }, 3000)
})

rs.on('end', ()=>{
    console.log('END')
})

rs.on('error', (err)=>{
    console.log('error is values,  %s ' , err)
})