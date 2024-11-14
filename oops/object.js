emp={id:102,name:"Rahul Kumar",salary:50000}

// object literals can contain properties and methods.

// var myObjectLiteral = {

//     variableKey: variableValue,

//     functionKey: function () {

//       // ...

//     }

// };

// using instance
let user2 = Object.create(null);
user2.name = "Cam";
user2.points = 8;
user2.increment = function () {
user2.points++;
}
let roles = {
type: "Admin", // Default value of properties
displayType: function () {
// Method which will display type of role
console.log(this.type);
}
}

// Create new role type called super_role
let super_role = Object.create(roles);
super_role.displayType(); // Output:Admin
// Create new role type called Guest
let guest_role = Object.create(roles);
guest_role.type = "Guest";
guest_role.displayType(); // Output:Guest

// Object Linked to Other Object Pattern

var myObject = {
foo: 'bar',
someMethod: function () {
console.log(this, 'in');
}
};
myObject.someMethod();
function someMethod() {
console.log(this, 'somemethod'); // undefined
}
someMethod();


var myCar = new Object();
myCar['make'] = "Ford";
myCar['model'] = "Mustang";
myCar['year'] = 1987;
console.log(myCar["make"]) // By this we can access the object property and can also assign data & the object's property key can be a dynamic value
var myCar = new Object()
var propertyName = "make";
myCar[propertyName] = "Ford";



function Car() {
this.make = "Ford"
this.model = "F123"
}
var obj = new Car();
//access the object values
console.log(obj.make)
console.log(obj.model)

function book(title, author){
this.title = title;
this.author = author;
}
var myBook = new book("Perl", "Mohtashim");
console.log("Book title is : " + myBook.title + "");
console.log("Book author is : " + myBook.author + "");