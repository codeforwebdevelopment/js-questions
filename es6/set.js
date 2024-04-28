
// All valid ways to initialize set.
const newSet1 = new Set();
const newSet2 = new Set(null);
const newSet3 = new Set([1, 2, 3, 4, 5]);

const newSet = new Set();
newSet.add("C");
newSet.add(1);
newSet.add("C");
//chain add functionality
newSet.add("H").add("C");
newSet.forEach(el => {
console.log(el);
// expected output: C
// expected output: 1
// expected output: H
});

const newSett = new Set(["A", 2, "B", 4, "C"]);
console.log(newSett.has("A")); //check it is present or not
// expected output: true
console.log(newSett.has(4));
// expected output: true
console.log(newSett.has(5));
// expected output: false
newSett.delete("C");
// expected output: true
newSett.delete("C");
// expected output: false
console.log(newSett.size,'size')
// expected output: 4
newSett.clear();
// expected output: undefined
console.log(newSett.size,'size')
// expected output: 0
const newSetdemo = new Set(null); // returns an iterator object. This means you can access the .next() method on it to get its value.

newSetdemo.add("Apples");
newSetdemo.add(12);
let iterator = newSetdemo.keys(); // same as newSet.values();
console.log(iterator.next().value);
// expected output: Apples
console.log(iterator.next().value);
// expected output: 12
console.log(iterator.next().value);
// expected output: undefined

const allowedAdminUsers = new Set(["Naimat", "Ismat", "Azad"]);
// An empty Set, stored in memory
const finalList = new Set();
// A function to add users to the permission list
const addUsers = ({ user, admin }) => {
// Check to see if the admin is the admin
// list and that the user isn't already in the set
if (allowedAdminUsers.has(admin) && !finalList.has(user)) {
// Return the users list at the end
return finalList.add(user);
}
// Console.log this message if the condition doesn't pass
console.log(`user ${user} is already in the list or isn't allowed`);

};

// Add some entries
addUsers({ user: "Asep", admin: "Naimat" });
addUsers({ user: "John", admin: "Ismat" });
// Let's add John again and this time that inner function console error will be shown
// addUsers({user: "John", admin: "Azad"});/
const inviationList = Array.from(finalList).map(user =>
`${user} is invited`);
console.log(inviationList); //["Asep is invited", "John is invited"]
// TypeScript only supports Iterables on Arrays at the moment.

let arr = new Set([1, 1, 2, 2, 3, 3]);
// To convert set to array we can use spread operator or array.from method.
// let deduped = [...new Set(arr)] // [1, 2, 3]/
var deduped = Array.from(arr)

let mySet = new Set([1, 2, 3, 4, 5]);
// var filtered = [...mySet].filter((x) => x > 3) // [4, 5]
var filtered = Array.from(mySet).filter((x) => x > 3);
console.log(filtered) //[4, 5]

const removeDuplicateItems = arr => [Array.from(new Set(arr))];
console.log(removeDuplicateItems([42, 'foo', 42, 'foo', true, true])); // [42, foo,true ]


function myFunction(a, b) {

    return new Set([...a, ...b]); // union of two sets
    }
    const data = myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))
    
    for (let i of Array.from('hello')) {
        console.log(i)  
        }
        // h
        // e
        // l
        // l
        // o
        
        console.log(Array.from([1, 2, 3], x => x + x)); // [2, 4, 6]
        
        console.log(Array.isArray({})); // false
        console.log(Array.isArray([])); // true

        // Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
        