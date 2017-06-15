/**
 * Created by bg_cloud on 17/6/15.
 */
var obj = {
    count : 0 ,
    cool : function coolFun(){
        if(this.count < 1){
            setTimeout(function timer(){
                this.count++;
                console.log('more awesome'+ this.count)

            }.bind(this), 1000)
        }
    }
};

obj.cool();


function original(x){
    this.a = 1;
    this.b = function(){
        return this.a + x
    }
}
var obj1 = {
    a:10
};

var newobj = new (original.bind(obj1,2));

console.log(newobj.a);

console.log(newobj.b());


var sum = function(x,y){
    console.log('x = ' + x + ', y = ' + y );
    console.log('this = '  +  this);
    return x + y };
var succ = sum.bind(null, 1);

console.log('succ = ' + succ(3));


