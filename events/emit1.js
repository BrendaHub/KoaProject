/**
 * Created by bg_cloud on 17/6/1.
 */
//node.js里的事件机制
var events = require('events');
//创建出一个eventEmitter对象
var eventEmitter = new events.EventEmitter();

eventEmitter.setMaxListeners(11);
//现在可以开始给eventEmitter注册监听事件。
eventEmitter.on('defaultEvent', ()=>{
    console.log('进入监听事件一次' + arguments.length);
    for(var i=0 ; i < arguments.length; i ++){
        console.log('================');
        console.log(arguments[i]);
        console.log('==================')
    }
});

eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听二次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听三次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听四次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听五次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听六次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听七次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听八次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听九次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听十次' + err)
});
eventEmitter.on('defaultEvent', (err)=>{
    console.log('进入事件监听十一次' + err)
});

eventEmitter.emit('defaultEvent','参数一');

console.log('事件监听结束');
