function varTest(){
    var x=1;
    if(true){
        //var x=2;          2 2
        let x=2;        //  2 1
        console.log(x);
    }
    console.log(x);
}
varTest();

var a=1;
var b=2;
if(a==1){
    var a=11;
    let b=22;

    console.log(a); //11
    console.log(b); //22
}
console.log(a); //11
console.log(b); //2

//hoisting
function radi(){
    console.log(bar);
    var bar = 2;
}
radi();

function radi2(){
    console.log(foo=3, foo);
    var foo;
}
radi2();