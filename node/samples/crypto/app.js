/**
 * Created by bg_cloud on 17/5/9.
 */

// const  Koa = require('koa')
// var app = Koa()

const crypto = require('crypto')

function aesEncrypt(data, key){
    const cipher = crypto.createCipher('aes192', key)
    var crypted = cipher.update(data,'utf8','hex')
    crypted += cipher.final('hex')
    return crypted
}

function aesDecrypt(data, key) {
    const decipher = crypto.createDecipher('aes192', key)
    var decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
}

const data = 'Hello , this is a secret message !'

const key = '111111'

var encrypted = aesEncrypt(data, key)
var decrypted = aesDecrypt(encrypted, key)

console.log('Plain text:' + data)
console.log('Encrypted text:' + encrypted)
console.log('Decrypted text:' + decrypted)


//md5加密 逻辑
// const crypto = require('crypto')
const hash = crypto.createHash('md5')

hash.update('Hello, world!')
hash.update('Hello, node.js!')

var r = hash.digest('hex')
console.log(`md5 hash ${r}`)

//secret-key 加密码逻辑
// const crypto = require('crypto')
const hmac = crypto.createHmac('sha256', 'secret-key')

hmac.update('Hello, world!')
hmac.update('Hello, node.js!')

var r = hmac.digest('hex')

console.log(
    'hmac: ' + r
)