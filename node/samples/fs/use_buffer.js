'use strict'

const  fs = require('fs')

var data = fs.readFileSync('sample.txt')
console.log(data)
console.log(data.length + 'bytes')

console.log('First three bytes: ' + data[0]+ ', ' + data[1] + ', ' + data[2])

var text = data.toString('utf-8')
console.log(text)

var text_hex = data.toString('hex')
console.log('hex : ' + text_hex)

var buf = new Buffer(text, 'utf-8')

console.log(buf)

var buf_GBK = new Buffer(text, 'utf-8')
console.log(buf_GBK)