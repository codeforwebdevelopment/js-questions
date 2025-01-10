// The entries() method returns an Array Iterator object with key/value pairs for each index in the array. The entries method returns the key/value pairs in the map as an array which we can loop over applying for-of.To access the current array index in a for/of the loop, you can use the Array#entries() function.

// Object.entries-It allow us to get an object's enumerable(computable) property pairs in array format ([key, value]). It was officially added in the ES2017 specification."lib": ["es2017"]


// Object.entries() creates a nested array of the key/value pairs of an object.
// Initialize an object
const operatingSystem = {

name: 'Ubuntu',
version: 18.04,
license: 'Open Source'
};
// Get the object key/value pairs
const entries = Object.entries (operatingSystem);
console.log(entries);
// Output
// [
// ["name", "Ubuntu"]
// ["version", 18.04]
// ["license", "Open Source"]
// ]

for (const [i, v] of arr.entries()) {
      console.log(i, v); // Prints "0 a", "1 b", "2 c"
    }
    
      var numbers = [1, 2, 3];
        var val = numbers.entries();
        console.log(val.next().value);  //[0, 1]
        console.log(val.next().value); //[1, 2]
    console.log(Object.entries({ 'a': 'A', 'b': 'B' })); //[["a","A"],["b","B"]]

console.log(Object.entries('david')) // [["0","d"],["1","a"],["2","v"],["3","i"],["4","d"]]