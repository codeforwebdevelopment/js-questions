const str = 'JavaScript is amazing';
console.log(str.startsWith('JavaScript')); // true
console.log(str.startsWith('Java')); // true
console.log(str.startsWith('javascript')); // false
console.log(str.startsWith('Script', 4)); // true
console.log(str.startsWith('SCRIPT', 4)); // false


console.log(str.endsWith('amazing')); // true
console.log(str.endsWith('ing')); // true
console.log(str.endsWith('Amazing')); // false
console.log(str.endsWith('is', 13)); // true
console.log(str.endsWith('i', 13)); // false
console.log(str.endsWith('s', 13)); // true

console.log(str.charAt(11)); // 'i' /
console.log(str.charAt(14)); // 'a'
console.log(str.charAt(110)); // ''


console.log(str.repeat(3)); // 'JavaScriptJavaScriptJavaScript'
console.log(str.repeat(1)); // 'JavaScript'
console.log(str.repeat(0)); // ''

var str2 = "Hey all, welcome to the universe.";
console.log(str2.indexOf("welcome")); //9


console.log('wer'.padStart(10, 'Hi')); // HiHiHiHwer

console.log('23'.padEnd(8, '0')); // 23000000


var string = "foo", substring = "oo";
string.includes(substring);
console.log(string.includes(substring))
let abc = ['a', 'b', 'c'].includes('a') //return true or false

let data= [1, 3, 2];
console.log(data.join(',')) // 1,3,2



const val = [1, 3, 4]
console.log(val.reverse()) // [4, 3, 1]

"i'm a lasagna hog".split("").reverse().join("");

var sample = "world of wonders";
console.log(sample.substr(1, 4)) // orld

console.log(String.fromCharCode('a'.charCodeAt(0) + 1)) // b

// javascript convert between string and ascii Javascript
let ascii = 'a'.charCodeAt(0); // 97
let char = String.fromCharCode(ascii); // 'a'



function isPalindrome(str) {
str = str.replace(/\W/g, '').toLowerCase();
return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level")); // logs 'true'
console.log(isPalindrome("levels")); // logs 'false'
console.log(isPalindrome("A car, a man, a maraca")); // logs 'true'