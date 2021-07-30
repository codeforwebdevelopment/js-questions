console.log(5 % 1, 5 % 2);

var foo = function() {
var args = Array.prototype.slice.call(arguments);
console.log(args[1]);
}
console.log(foo(1, 2, 4))

 function getSuperheroPowers() {
var powers = [];
var stoneNumber;
for(stoneNumber = 0; stoneNumber <= 10; stoneNumber++)
powers [stoneNumber] = function() { return stoneNumber; };
return powers;
}
var powers = getSuperheroPowers();
console.log(powers[5])

console.log(Boolean('false')=== Boolean(false)) 

function person( id, name) {
var id = id;
var name = name;
}
function student(id, name) {
person.call(this, id, name);
}
console.log(new student(50,"John Wick").id);
  
 
var obj = { hasownProperty: 1, foo: 2 };

console.log(obj.hasOwnProperty('foo'));


var power = "100";
function getPowerNumber()
{
var power = "10";
function f() {
return power;
}
return f;
}
console.log(getPowerNumber())

 
console.log(null == undefined)
console.log(null === undefined)


const obj1 = {
a: 5,
b: {
c:6
}
}
const obj2 = Object.assign({}, obj1);
const obj3 = {...obj1};
obj1.b.c = 8;
console.log(Object.assign({},obj1, obj2,obj3));
 
 
var foo = function() {
var args = Array.prototype.slice.call(arguments);
console.log(args[1]);
}
console.log(foo(1, 2, 4))
  
let foo = ( a = 3, b = 5 ) => {
console.log( a
+ b );
}
console.log(foo(6), foo( 7, 4))
 
  
function foo3() {
console.log(a);
var a = 5;
console.log(a);
};
foo3();

let foo4 = function() {
console.log(a);
var a = 5;
console.log(a);
};

foo4();
