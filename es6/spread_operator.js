
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
