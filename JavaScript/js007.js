/**
 * Created by bg_cloud on 17/6/23.
 */

function foo(a,b){
    console.log('a: ' + a + ', b: ' + b )
}

//我们可以DMZ空对象
var $ = Object.create(null);

//把数据展开成参数
foo.apply($, [2,3]);

foo.call($, 2,3);

var _bind = foo.bind($, 2);

_bind(4);


var a = 2;
var o = {a:3,foo:foo};
var p = {a:4};

o.foo();
// (p.foo = o.foo)()

o.foo();


