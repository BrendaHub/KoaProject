/**
 * Created by bg_cloud on 17/6/16.
 */

// function foo(){
//     console.log(this.a)
// }
// var a = 1
//
// foo()
//
// function foo(){
//     console.log(this.a)
// }
//
// var a = 2;
//
// (function (){
//     // 'use strict'
//     foo()
// })()


// function foo(){
//     console.log(this.a)
// }
//
// var obj = {
//     a: 2,
//     foo: foo
// }
//
// // var obj1 = foo.bind(obj)
// // console.log(typeof obj1)
// obj.foo()
//
// function foo(){
//     console.log(this.a)
// }
//
// var obj1 = {
//     a: 32,
//     foo:foo
// }
//
// var obj2 = {
//     a:42,
//     obj1:obj1
// }
//
// obj2.obj1.foo()
function foo(num,n){

    console.log(this.a );
    console.log(num + n )
}

function doFoo(fn){
    fn()
}

var obj = {
    a : 43,
    foo: foo
};

var a = 'adsfadsfasdf';

doFoo(obj.foo);


foo.call(obj,2);

foo.bind(obj);
foo();

foo.apply(obj,[5,7]);