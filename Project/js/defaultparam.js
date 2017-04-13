function mn(a,b){
    return a*b;
}
console.log(mn(1));     //NaN

function mn2(a,b){
    //b = typeof b !== 'undefined' ? b: 1;
    b = b || 10;
    return a*b;
}
console.log(mn2(1));

function mn3(a,b=5){
    return a*b;
}
console.log(mn3(1));     
console.log(mn3(2,5));


function sab(a,b){
    return a+b;
}
var s = sab;
var ss=sab(5,5);
console.log(s(3,4));
