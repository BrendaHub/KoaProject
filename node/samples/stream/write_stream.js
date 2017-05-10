/**
 * Created by bg_cloud on 17/5/10.
 */
'use strick'

const fs = require('fs')

var ws1 = fs.createWriteStream('output1.txt', 'utf8')
ws1.write(
    '使用Stream写入文本数据...\n'
)
ws1.write('end.')
ws1.end()

var ws2 = fs.createWriteStream('output2.txt')
var buf = new Buffer('使用Stream写入二进制文本数据...\n', 'utf8')

console.log(buf)
console.log(Buffer.isBuffer(buf))
console.log(buf.toString('utf8'))
ws2.write(new Buffer('使用Stream写入二进制文本数据...\n', 'base64'))
ws2.write(new Buffer('End.', 'base64'))
ws2.end()

console.log('done ....')

console.log('Now: ' + new Date().toTimeString());

setTimeout(function () {
    console.log('Run at ' + new Date().toTimeString());
}, 1500);

setInterval(function () {
    console.log('Schedule at ' + new Date().toTimeString());
}, 3000);

console.log('timer setted.');