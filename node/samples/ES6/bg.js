/**
 * Created by bg_cloud on 17/5/25.
 */
'use strict';

function foo(){
    var x = 0 ;
    return function(y){
        x = x + y;
        console.log(x )
    }
}

var b = foo();

console.log(typeof b );

console.log(b instanceof Function);

b(1);

b(3);

b(1);

//这样可以打印出object自已的所有属性，过滤掉原型链上属性
var _obj = {};
console.log(JSON.stringify(_obj));
for(var name in _obj){
    console.log('>>' + name);
    if(_obj.hasOwnProperty(name)){
        console.log(name)
    }
}

var arr = [];
console.log(arr);

console.log(arr.length);



function clone(object) {
    function OneShotConstructor() {

    }
    OneShotConstructor.prototype = object;
    return new OneShotConstructor; //返回一个对象， 这个对象的原型指向了object, 这个参数
}

console.log(typeof  clone(Array).prototype);


//字符串去空格
String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
};

var str = '   abc zef       ';
console.log(str.length);
console.log(str.trim().length);