/**
 * Created by bg_cloud on 17/5/9.
 *
 * 严格模式下， 采用同步机制读取文件，到Buffer 对应中。
 */

'use strict'

const fs = require('fs')

console.log(
    '>>>> BEGIN >>>>>'
)

var data = fs.readFileSync('sample.png')
console.log(data)
console.log(data.toString('base64'))
console.log(data.length +' bytes')

console.log('>>>> END >>>>> ')