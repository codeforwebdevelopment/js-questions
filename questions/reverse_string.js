
let Str="Hello";
let spltStr=Str.split("");
let reverseStr=spltStr.reverse();
let joinStr=reverseStr.join("");
console.log(joinStr);
// common function to reverse a string is
function reverseString(str) {
return str.split("").reverse().join("");
}
reverseString("hello");



function reverseStr(str) {
var newString = "";
for (var i = str.length - 1; i >= 0; i--) {
newString += str[i];
}
return newString;
}
console.log(reverseStr('helloWorld'))


var name = "Hello";
function reverseString(sampleStr) {
if(!sampleStr.trim() || 'string' !== typeof sampleStr) {
return;
}
let strLength=sampleStr.length, s='';
while(strLength > 0) {
strLength--;
s+= sampleStr[strLength];
}
return s;
}
console.log(reverseString(name
   
    function reverseString(str) {
        if (str === "")
        return "";
        else
        return reverseString(str.substr(1)) + str.charAt(0);
        }
        console.log(reverseString('hello World'))


"hello".substr(1); // "ello"
The charAt() method returns the specified character from a string.
"hello".charAt(0); // "h"
function reverseStr(str) {
return (str === '') ? '' : reverseStr(str.substr(1)) + str.charAt(0);
}
console.log(reverseStr("hello"))
