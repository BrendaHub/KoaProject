/**
 * Created by bg_cloud on 17/5/10.
 */
'use strict'
//__filename 获取当前文件的完整文件名
console.log('current js file: ' + __filename)
//__dirname 获取当前文件所在的目录
console.log('current is dir:' + __dirname)

process.name = 'Sample Node.js'
//process.argv存储了命令行的参数
console.log('arguments: ' + JSON.stringify(process.argv))
//process.cwd(),返回当前工作目录
console.log('cwd : ' + process.cwd())
//切换当前工作目录
var d = '/private/tmp'
if(process.platform === 'win32'){
    //如果是Windwos, 切换到c:\Windows\System32
    d = 'C:\\Windows\\System32'
}
// console.log(JSON.stringify(process).toString())
process.chdir(d)//切换目录
console.log('cwd back : ' + process.cwd())

//process.nextTick() 将在下一轮事件循环中调用
process.nextTick(()=>{
    console.log('nextTick callback!')
})
console.log('nextTick was set ! ')

//程序即将退出时的回调函数
process.on('exit', (code)=>{
    console.log('about to exit code: ' + code)
})