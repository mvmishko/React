function foo(){
    return [1,2,3];
}

var tmp = foo(), a=tmp[0], b=tmp[1], c=tmp[2];

console.log(a,b,c);

function bar(){
    return {
        x:4, 
        y:5,
        z:6
    }
}

var tmp = bar(), x = tmp.x, y = tmp.y, z = tmp.z;
console.log(x,y,z);

var [a,b,c] = foo()             // Object destructure iz ES6 - skraceni nacin za niz
console.log(a,b,c);
var {x:x,y:y,z:z} = bar();      // Object destructure iz ES6 - skraceni nacin za objekat

console.log(x,y,z);

// Ili skraceno
var {x,y,z} = bar();
console.log(x,y,z);

var {x:neki, y, z} = bar();
console.log(neki);