/**
 * Created by bg_cloud on 17/5/9.
 */
'use strict'

const fs = require('fs')
const  util = require('util')
var n = 0

var readStream = fs.createReadStream('bg2.0_v2.2.6.apk',{flags:'r',autoClose:true})

// console.log(util.inspect(stats))

readStream.on('data', (chunk)=>{
    // debugger
    n++
    console.log('data emits')
    console.log('Buffer.isBuffer(chunk) : ' + Buffer.isBuffer(chunk))
    // console.log(chunk.toString('utf8'))
    readStream.pause()//暂停
    console.log('data pause')
    setTimeout(()=> {
        console.log('data pause end')
        console.log('n : ' + n )
        readStream.resume()//读取流恢复
    }, 3000)
}).on('close',()=>{
    console.log('readStream Evnet close')
}).on('end', ()=>{
    console.log('n > ' + n )
    console.log('ReadStream Event end')
}).on('error', (err)=>{
    console.log(
        'ReadStream event error: ' + err
    )
}).on('readable', ()=>{
    console.log('ReadStream Event readable')
})

// fs.exists('sample.txt', (exists)=>{
//     console.log(exists ? 'it\'s there': 'no files')
// })

console.log('fs.exists : ' + fs.existsSync('sample.txt'))

console.log('end')

// var writeStream = fs.createWriteStream('bg2.0_v2.2.6_pipe.apk',{defaultEncoding: 'utf8'})
// readStream.pipe(writeStream)