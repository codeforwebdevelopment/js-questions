
// apply---------------
var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say2(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
say2.apply(person1, ['Hello']); // Hello Jon Kuperman
say2.apply(person2, ['Hello']); // Hello Kelly King

// 2
function log(msg) {
  console.log(msg); // hello world
}
log('hello world');

// Pass multiple parameters-

function log() {
  console.log.apply(console, arguments); // hello world
}
log('hello', 'world');
log('hello', 'world', 'new');

// Add data with all logged messages

function log() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('(data)');
  console.log.apply(console, args); // (data) hello world
}
log('hello', 'world');
log('hello', 'world', 'nnnnn');

// example
var foo = function () {
  var args = Array.prototype.slice.call(arguments);
  console.log(args[1], args, 'arg');
};
console.log(foo(1, 2, 4), 'foo'); // undefined

// you cannot use arrow function with objects- try to avoid that- you cannot do that
var _this = this;
var obj2 = {
  prop2: 'b',
  valueOfThis: () => {
    console.log(this, 'this2');
    return this.prop2;
  },
};
// soluion
var obj1 = {
  prop1: 'a',
  valueOfThis: function () {
    console.log(this, 'this1');

    return this.prop1;
  },
};


console.log(obj1.valueOfThis(), 'function');
console.log(obj2.valueOfThis(), 'arrow');

// bind---------------
var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say3() {
  console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say3.bind(person1);
var sayHelloKelly = say3.bind(person2);

sayHelloJon(); // Hello Jon Kuperman
sayHelloKelly(); // Hello Kelly King

// example
let People = function (person, age) {
  this.person = person;
  this.age = age;
  this.info = function () {
    console.log(this.person + ' is ' + this.age + ' years old');
  };
};

let person3 = new People('John', 21);
person3.info(); // logs : John is 21 years old

let separated = person3.info.bind(person3);
separated(); // logs : John is 21 years old

// The bind(person3) statement ensures that "this" always refers to person3 inside the bound method- info()

let newObj = {
  person: 'sam',
  age: '22',
};

// binding the separated method to a new object
let newBound = person3.info.bind(newObj);
newBound(); // logs : sam is 22 years old

// call-----------------------
// problem we have to call another function in different functions

// function F() {
//   console.log(this)
//   this.doSomething('good');
// }
// function doSomething(str)
// {
// console.log(str)
//  }
// F();
// when you call this function it will show an error. To call the function you have to invoke this function in different contexts. Corrected Code:
// [base class].call([child class],[arguments for base class constructor]);

function F() {
  this.doSomething('good');
}
// let obj = { doSomething: function(x) { console.log(x); } }
let obj = {
  doSomething: (x) => {
    console.log(x);
  },
};

F.call(obj); // good


// Here we create a function then we create an object in which we are declaring that function. with the call built-in method, we can run this function.
// example
function Person(name, age) {
  this.name = name || '';
  this.age = age || '';
}
function Student(name, age, school) {
  Person.call(this, name, age); // Call Person function with this and arguments
  this.school = school || '';
}

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}
function UndergraduateStudent(name, age, school, year) {
  Student.call(this, name, age, school); // Call Student function with this and arguments
  this.year = year || '';
}
var peter = new UndergraduateStudent('peter', 21, 'EEE', 1);
console.log(new Student('John Wick', 50).age, 'student'); // 50
console.log(peter); // UndergraduateStudent {name: "peter", age: 21, school: "EEE", year: 1}
console.log(peter instanceof UndergraduateStudent); // true
console.log(peter instanceof Student); // false
console.log(peter instanceof Person); // false
console.log(peter instanceof Object); // true
console.log(peter instanceof Date); // false

// example
function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

var rectangle = function (len, wid) {
  this.type = 'rectangle';
  this.len = len;
  this.wid = wid;
};

var square = function (len) {
  rectangle.call(this, len, len);
};

var rectangleObj = new rectangle(2, 3);
console.log(rectangleObj.len);
console.log(rectangleObj.wid);
console.log(rectangleObj.type);

var squareObj = new square(2);
console.log(squareObj.len);
console.log(squareObj.wid);
console.log(squareObj.type);

//  example
var person1 = { firstName: 'Jon', lastName: 'Kuperman' };
var person2 = { firstName: 'Kelly', lastName: 'King' };

function say(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.call(person1, 'Hello'); // Hello Jon Kuperman
say.call(person2, 'Hello'); // Hello Kelly King

// example
var personn = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

var myObject = {
  firstName: 'Mary',
  lastName: 'Doe',
};

personn.fullName.call(myObject); // Will return "Mary Doe"



const myData = {
  name: 'Rajat',
  city: 'Delhi',
  displayStay: function () {
    console.log(this.name, 'stays in', this.city)
  },
}
myData.displayStay()

// create an object yourData and try to use displayStay
const yourData = {
 name: 'name',
 city: 'city'
}

// answer
myData.displayStay.call(yourData)