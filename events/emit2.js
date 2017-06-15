/**
 * Created by bg_cloud on 17/6/1.
 */
var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('监听器 listener1 执行！ ')
};

var listener2 = function listener2(){
    console.log('监听器 listener2 执行！')
};

//注册一个监听事件connection 的第一次监听
eventEmitter.addListener('connection', listener1);

eventEmitter.addListener('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners + ' 个监听器监听连接事件');

eventEmitter.emit('connection');//启动监听事件

eventEmitter.removeListener('connection', listener1);//去除listener1监听处理函数
console.log('listerner1 不再受到监听');

//再一次触发监听事件connection
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' 个监听器监听连接事件');



eventEmitter.emit('error');

console.log('程序执行完毕');