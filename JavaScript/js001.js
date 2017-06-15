/**
 * Created by bg_cloud on 17/6/15.
 */
var a = 1;
{
    let a = 2;
    console.log('int printf ' + a)
}

console.log( ' out printf = ' + a );

//箭头函数

var foo = a =>{
    console.log(a)
};

var bar = function(a){
    console.log(a)
};

foo(2);

bar(3);