const start = performance.now();
myFunction();
const end = performance.now();
console.log(`Time taken: ${end - start} milliseconds`);

function print() {
var a = 2000;
let b = 100;
const c = 150;
}

print();

console.log(a); // 2000
console.log(b); //undefined
console.log(c);// undefined



function print() {
console.log(this); // print() {}
}

let print2 = () => {
console.log(this); // undefined
}

print();
print2();

for (var i = 1; i <= 5; i++) {
setTimeout(function () {
console.log(i)
}, i * 1000)
}


let a = [1,2,3,4];
const b = a;
b[1] = 200;
console.log(a); // [1,200,3,4];
console.log(b); // [1,200,3,4];

function foo(item) {

return

  [item];

}

console.log(foo(5));

const fruits = ['apple', 'orange'];
fruits.length = 0;
fruits[0];
console.log(fruits[0]) //

Arr=[2, 5,6,7,2,5,9]

Str='geeks for geek'

// keeg rof.. //output

// {g:2, e:4, k:2,..}




var Y = 1;
if (function F(){})
{
y += typeof F;
}
console.log(y); // 1undefined

var Output = (function(x)
{
delete X;
return X;
}
)(0);
console.log(output);//0

var X = { Foo : 1};
var Output = (function()
{
delete X.foo;
return X.foo;
}
)();
console.log(output); //undefiend

var Employee =
{
company: 'xyz'
}
var Emp1 = Object.create(employee);
delete Emp1.company 
console.log(emp1.company); //xyz

var Foo = function Bar()
{
return 7;
};
typeof Bar();
// The output would be Reference Error. A function definition can have only one reference variable as its function name.

const shape = {
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
    };
    
    console.log(shape.diameter()); // 20
    console.log(shape.perimeter()); // error
    // e.g
    class Chameleon {
    static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
    }
    
    constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
    }
    }
    // ++
    
    const freddie = new Chameleon({ newColor: 'purple' });
    console.log(freddie.colorChange('orange')); // error
    
    // e.g
    let greeting;
    greeting = {};
    console.log(greeting); // {}

    function checkAge(data) {

          if (data === { age: 18 }) {
        
            console.log('You are an adult!');
        
          } else if (data == { age: 18 }) {
        
            console.log('You are still an adult.');
        
          } else {
        
            console.log(`Hmm.. You don't have an age I guess`);
        
          }
        
        }
        
        checkAge({ age: 18 });
        
        let person = { name: 'Lydia' };
        
        const members = [person];
        
        person = null;
        
        console.log(members);

        var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.unshift("Lemon", "Pineapple");

console.log(fruits); // ["Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]

// value of k?
let i = 3;
let j = 4;
let k = 1;
for (i = 0; i < 3; i++) {
k += j;
j = j - 1;
}
console.log(k, 'k'); // 10

const fruits = ['apple', 'orange'];

fruits.length = 0;

console.log(fruits[0])

function foo(item) {

return

  [item];

}

console.log(foo(5));

// Function scope in js
// How to run this code-

function todoStore(isAuthenticated) {

    let todos = [];
    function add(todo) {
      let start = Date.now();
      if (isAuthenticated) {
        todos.push(todo);
      } else {
        throw "Not authorized to perform this operation";
      }
      let duration = Date.now() - start;
      console.log("add() duration : " + duration, todos);
    }

    return Object.freeze({
      add
    });

  }

// Solution-
  var callStore = this.todoStore(true);
callStore.add('demo');