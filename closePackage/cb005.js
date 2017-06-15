/**
 * Created by bg_cloud on 17/6/15.
 */
function foo(){
    console.log(a)
}

function bar() {
    var a = 3;
    console.log(a+'sss');
    foo()
}

var a = 2;

bar();