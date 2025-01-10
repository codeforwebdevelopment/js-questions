
// map method in array
const array = [2, 5, 9];
let squares = array.map((num) => num*num);
console.log(squares); // [4, 25, 81] 
console.log(array); // [2, 5, 9]


// The map will take every return value from the callback and create a new array with them. This method creates a new array with the results of calling a provided function on every element in the calling array.  This array method comes in Functional or declarative programming. With this, you can also improve your classic imperative code with declarative code which makes code more readable.  it makes code shorter. 

// Array.prototype.map()

// It basically used to transform an array.
// let result = arr.map(function(item, index, array) {  // returns the new value instead of item});
// Imperative programming

    const doubleMap3 = numbers => {
      const doubled = [];
      for (let i = 0; i < numbers.length; i++) {
        doubled.push(numbers[i] * 2);
      }
      return doubled;
    };
    console.log(doubleMap3([2, 3, 4])); // [4, 6, 8]

// Functional programming

    const doubleMap4 = numbers => numbers.map(n => n * 2);
    console.log(doubleMap4([2, 3, 4])); // [4, 6, 8]

// create a list of Boulevards in Paris that contain 'de' anywhere in the name.

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  const category = document.querySelector('.mw-category');
  const links = Array.from(category.querySelectorAll('a'));
  const de = links
              .map(link => link.textContent)
              .filter(streetName => streetName.includes('de'));

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955, points: 2, type: 'a'   },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727, points: 3, type: 'b'  },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642, points: 4, type: 'c'   },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934, points: 5, type: 'a'   },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630, points: 6 , type: 'b'  },
  ];
  // Give us an array of the inventor first and last names
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
   console.log(fullNames); //["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler"]

 const data = inventors.map(item => item.first.length);
   console.log(data) // [6, 5, 7, 5, 8]
   const double2 = n => n.points * 2;
   const doubleMap2 = numbers => numbers.map(double2);
   console.log(doubleMap2(inventors)); //[4, 6, 8, 10, 12]
      
var oldNames = inventors.filter((x) => x.year >= 1867 && x.type === 'a').map((x) => x.first);
console.log(oldNames); //["Albert", "Marie"]

   var totalYears = inventors.filter((x) => x.type === 'a').map((x) => x.passed)
     .reduce((prev, cur) => prev + cur, 0)
     console.log(totalYears); //3889

     let arr=[2, 3, 4,7, 7, 9, 11, 14, 43, 56];
     const double = n => n * 2;
    console.log(double(3)); //6
    const doubleMap = numbers => numbers.map(double);
    console.log(doubleMap(arr)); //[4, 6, 8, 14, 14, 18, 22, 28, 86, 112]


    function isEven(x) {
        return x % 2 === 0
      }
  
      function addTwo(x) {
        return x * 2
      }
  
      const result = arr.filter(isEven).map(addTwo);  
      console.log(result); //[4, 8, 28, 112]  


      function findLength(str) { return str.length }
      var lengthsstr = ["cat", "it", "banana", "fish", "do", "dodo"].map(findLength); // [3, 2, 6, 4, 2, 4]
      
      var lengths = ["cat", "it", "banana", "fish", "do", "dodo"].map(function (str) {
        return str.length;
      });
      console.log(lengths, 'length'); // [3, 2, 6, 4, 2, 4]


      const characters = [
        { id: 1, name: 'ironman', env: 'marvel' },
        { id: 2, name: 'black_widow', env: 'marvel' },
        { id: 3, name: 'wonder_woman', env: 'dc_comics' },
      ];
      let arr1 = characters
           .filter(character => character.env === 'marvel')
           .map(character => Object.assign({}, character, { alsoSeenIn: ['Avengers'] }))
      console.log(arr1);
      // [
      //   { name: 'ironman', env: 'marvel', alsoSeenIn: ['Avengers'] },
      //   { name: 'black_widow', env: 'marvel', alsoSeenIn: ['Avengers'] }
      // ]