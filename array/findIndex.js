
const comments = [
{ text: 'Love this!', id: 523423 },
{ text: 'Super good', id: 823423 },
{ text: 'You are the best', id: 2039842 },
{ text: 'Ramen is my fav food ever', id: 123523 },
{ text: 'Nice Nice Nice!', id: 542328 }
];
// Find the comment with this ID 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(comments[index].text );

Example-

var numbers = [1, 2, 3];
var oddNumber = numbers.findIndex((x) => x % 2 == 1);
console.log(oddNumber); //0

in operator-

The in operator returns true if the specified property is in the specified object.

const car = { make: 'Honda', model: 'Accord', year: 1998 };

console.log('make' in car);
let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple']
0 in trees // returns true
3 in trees // returns true
6 in trees // returns false
'bay' in trees // returns false (you must specify the index number, not the value at that index)
'length' in trees // returns true (length is an Array property)

let fruits = ['apple', 'banana', 'cherry']

let d = 'apple';

const index = fruits.findIndex(fruit => fruit === d);

if (index in fruits){
console.log('scd')
}