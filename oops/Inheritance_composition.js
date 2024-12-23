
// Inheritance -
// it is the process by which one object acquires state and behavious of another object.
// Inheritance allows us to define a class in terms of another class, which makes it easier to create and maintain an application. 
// This also provides an opportunity to reuse the code functionality and speeds up implementation time.
// The idea of inheritance implements the IS-A relationship. For example, mammal IS A animal, dog IS-A mammal hence dog IS-A animal as well, and so on.
// It allows code reuse.
// Types-
// 1-single
// 2-hierrarichal
// 3-multilevel
// 4-multiple(using interface)
// 1-class A
// class B:A

// 2-class A
// class B:A
// class C:A
// class D:A

// 3-class A
// class B:A
// class C:B

// 4-interface A
// interface B
// interface C:A,B

// Terminology-
// Base class 
// Derived class

// has-a relationship - composition
class Pushable {
    sendPushMessage() {
      console.log('Your file has been converted successfully.');
    }
  }
  
  class Converter {
    push;
    constructor() {
      this.push = new Pushable();
    }
    convert() {
      console.log('Converting...');
      return true;
    }
  }
  
  var c1 = new Converter();
  c1.convert();
  c1.push.sendPushMessage();
  
  // composition example-
  class Animal {
    eat() {
      console.log('Eating...');
    }
  }
  class Walkable {
    walk() {
      console.log('Walking...');
    }
  }
  class Swimmable {
    swim() {
      console.log('Swimming...');
    }
  }
  
  class Dog {
    animal;
    walkable;
    swimmable;
    constructor() {
      this.animal = new Animal();
      this.walkable = new Walkable();
      this.swimmable = new Swimmable();
    }
  }
  
  class Fish {
    animal;
    swimmable;
    constructor() {
      this.animal = new Animal();
      this.swimmable = new Swimmable();
    }
  }
  
  var a1 = new Dog();
  a1.animal.eat();
  
  //   is-a relationship -- inheritance 
  class Animal2 {
    eat() {
      console.log('Eating...');
    }
    walk() {
      console.log('Walking...');
    }
  }
  
  class Dog2 extends Animal2 {}
  class Cat extends Animal2 {}
  
  class Person {
    constructor(name, age) {
      this.name = name;
  
      this.age = age;
    }
  
    getName() {
      console.log(this.name)
      return this.name;
    }
  
    getAge() {
      console.log(this.age)
      return this.age;
    }
  
    toString() {
      console.log(`Name of person: ${this.name}`)
      return `Name of person: ${this.name}`;
    }
  }
  
  class Student extends Person {
    constructor(name, age, id) {
      super(name, age); // The super keyword is used to give reference to base class constructor and properties.
  
      this.id = id;
    }
  
    getMarks() {
      return this.tmarks;
    }
  
    setMarks(tmarks) {
      this.tmarks = tmarks;
    }
  
    toString() {
      return `${super.toString()},Student ID: ${this.id}`;
    }
  }
  
  let _std1 = new Student('Sheena', 24, 6);
  
  _std1.getAge(); // output is 24
  
  _std1.setMarks(500);
  
  _std1.getMarks(); // output is 500
  
  _std1.toString(); // Name of person: Sheena,Student ID: 6
  
  //   example another way
  class Bird {
    constructor(weight, height) {
      this.weight = weight;
  
      this.height = height;
    }
  
    walk() {
      console.log('walk!');
    }
  }
  
  class Penguin {
    constructor(bird) {
      this.bird = bird;
    }
  
    walk() {
      this.bird.walk();
    }
  
    swim() {
      console.log('swim!');
    }
  }
  
  const bird = new Bird('20', '5');
  
  const penguin = new Penguin(bird);
  
  penguin.walk(); //walk!
  
  penguin.swim(); //swi
  
  // ========================
  class Polygon {
    height;
    width;
    constructor(height, width) {
      this.height = height;
  
      this.width = width;
    }
  }
  
  class Square extends Polygon {
    constructor(sideLength) {
      super(sideLength, sideLength);
    }
  
    get area() {
      return this.height * this.width;
    }
  
    set sideLength(newLength) {
      this.height = newLength;
  
      this.width = newLength;
    }
  }
  
  var square = new Square(2);
  // console.log(square, square.area); // Square { height: 2, width: 2 }  , 4