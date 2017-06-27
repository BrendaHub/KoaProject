/**
 * Created by bg_cloud on 17/6/23.
 */
if(! Function.prototype.softBind){
    Function.prototype.softBind = function(obj){
        var fn = this;
        //捕获所有的curried参数
        var curried = [].slice.call(arguments, 1);

        var bound = function(){
            return fn.apply((!this || this === (window || global))?obj:this);

            curried.concat.apply(curried, arguments)

        };
        bound.prototype = Object.create(fn.prototype);
        return bound
    }
}


function foo() {
    console.log('name : ' + this.name)
}

var obj = {name: 'obj'},
    obj2 = {name:'obj2'},
    obj3 = {name:'obj3'};

var fooOBJ = foo.softBind(obj);



