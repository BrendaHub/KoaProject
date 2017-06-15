/**
 * Created by bg_cloud on 17/6/1.
 */

// const  Buffer  = require('buffer')

const buf = new Buffer(256);

var len = buf.write('www.runoob.com');

console.log('写入字节数：' + len);

console.log(buf.toString('utf8', 0, len));

console.log(buf.toJSON(buf));

var buf1 = new Buffer('菜鸟教程');
console.log('buf1 len = ' + buf1.length);
var buf2 = new Buffer('www.runoob.cn');
console.log('buf2 len = ' + buf2.length);
var buf3 = Buffer.concat([buf1, buf2]);

console.log('buf3内容为：' + buf3.toString() + ', len = ' + buf3.length);