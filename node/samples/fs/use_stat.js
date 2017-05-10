/**
 * Created by bg_cloud on 17/5/9.
 */
'use strict'

const  fs = require('fs')

fs.stat('sample.txt', (err, stat) => {
    if(err){
        console.log(err)
    }else{

        console.log(JSON.stringify(stat))

        console.log('isFile: ' + stat.isFile())
        console.log('isDirectory: ' + stat.isDirectory())
        if(stat.isFile()){

            console.log('size :' + stat.size)
            console.log('birth time: ' + stat.birthtime)
            console.log(('modified time : ' + stat.mtime))

        }
    }
})