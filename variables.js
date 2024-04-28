
var number = 50
console.log(number) // 50

var number = 100
console.log(number) // 100
var number = 50

function print() {
  var square = number * number
  console.log(square)
}

console.log(number) // 50

print() // 2500
function print() {
  var number = 50
  var square = number * number
  console.log(square)
}

print() // 2500

console.log(number)

console.log(number) // undefined

var number = 50

console.log(number) // 50
function print() {
  let square = number * number

  let number = 50
}

console.log(5 * 3 - 2);
console.log((3 * 6) % 2);
console.log(5 + 7 - 1);
console.log((4 + 9) * 4);

let x = 5;
console.log(++x);
console.log(x++ / 3);
