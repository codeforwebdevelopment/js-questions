
let g: number = 0b111001; // Binary

let h: number = 0o436; // Octal

let i: number = 0xadf0d; // Hexa-Decimal

console.log(typeof Number ); //number

console.log( typeof BigInt ); //bigint

// String- 

// Strings inherit methods from String.prototype.    

// when division(/) is applied to non-numbers like "6"/ "3" it automatically converts it to the number.

// Escaping character-

// Used to format the string.


let data= 'I\'ve got no right to take my place...';

console.log(typeof String ); //string

// Undefined-

// A value that is not defined and has no keyword is known as an undefined value.    

// int number;

// Here the number has an undefined value.    

console.log(typeof undefined); //undefined

// Null value-

// null is the object in JS. A value that is explicitly defined by the keyword "null" is known as a null value. Special primitive type.   


String initializePrice=null;

var bar = null;

console.log(typeof bar === "object");  // logs true!

console.log( typeof null ); //object

console.log(typeof undefined == typeof null);  // false

console.log(typeof undefined == typeof NULL);  // true (The expression will be evaluated to true, since NULL will be treated as any other undefined variable.)

// Note: JavaScript is case-sensitive and here we are using NULL instead of null.

// Boolean-

// It returns True or False.

console.log( typeof Boolean ); //boolean

// Symbol-

// A Symbol is a unique and immutable primitive value and may be used as the key of an Object property.

console.log( typeof Symbol ); //symbol

// Non-primitive:

// These are mutable data types means it can be modified. It includes Object, Array.  

// objects- 

// In this key will be a string and the value can be a primitive, object, or function.  

// Array-

// It is just a sequence to store information. You can declare an array in various ways.

// By using type keyword-

// Example-

// outside class

type MyArrayType = Array<{ id: number, text: string }>;

// Inside class  

arr1: MyArrayType = [

  { id: 1, text: 'Sentence 1' },

  { id: 2, text: 'Sentence 2' },

  { id: 3, text: 'Sentence 3' },

  { id: 4, text: 'Sentenc4 ' },

];

// By using Array keyword-

var mySentences: Array<Object> = [

    { id: 1, text: 'Sentence 1' },

    { id: 2, text: 'Sentence 2' },

    { id: 3, text: 'Sentence 3' },

    { id: 4, text: 'Sentenc4 ' },

  ];

  let list2: Array<number> = [1, 2, 3];

// Generic type Array declaration-

  let list1: number[] = [1, 2, 3];

// Basic Type conversion example-

var x = 42;

var explicit = String(x); // explicit is set to "42"

const value = String(true); // now value is a string "true"

console.log(typeof value); // string

console.log( Number("   123   ") ); // 123

console.log( Number("123z") );      // NaN (error reading a number at "z")

console.log( Number(true) );        // 1

console.log( Number(false) );       // 0

null + 1 = 1 

undefined + 1 = NaN 

console.log(typeof NaN === "number");  // logs "true"

console.log(NaN === NaN);  // logs "false"