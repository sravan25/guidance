// scoping
let j;
const  k = 10;
function add() {
    var i;
    i = 2+3;
    return i;
}
j = add();

let m;
if(j==5) {
     m = 10;
    var k1 = 10;
} else {
     m =6;
    var k1 =6;
}

var i =10;

console.log(m,k1);

for( var a=0;a<5;a++) {
}

console.log("a == ",a); 0

for(let b=0;b<5;b++) {
}

console.log("b==",b);

