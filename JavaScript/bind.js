/**
 * Created by bg_cloud on 17/6/16.
 */
debugger;

function foo(num){
    let a = 0;

    console.log('a = ' + a  + ',  out variable = ' + this.b);

    function c(){
        console.log(new data().getTime())
    }
}

var foo1 = {
    b:2,
    c:function(){
        console.log('foo1 inner fun = ' + new Date().getTime())
    }
};

var newobj = foo.bind(foo1);

// foo.c()

// newobj.c()

console.log(newobj instanceof foo);

console.log(typeof  newobj);

console.log(JSON.stringify(newobj));




