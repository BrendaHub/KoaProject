/**
 * Created by bg_cloud on 17/5/10.
 */

'use strick'

const fs = require('fs')

var rs = fs.createReadStream('../http/static/index.html')

var ws = fs.createWriteStream('copy_index.html')

rs.pipe(ws)