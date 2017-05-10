'use strict'

const fs = require('fs')

console.log('>>>>>  BEGIN >>>>>')
var data = fs.readFileSync('sample.txt', 'utf-8')

console.log(data)
console.log(data.length + 'bytes')

console.log('>>>>> END >>>>> ')