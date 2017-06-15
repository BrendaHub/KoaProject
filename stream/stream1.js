/**
 * Created by bg_cloud on 17/6/2.
 */
var fs = require('fs');


var data = '';


//创建一个可读流
var readerStream = fs.createReadStream('input.txt');

//设置可读流的编码为utf-8
readerStream.setEncoding('utf-8');

//处理流事件

readerStream.on('data', (chuck) =>{
    data += chuck;
    setTimeout(()=>{
      console.log('chuck  = ' + chuck)
    }, 1000)
});

readerStream.on('error', (err)=>{
    console.log('读取文件出错： ' + err)
});

readerStream.on('end', ()=>{
    console.log('读取文件结束');
    console.log('data 为 = ' + data)
});

console.log('程序执行完毕！！');