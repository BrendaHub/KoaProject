/**
 * Created by bg_cloud on 17/6/20.
 */
// function foo(el){
//     console.log(el, this.id)
// }
//
// var obj = {
//     id:'awesome'
// }
//
// [1,2,3].forEach(foo, obj)

function foo(p1, p2){
    this.val = p1 + p2
}

var bar = foo.bind(null, 'p1','p3');

console.log('bar = ' + typeof bar);

var baz = new bar('p2');

bar.val;

console.log(baz.val);
