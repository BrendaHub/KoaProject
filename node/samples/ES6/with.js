/**
 * Created by bg_cloud on 17/5/25.
 */
'use strict'

function foo(obj){
    with(obj){
        a = 2;
    }
}
var o1 = {
    a : 3
}

var o2 = {
    b : 3
}

foo(o1)
console.log(o1.a)