/**
 * Created by bg_cloud on 17/6/15.
 */

function a (x, y ) {
    this.a = x;

    this.b = function(){
        return x + y
    }
}

var c = {
    a : 20,
    b : 1000
};

var n = new (a.bind(c, 5, 6));

console.log(n.a);

console.log(n.b());