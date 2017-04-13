/*function foo(){
    return x+y;
}
*/
var foo = (x,y) => x+y;

//console.log(foo(2,3))

var f1 = x => {
    y = foo(4,5)
    return x+y
}
console.log(f1(3))

// this
var obj = {
    i:10,
    b: () => console.log(this.i, this),
    c: function(){
        console.log(this.i, this)
    }
}
obj.b()
obj.c()