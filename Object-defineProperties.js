// 4. Object.defineProperties

// Set properties
var newObject = {};
Object.defineProperties(newObject, {

    "someKey": {
      value: "Hello World",
      writable: true
    },
  
    "anotherKey": {
      value: "Foo bar",
      writable: false
    }
  
  });

//   Define constructor for Circle objects

function Circle(radius) {
this._radius = radius || 1;
}

Object.defineProperties(Circle.prototype, {
// Getter/Setter for radius
'radius': {
get: function () { return this._radius; },
set: function (radius) { this._radius = radius; }
},
// Getter for area
'area': {
get: function () { return this._radius * this._radius * Math.PI; }
},
// Getter for circumference
'circumference': {
get: function () { return 2 * this._radius * Math.PI; }
}
});

var myCircle2 = new Circle(1.1); // Construct an Circle object
// Using getter/setter like properties, rather than methods
console.log(myCircle2.radius); // 1.1 (Test getter)
myCircle2.radius = 2.2; // (Test setter)
console.log(myCircle2.radius); // 2.2
console.log(myCircle2.area); // 15.205308443374602
console.log(myCircle2.circumference); // 13.823007675795091
console.log(myCircle2); // Circle {_radius: 2.2}