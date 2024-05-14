console.error('ff');

console.time('loop');
for (let i = 0; i < 100; i++) {
  // Do stuff here
}
console.timeEnd('loop');

console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
.then(data=>data.json())
.then(data=>{
console.timeEnd('fetching data');
console.log(data);
});

const dogs = [{ name: 'rocky', age: 2 }, { name: 'rocco', age: 8 }]; // Here dogs is a array of object.
dogs.forEach(dog => {
     console.groupCollapsed(`${dog.name}`);
     console.log(`This is ${dog.name}`);
     console.log(`${dog.name} is ${dog.age} years old`);
     console.log(`${dog.name} is ${dog.age * 7} dog years old`);
     console.groupEnd(`${dog.name}`);
});

function foo() {
  function bar() {
   console.trace();
  }
  bar();
  }
  // o/p-
  // bar
  // foo

  var myCircle3 = {
    radius: 1.1,
    getArea: function () { return this.radius * this.radius * Math.PI; }
  }
console.log(myCircle3.radius, myCircle3);     // 1.1
console.log(myCircle3.getArea());  // 3.8013271108436504  
console.log(myCircle3.__proto__ === Object.prototype);  // true
console.log(Object.prototype.hasOwnProperty('toString'));  // true
console.log(myCircle3.hasOwnProperty('radius'));    // true
console.log(myCircle3.hasOwnProperty('toString'));  // false (inherited, NOT own property)
console.log(myCircle3.toString());  // invoke  