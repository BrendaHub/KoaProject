/**
 * Created by bg_cloud on 17/5/9.
 */
'use strict'
const  fs = require('fs')

console.log('>>>>>  BEGIN >>>>> ')

var data = 'Hello , Node.js! '

fs.writeFile('output.txt', data, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Ok .... ')
    }
})


console.log('>>>>>> END >>>>> ')