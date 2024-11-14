
const arr2 = [11, [22, 33], [44, 55], 66];
const flatArr = [].concat(...arr2); //=> [11, 22, 33, 44, 55, 66]
console.log(flatArr)

function flattenArray(arr) {
const flattened = [].concat(...arr);
return flattened.some(item => Array.isArray(item)) ? flattenArray(flattened) : flattened;
}

const arr3 = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const flatArr2 = flattenArray(arr3);
console.log(flatArr2)  

let object1 = { a: 1, b: 2, c: 3 }
let object2 = { b: 30, c: 40, d: 50 }
let merged = { ...object1, ...object2 }
console.log(merged) // {a:1, b:30, c:40, d:50}
const array = ['a', 'b', 'c', 'd', 'e']
const newArray = [1, ...array, 2, 3];
console.log(newArray); // [1, "a", "b", "c", "d", "e", 2, 3]