
//  a single instance of toString() will now be shared between all of the Car objects 
// Constructors With Prototypes
function Car(model, year, miles) {

    this.model = model;
    this.year = year;
    this.miles = miles;
  
  }
  
  
  // Note here that we are using Object.prototype.newMethod rather than
  // Object.prototype so as to avoid redefining the prototype object
  Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
  
  // Usage:
  
  var civic = new Car("Honda Civic", 2009, 20000);
  var mondeo = new Car("Ford Mondeo", 2010, 5000);
  
  console.log(civic, 'Car prototype');
  console.log(civic.toString());
  console.log(mondeo.toString());
  
  
  // a simple version of the constructor pattern but it does suffer from some problems. One is that it makes inheritance difficult and the other is that functions such as toString() are redefined for each of the new objects created using the Car constructor.
  
  function Car2(model, year, miles) {
  
    this.model = model;
    this.year = year;
    this.miles = miles;
  
    this.toString = function () {
      return this.model + " has done " + this.miles + " miles";
    };
  }
  
  // Usage:
  
  // We can create new instances of the car
  var civic = new Car2("Honda Civic", 2009, 20000);
  var mondeo = new Car2("Ford Mondeo", 2010, 5000);
  
  // and then open our browser console to view the  output of the toString() method being called o these objects
  console.log(civic, 'constructor pattern');
  
  console.log(civic.toString());
  console.log(mondeo.toString());
  
  
  var o = {};
  o.constructor === Object; // true
  var o1 = new Object;
  o1.constructor === Object; // true
  var a = [];
  a.constructor === Array; // true
  var a = new Array;
  a.constructor === Array; // true
  var n1 = new Number(3);
  n1.constructor === Number; // true
  function Tree(name) {
  this.name = name;
  }
  var theTree = new Tree('Redwood');
  console.log('theTree.constructor is ' + theTree.constructor);
  // This example displays the following output:
  // theTree.constructor is function Tree(name) {
  // this.name = name;
  // }