/**
 * Created by bg_cloud on 17/6/9.
 */

var a;

function foo(){

    a = 2;

    function baz(){
        console.log(a)
    }

    bar(baz)
}

function bar(fn){
    fn()
}

foo();