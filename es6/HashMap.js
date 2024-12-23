// A HashMap (also known as a dictionary or hash table in other programming languages) is a collection of key-value pairs

// Each key in the HashMap is unique, and each key maps to a value. The HashMap allows you to retrieve, update, or delete values by using the associated key.
// In JavaScript, the Map object is an ideal implementation of the HashMap concept, which is part of the ECMAScript 6 (ES6) standard.

const words = new Map([[1, 'Angular'], [2, 'Guru']]);

var map = new Map();
map.set('name', 'steadyadvice');
map.get('name');
Prices.set('banana', 0.8);
// Check if an item exists
console.log(map.has('grapes'));

// Remove an item
map.delete('banana');

var roles = new Map([
['r1', 'User'],
['r2', 'Guest'],
['r3', 'Admin'],
]);
console.log(roles.get('r2')) //Guest
console.log(roles.size) //3

// Collision Handling: When two keys hash to the same index, a collision occurs. Hash maps handle collisions through methods like chaining or open addressing.