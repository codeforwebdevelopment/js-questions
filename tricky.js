const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
  // perimeter() {return  2 * Math.PI * this.radius},
};
console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN

// for(let k1=0; k1<5; k1++) {} console.log(k1); 

 function func() { console.log("User1") } 
 function func() { console.log("User2") } 
 function func() { console.log("User3") } 
 function func() { console.log("User4") } 
 func(); 

 const fnc=(function(a) { 
  delete a; 
  return a;
 })(7); 
 console.log(fnc) 

 for (var i = 0; i < 3; i++) { 
  setTimeout(() => console.log(i), 1);
}

var a=5 , b=1

var obj = { a : 10 }

with(obj)

{

console.log(b)

}

  

function print() {
  console.log(this, 'function'); // print() {}
 }
 
 let print2 = () => { 
  console.log(this, 'arrow'); // undefined
 }
 
 print();
 print2();


console.log(foo); // tricky Here foo is still undefined 
var foo = function foo(){ 
 	return 12; 
};



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
outer(); // “3” tricky  What will the following code output and why?

// There are three closures in the example, each with it’s own var b declaration. When a variable is invoked closures will be checked in order from local to global until an instance is found. Since the inner closure has a b variable of its own, that is what will be output.

// Furthermore, due to hoisting the code in inner will be interpreted as follows:

function inner () {
    var b; // b is undefined
    b++; // b is NaN
    b = 3; // b is 3
    console.log(b); // output "3"
}


var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
console.log(trees, trees.length) //  What is trees in JavaScript


function foo(){ 
  return foo; 
}
console.log(new foo() instanceof foo); // false

// reverse a string // goh angasal a m'
let str = "i'm a lasagna hog";
console.log(str.split('').reverse().join('')); 


console.log(Boolean('false')=== Boolean(false)) 
 
console.log(null == undefined)
console.log(null === undefined)

  
console.log(0.1+0.2 === 0.3) 

let number = 0; console.log(number++); console.log(++number); console.log(number);

var text = "foo bar loo zoo moo";
text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    console.log(text)

// find sum of all numbers-
let obj = {e:2,
           r:3,
           et:'2',
            aet:{as: '2',
               sd: 3},
           rtt: [1,2, 3,]
          };


          // Consider the two functions below. Will they both return the same thing? Why or why not?
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

// Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5


// What will the code below output to the console and why?
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// What is the output of the following code?
var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

// What would following code return?
console.log(typeof typeof 1);

function duplicate(){

}
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]


function sum(a, b, c) {
  if (!isNaN(a) || !isNaN(b) || !isNaN(c)) {
      throw('Not a number')
  }else{
  return a+b+c
  }
  }
  sum(12,"12","14");
  
  let arr = [1, 2, 4, 6];
arr.forEach((el) => {
  if (el == 2) {
    return el;
  }
  console.log(el); // 1 4 6
});


console.log(counter); // show error in case of let and undefined in case of var
var counter = 1;
let counter = 1;

console.log(func()); // you can use function after the declaration 
let func = () => {
    return `Hello`;
}

var x = 1;
function func2() {
  console.log(x, 'x func2');  // undefined because we have initialize the variable with same name
  var x = 2;
}
func2();

function func3(params) {
    params = true;
}
var value = false;
func3(value);
console.log(value, 'value func3');  // false

function func4(params) {
    params.x = true;
}
var object = {
    x: false
};
func4(object);
console.log(object.x, 'func4'); // true


function outer() 
{ 
    var arr = []; 
    var i;         
    for (i = 0; i < 4; i++) 
    { 
        // storing anonymus function 
        arr[i] = function () { return i; } 
    } 
    // returning the array. 
    return arr; 
} 
var get_arr = outer(); 
console.log(get_arr, 'get_arr');  
console.log(get_arr[0](), 'get_arr 0');  // 4
console.log(get_arr[1]());  // 4
console.log(get_arr[2]());  // 4
console.log(get_arr[3](), 'get_arr 3');  // 4

function outer2() {
  let counter = 0; 
  function incrementCounter () {
    counter ++;
    console.log(`counter`, counter);
  }
  return incrementCounter;
}
const aCounter = outer2();
const bCounter = outer2();
aCounter(); // 1
aCounter(); // 2
aCounter(); // 3
bCounter(); // 1
aCounter(); // 4


var greeting = `Hello`;
var name = `John`;
function greet() {
    console.log(this.greeting + ` ` + this.name, 'greet3'); 
}
// greet(); //  Cannot read properties of undefined (reading 'greeting')

// correct way
const obj = {
    greeting: `Hi`,
    name: `Chris`
};
greet.call(obj);


console.log(`script start`);
setTimeout(function() {
  console.log(`setTimeout`);
}, 0);
Promise.resolve().then(function() {
  console.log(`promise1`);
}).then(function() {
  console.log(`promise2`);
});
console.log(`script end`);
// o/p
// script start
// script end
// promise1
// promise2
// setTimeout

// --------
function blockFor300ms() {
     /* blocks js thread for 300ms */
     console.log(`Message from block 300ms`);
}
setTimeout(() => {
     console.log(`Hello`);
}, 0);
/// 100ms
// fetch(`https://twitter.com/will/tweets/1`).then(() => {
//      console.log("Data from twitter")
// });
blockFor300ms();
console.log(`Hai!`);

// Message from block 300ms
// Hai!
// Hello

function do2(callback) {
    console.log('Execute function: do2');
    return callback('do2 callback param');
}

var do2Result = do2((param) => {
    console.log(`print ${param}`);
    return `return from callback(${param})`; // we could use that return
});

console.log(`print ${do2Result}`); // console.trace(`print ${do2Result}`);

// Execute function: do2
// print do2 callback param
// print return from callback(do2 callback param)

// node problems-js/tricky.js
