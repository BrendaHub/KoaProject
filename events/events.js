/**
 * Created by bg_cloud on 17/5/4.
 */
var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.setMaxListeners(11)

life.on('求安慰', function(who){
    console.log(
        '给' + who + '倒水'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + ' 揉肩'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + '做饭'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + '洗衣服'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + '....5'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + '....6'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + '....7'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + '....8'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + '....9'
    )
})
life.on('求安慰', function(who){
    console.log(
        '给' + who + '....10'
    )
})

life.on('求安慰', function(who){
    console.log(
        '给' + who + '你想累死我呀'
    )
})
life.emit('求安慰', 'brenda')