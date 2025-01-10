// used to creates an array filled with all array elements that pass a test.

// Array.prototype.filter()

// In the filter method, we pass the callback as a parameter-

// .filter(callback)- the callback function takes three arguments:

// element—the current element of the array,

// index- the current index of the value being processed,

// array- the original array

// With filter-

let a = [1, 2, 3, 4, 5, 6];
   let even1 = [];
   for (var i = 0; i < a.length; i++) {
     if (a[i] % 2 === 0) even1.push(a[i]);
   }

   let a1 = [1, 2, 3, 4, 5, 6];
   let even = a1.filter(val => {
     return val % 2 === 0;
   });
 var evenNumber = a1.filter((x) => x % 2 == 0);    
console.log(evenNumber); //[2, 4, 6]


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  ];
// Filter the list of inventors for those who were born in between 1500 to 1600s.
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.log(fifteen); // // Galileo, Johannes objects


let olderInventors = inventors.filter(val => {
    return val.year > 1855;
  });
console.log(olderInventors); // Albert, Marie objects
// Find inventors older than 1855.
 var oldPeople = inventors.filter(function (a) {
    return a.passed >= 1909 && a.first === 'Marie';
  });
console.log(oldPeople); // Marie object

   function getCharacter(name) {
     return character => character.first === name;
   }
console.log(inventors.filter(getCharacter('Albert'))); //  Albert object