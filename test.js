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
------------------------------------
  let foo = ( a = 3, b = 5 ) => {
console.log( a + b );
}
foo()
----------

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

 for (var i = 0; i < 3; i++) { setTimeout(function log() { console.log(i); // What is logged? 
 }, 1000); }


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


print b empty array?
let arr = [1,2,3,4,5];
let b = arr;
first way -
arr.length = []
second way-
arr.pop()
arr.pop()
arr.pop()
arr.pop()
arr.pop()
// b? //
console.log(b)

third way-
arr.splice(0)


sum(3, 4, 5) => using es6 functions

sum(1)(2)(3)
------------------------------------
let p1 = new Promise((resolve, reject) => {
resolve("foo");
});
let p2 = new Promise((resolve, reject) => {
reject("bar");
});
console.log("bip");
p1.then(val => {
console.log(val);
return p2;
})
.then(val => {
console.log("baz");
})
.catch(err => {
console.log(err);
});
console.log("bop");

output-
bip
bop
foo
bar
----------------
 for (var i = 0; i < 5; i++) {
setTimeout(function () {
console.log(i);
},100);
}

output-
5
5
5
5
5

--------------
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

+++++++++++++++++++
 value of k?
let i 3;
let j = 4;
let k 1;
for (i = 0; i < 3; i++) {
k += j;
j = j - 1;
}

value of a?
function foo(obj) {
return {
a: obj.bar,
b: obj.baz
}}
const { a } =
foo({ bar: 27, baz: 41 })

const a = (function() {
return parseInt("1.5");
})()
What is the data type of a?
Select the best option:
function
object
number
string

---------------------
 
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
