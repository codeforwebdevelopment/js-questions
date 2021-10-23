# javascript interview questions

console.log(5 % 1, 5 % 2);

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

find sum of all numbers-
let obj = {e:2,
           r:3,
           et:'2',
            aet:{as: '2',
               sd: 3},
           rtt: [1,2, 3,]
          };

   <div>
        <ul>
        <li>hey</li>
        <li>there</li>
        </ul>
        <ul>
        <li>world</li>
        </ul>
        </div>

      console.log(document.querySelectorAll('ul li'));






class User {

    username = '';
    tags = [];
    followers = [];
    //  @param {string} username
    // @param {Array.<string>} tags
    
    constructor(username, tags) {
    this.username = username;
    this.tags = tags;
    this.followers = [];
    }
    /**
    * @param {User} user
    @returns void
    ***/
    addFollower(user) {
    this. followers.push(user);
    }
    /**
    * Get the followers who are tagged with tag
    @param {string} tag
    * @returns {Array.<User>}
    */
    getFollowers (tag) {
    // Fill in this line
    // return this.followers.filter(
    // (follower) => follower.tags.includes (tag));

    // return this. followers.includes (
    //     (follower) => follower.tags.filter(tag)
    //     );

//     return this.followers.filter(
// (follower) =>
// follower.tags.filter((followerTag) => tag ===
// followerTag
// ).length > 0
// );

return this.followers.map(
(follower) => follower.tags.includes(tag)
);
    }
    }

    let ibj = new User('a', ['1', '2', '3', '4', '5']);
    ibj.addFollower('b')
    console.log(ibj.getFollowers('2'));


-------------------------
 
 
Q.1.
Consider the two functions below. Will they both return the same thing? Why or why not?
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

Q.2
In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

Q.3
Write a sum method which will work properly when invoked using either syntax below.
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

Q.4
What will the code below output to the console and why?
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

Q.5
What is the output of the following code?
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

Q.6
What would following code return?
console.log(typeof typeof 1);

Q.8
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

Q.7 How to check if an object is an array or not? Provide some code

Q.9
write a http service method where i can call N number of requestes with the same function using AXIOS (method GET)
Need a textarea box with a random text
when i clicked on button need to copy of that text in side the text area and paste it out in another div
if i changed the text in text area and again if i clicked on button need to update the text in side div

-------------

class Number2{
    a;
    b;
    c;
    constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    }
    
    compare(){
    
    console.log(this.a<this.b<this.c);
    
    console.log(this.c>this.b>this.a);
    
    }

    arsf (){
      


    }
    
    }
    
    const j1 = new Number2(5,6,7);
    j1.compare();
-------------


let person = {
    name:"Emily",
    age:20,
    };
    // Object.freeze(person)
    // Object.seal(person)
    Object.defineProp(person, "job",{

        value:3,
        
        writable: false
        
        });
    [person.name] = "Jack";
    person.job = "Developer";
    console.log(person);
-------------
    function sum(a, b, c) {
        if (!isNaN(a) || !isNaN(b) || !isNaN(c)) {
            throw('Not a number')
        }else{
        return a+b+c
        }
        }
        sum(12,"12","14");

---------------------
Lexical scope
Difference between const, let and var.
what isNaN function does?
What is closure 
Scope in JavaScript
Hoisting in js
Ecma6
== & ===
 Difference between let, var and const
What is context in JS?
Difference between map, reduce and filter
Difference between class and function
Normal Function vs Arrow function
Difference between async and defer
Difference between == and ===
Difference between setTimeout and setInterval
What are the different DOM API’s
DOM vs Virtual DOM
How Event loop works
What is event delegation
Difference between call, bind and apply
Explain Promise
Throttling vs Debouncing
What is Closure and why should we use closure
What are the different internal storage and its differences
What is variable hoisting
Difference between document.ready(){} and window.onload(){}
What is async, preload, prefetch in script
Callback vs Promise
Explain Currying
Questions related to flatten array
Call by value vs Call by reference
Prototypal inheritance
How do you optimise page performance
Write polyfill for Filter, Reduce, Promise
   
write your own reduce , filter method
-----------------------
DOM Traversal, Manipulation & Creating Elements

Q1-
HTML Element
h2 
p - text
p- text
h2 

find all the text of all p element between two h2 elements. 

Q2.
text
text
text

Add the HTML element to each text like p, h1 etc

---------------------

