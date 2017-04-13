var a = [6,7,8];

function foo(x,y,z){
    console.log(x,y,z);
}
foo.apply(null,[1,2,3]);

// ili koriscenjem spread operatora ...
var b = [1,...a, 5];
var c = [1,a, 5];
console.log(b);
console.log(c);

var str = "Prouka"
console.log(str.split(''))
console.log([...str])
console.log(str[3])

var obj = {
        x:4, 
        y:5,
        z:6
    }
console.log(...obj)