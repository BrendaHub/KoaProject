/**
 * Created by bg_cloud on 17/6/23.
 */

function foo() {
    //返回一个箭头函数
    return (a)=>{
        //this 继承foo()
        console.log(this.a)
    }


}

var obj1 = {
    a:2,
    b:()=>{
        console.log(this.a)
    }
};

var obj2 = {
    a:3
};

// (foo.apply(obj1))()
var bar = foo.call(obj1);

bar();

obj1.b();


var obj3 = {
    a:3,
    b:()=>{
        console.log('this.a = ' + this.a)
    },
    c:5
};

console.log(obj3['c']);
var _f = obj3['b'];
_f();

console.log(obj3.a);
console.log('aaaa ' + obj3.b());

//配置上可编辑属性名字
var prefix = 'foo';

var myObject = {
    [prefix + 'bar']: 'Hello',
    [prefix + 'baz']: 'World'
};

console.log(myObject['foobar']);
console.log(myObject['foobaz']);