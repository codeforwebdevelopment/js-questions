
// OOPS FEATURES-
// Object Oriented Programming (OOP) is a programming model where programs are organized around objects and data rather than action and logic. 
// The software is divided into a number of small units called objects. The data and functions are built around these objects.
// The data of the objects can be accessed only by the functions associated with that object.
// The functions of one object can access the functions of another object.

// Class
// A class is the core of any modern Object Oriented Programming language such as C#.
// In OOP languages it is mandatory to create a class for representing data. 
// A class is a blueprint of an object that contains variables for storing data and functions to perform operations on the data. 
// A class will not occupy any memory space and hence it is only a logical representation of data.
// To create a class, you simply use the keyword "class" followed by the class name:
// Class is a reference type and its object is created on the heap memory.
// Class can inherit the another class.
// Class can have the all types of constructor and destructor.
// The member variable of class can be initialized directly.
// class object can not be created without using the new keyword, it means we have to use it.
// A class consists of data and behaviour. Its data is represented by fields and behaviour is represented by Methods.


// Demo obj=new Demo();
// class Employee
// {
 
// }
 
// Object
// Objects are the basic run-time entities of an object oriented system. They may represent a person, a place or any item that the program must handle. 
// "An object is a software bundle of related variable and methods."
//  "An object is an instance of a class"

// Objects-
// It is a physical entity.
// An object is basically a block of memory that has been allocated and configured according to the blueprint. A program may create many objects of the same class.Objects are also called instances, and they can be stored in either a named variable or in an array or collection.

// function Car( model ) {
 
//     this.model = model;
//     this.color = "silver";
//     this.year = "2012";
   
//     this.getInfo = function () {
//       return this.model + " " + this.year;
//     };
   
//    }
   
//    var myCar = new Car("ford");
    
//    myCar.year = "2010";
    
//    console.log( myCar.getInfo() ); // ford 2010

   // example
  //  function Person(name) {

  //   this.name = name;
    
  //   this.greeting = function() {
    
  //     console.log('Hi! I\'m ' + this.name + '.');
    
  //   };
    
  //   }
    
  //   // we can create object using functions
    
  //   let person1 = new Person('Bob');
    
  //   let person2 = new Person('Sarah');
    
  // console.log(person1.greeting(), 'person1'); // Hi! I'm Bob.
    
    
    // From Person class, we can now create some actual people: student, teacher
    
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
        
        console.log(this.a<this.b<this.c, 'less'); // true
        
        console.log(this.c>this.b>this.a, 'greater'); // false
        
        }
        
        }
        
        const j1 = new Number2(5,6,7);
        j1.compare();
      



        