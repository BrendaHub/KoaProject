/**
 * Created by bg_cloud on 17/6/16.
 */
function foo(num){
    console.log('foo: ' + num );

    //记录foo 被调用的次数

    foo.count++
}

foo.count = 0;

var i ;

for(i = 0 ; i < 10 ; i++){
    if(i > 5 ){
        foo(i)
    }
}

console.log(foo.count);


//采用this的方式重写上面的代码段
var count1 = 0;

function foo1(num){
    console.log('foo1 = ' + num);

    this.count1++;
    console.log('this.count1 = ' + this.count1)
}
foo1.count1 = 0;
this.count1 = 0;

var obj = {
    count1 : 0
};

var newfun = foo1.bind(null);

var j;
for(j = 0 ; j < 10 ; j++){
    if(j>5){
        // foo1(j)
        newfun(j)
    }
}


console.log('foo1.count1 = '+ foo1.count1);
console.log('this.count1 = '+ this.count1++);
console.log('this. = '+ JSON.stringify(this));


// console.log('i = ' + i )

//
// function fun1(){
//     var j = 0, a = 0
//
//     function fun2() {
//         for ( a = 0; a < 10; a++) {
//             j += a
//            setTimeout(function(){
//                console.log('>>>> setTimeout a = ' + a )
//                console.log(' >>   setTomeout j = ' + j)
//            }, i*100);
//
//             setTimeout(()=>{
//                 console.log(' =>=>=> settimeout a = ' + a )
//                 console.log('=>=>=>=> settimeout j = ' + j )
//             },i*200)
//
//
//         }
//     }
//
//     return fun2
// }
//
//
// var fun3 = fun1()
//
// fun3()
//
//
// for(var b = 0 ; b < 10 ; b ++){
//     setTimeout(function(){
//         console.log('settimeout = ' + b )
//     }, 1000)
// }
