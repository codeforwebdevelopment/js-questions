// Function Declaration:

function sayHi() {

alert( "Hello" );

}

// Function Expression.

let sayHi = function() {

alert( "Hello" );

};

sayHi // it will not run

// to run this function.

let func = sayHi;

func(); // Hello

// Function Expression with arguments

let sum = function(a, b) {

return a + b;

};

// Arrow functions can be used in the same way as Function Expressions.

let double = n => n * 2;

// roughly the same as: let double = function(n) { return n * 2 }

// calling this without an object-

function sayHi() {

alert(this);

}

sayHi(); // undefined

numArray.sort((a, b) => a - b); // For ascending sort

var numArray = [140000, 104, 99];

numArray.sort(function(a, b) {

return a - b;

});

// anonymous function expression

(function() {

    // Your code goes here

}());

// namespace -> function expression can be stored in a variable.  Functions stored in variables do not need function names

var anoyn = (function() {

}());

// function expression

// console.log(foo());

// alert(foo()); // ERROR! foo wasn't loaded yet

var foo = function() { return 5; }

// Function Declaration

console.log(foo()); // 5

// alert(foo()); // Alerts 5. Declarations are loaded before any code can run.

// function foo() { return 5; }