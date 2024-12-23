
function print(x){
    console.log(x);
  }
  
      function FunctionalType(){
        const Animal = function (species, name) {
      const obj = {};
      obj['species'] = species;
      obj['name'] = name;
      obj['makeSound'] = function () {
        // code goes here
      }
      obj['eat'] = function () {
        console.log('hi');
        
        // code goes here
      }
      obj['sleep'] = function () {
        // code goes here
      }
      return obj;
    }
    const tiger = Animal('tiger', 'tigger');
    console.log(tiger)
    console.log(tiger.eat());
    console.log(tiger.makeSound());
      }
  
  
  function FunctionalsharedType(){
     const Animal2 =function(species, name) {
        const obj2 ={};
        obj2['species'] =species;
        obj2['name'] =name;
        extend2 (obj2, objMethods2);
        return obj2;
          }
  
        const extend2= function(obj2 , methods) {
        for (var key in methods) {
        obj2[key]=methods [key]
        }
        }
        
        const objMethods2={
        makeSound: function() {},
        eat: function(){},
        sleep: function(){}
        }
        
        const tiger2=Animal2('tiger', 'tigger');
        const fsd = tiger2.eat();
        const df = tiger2.makeSound();
        console.log(fsd, df);
  }
  
  function PrototypalType(){
  var Animal = function (species, name) {
      var obj = Object.create(objMethods);
      obj.species = species;
      obj.name = name;
      return obj;
     }
  
     var objMethods = {
      makeSound: function () { },
      eat: function () { },
      sleep: function () { }
     }
    
     var tiger = Animal('tiger', 'tigger');
     tiger.eat();
     tiger.makeSound();
     
     //creates a new object with a specified prototype object. It is used for single inheritance
     let bookPrototype = {
      getFullTitle: function () {
        return this.title + " by " + this.author;
      }
     }
     
     let book = Object.create(bookPrototype);
     book.title = "JavaScript: The Good Parts";
     book.author = "Douglas Crockford";
     print(book.getFullTitle());//JavaScript: The Good Parts by Douglas Crockford
  }
  
  function PseudoclassicalType(){
  
  var Animal = function (species, name) {
      this.species = species;
      this.name = name;
    }
    Animal.prototype.makeSound = function () { },
      Animal.prototype.eat = function () { },
      Animal.prototype.sleep = function () { }
   
    var tiger = new Animal('tiger', 'tigger');
    tiger.eat();
    tiger.makeSound();
  }
   //================  Another example of Pseudo-classical Pattern
      // function Robot(name, job) {
      //   this.name = name;
      //   this.job = job;
      // }
      
      // Robot.prototype.introduce = function() {
      //   console.log("Hi! I'm " + this.name + ". My job is " + this.job + ".");
      // };
      
      // var bender = new Robot("Bender", "bending");
      // bender.introduce();  // Hi! I'm Bender. My job is bending.
      // console.log(Object.getPrototypeOf(bender) === Robot.prototype);  // true
      
      // var wallE = new Robot("Wall-E", "trash collection");
      // wallE.introduce();    // Hi! I'm Wall-E. My job is trash collection.
      // console.log(Object.getPrototypeOf(wallE) === Robot.prototype);  // true 
  
      // Object.getPrototypeOf(new Foobar()) // refers to the same object as Foobar.prototype.