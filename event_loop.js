// Allocation in JavaScript-

// Value initialization:

const n = 123; // allocates memory for a number

const s = 'azerty'; // allocates memory for a string

const o = {

  a: 1,

  b: null,

}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and

// contained values

const avalues = [1, null, 'abra']; // a

function f(a) {

  return a + 2;

} // allocates a function (which is a callable object)

// function expressions also allocate an object

someElement.addEventListener('click', () => {

  someElement.style.backgroundColor = 'blue';

}, false);

// Allocation via function calls:

// Some function calls result in object allocation.

const d = new Date(); // allocates a Date object

const e = document.createElement('div'); // allocates a DOM element


const s2 = s.substr(0, 3); // s2 is a new string

// Since strings are immutable values,

// JavaScript may decide to not allocate memory,

// but just store the [0, 3] range.

const a = ['ouais ouais', 'nan nan'];

const a2 = ['generation', 'nan nan'];

const a3 = a.concat(a2);

// new array with 4 elements being

// the concatenation of a and a2 elements.