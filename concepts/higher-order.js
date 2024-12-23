// values
const number = 1;
const greeting = 'Hello';

// function declaration
function foo() {
return 'bar';
}

// named function expression - possible
// because functions are first-class
// and therefore usable as values
const otherFoo = function() {
return 'bar';
};

// using arrow functions and implicit return
const anotherFoo = () => 'bar';

number; // 1
greeting; // 'Hello'
foo(); // 'bar'
otherFoo(); // 'bar'
anotherFoo(); // 'bar'

// Functions that return functions or take functions as input are called Higher-Order Functions.

const identity = x => x;

identity(1); // 1
// Used as Higher-Order Function
identity(foo);
// ƒ foo() {
// return 'bar';
// }
identity(foo)(); // 'bar'