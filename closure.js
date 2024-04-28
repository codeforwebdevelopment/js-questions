// Creating closures in loops: A common mistake

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i, 'timer');
  }, i * 1000);
}

// o/p - 55555

// Closures can be used to prevent this problem by creating a unique scope for each iteration, storing each unique value of the variable within its scope, as follows can solve the above problem-

// solution 1
for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x, 'correctedtimer');
    }, x * 1000);
  })(i);
}

// o/p - 01234

// In an ES2015 context, you can simply use let instead of var in the original code:
// solution 2

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// example
function say667() {
  // Local variable that ends up within closure
  var num = 42;
  var say = function () {
    console.log(num);
  };
  num++;
  return say;
}
var sayNumber = say667();
sayNumber(); // logs 43

// example
var gLogNumber, gIncreaseNumber, gSetNumber;
function setupSomeGlobals() {
  // Local variable that ends up within closure
  var num = 42;
  // Store some references to functions as global variables
  gLogNumber = function () {
    console.log(num);
  };
  gIncreaseNumber = function () {
    num++;
  };
  gSetNumber = function (x) {
    num = x;
  };
}
setupSomeGlobals();
gIncreaseNumber();
gLogNumber(); // 43
gSetNumber(5);
gLogNumber(); // 5

var oldLog = gLogNumber;
setupSomeGlobals();
gLogNumber(); // 42

// example

function first() {
  console.log('first');
}
function second() {
  console.log('second');
}
function third() {
  console.log('third');
}
first();
setTimeout(second, 1000); // Invoke `second` after 1000ms
third();

// example
function outer(x) {
  var y = 8; // function scope, available to inner function
  // Define a nested function, which adds its argument to
  //  outer function's argument and local variable.
  var addToOuter = function (z) {
    console.log('x:' + x + ' y:' + y + ' z:' + z);
    return x + y + z;
  };
  return addToOuter; // return the nested function
}

// Invoke the outer function and save the return function in an variable
var f1 = outer(3);
// Invoke the inner function
console.log('sum:' + f1(10)); // x:3 y:8 z:10 sum:21
// Invoke the inner function
console.log('sum:' + f1(20)); // x:3 y:8 z:20 sum:31
// Take note that the value of x:3 remains the same across the invocations,
//   which is provided by the outer function's argument

// Invoke the outer function again with a different argument
var f2 = outer(9);
// Invoke the inner function
console.log('sum:' + f2(30)); // x:9 y:8 z:30 sum:47
// Invoke the inner function
console.log('sum:' + f2(40)); // x:9 y:8 z:40 sum:57
// Take note that the value of x:9 remains the same across the invocations,



//   which is provided by the outer function's argument
let adder = function (n) {
  return function (m) {
    return n + m;
  };
};

let add33 = adder(3);
let eight = add33(5);
console.log(eight); // 8
eight = adder(3)(5);

// example
var counter = function () {
  (this.count = 0),
    (this.increment = function () {
      this.count++;
    }),
    (this.decrement = function () {
      this.count--;
    });
};

var SafeCount = function () {
  var count = 0;
  return {
    increment: function () {
      count = count + 1;
    },
    decrement: function () {
      count = count - 1;
    },
    getCount: function () {
      return count;
    },
  };
};

console.log(SafeCount().getCount()); // 0

var myCount = new counter();
myCount.increment();
myCount.increment();
myCount.increment();
myCount.increment();
myCount.increment();
myCount.count = 53;
console.log(myCount.count); // 53

//    example
var header = 'Global Header';
function dialog(d1) {
  var privateVar = 'Dialog V1';
  return function message(ml) {
    return function show(p1) {
      console.log(header); // Global Header
      console.log(privateVar); // Dialog V1
      console.log(d1); // Hello
      console.log(ml); // Good Morning
      console.log(p1); // and have a nice day
    };
  };
}
var message = dialog('Hello');
var show = message('Good Morning');
show('and have a nice day');
// This feature allows for nested functions to obtain the values created in the execution context of
//    the parent function. ( or the global namespace)

// Factorial using closure-

console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(5)
);

// example:

function addFlag() {
  let count = 0;

  return function () {
    return count++;
  };
}

let newCounter = addFlag();

console.log(newCounter()); // 0
console.log(newCounter()); // 1
console.log(newCounter()); // 2

let counter2 = addFlag();
console.log(counter2()); //  0
console.log(counter2()); //  1

// Functions counter and counter2 are created by different invocations of addFlag.
// So they have independent outer Lexical Environments, each one has its own count


// A closure is a function that remembers its outer variables and can access them. all functions in JavaScript are closures,
function print(msg,sc=''){
console.log(msg, sc)
}

function multiply(a) {
  return function (b) {
    return a * b; // takes "a" from the outer lexical environment
  };
}
print(multiply(1)(2), 'multiply1'); // 2
print(multiply(5)(-1), 'multiply2'); // -5

// // example
var e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  }; 
}

console.log(sum(1)(2)(3)(4));


// 3. What will the following code output and why?
var b = 1;
function outer(){
   	var b = 2
    function inner(){
        b++;
        var b = 3;
        console.log(b)
    }
    inner();
}
outer();

// Output to the console will be “3”.

// There are three closures in the example, each with it’s own var b declaration. When a variable is invoked closures will be checked in order from local to global until an instance is found. Since the inner closure has a b variable of its own, that is what will be output.

// Furthermore, due to hoisting the code in inner will be interpreted as follows:

function inner () {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}