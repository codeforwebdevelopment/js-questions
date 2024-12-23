
const arr = [1,4,2];
const iter = arr[Symbol.iterator]();
iter.next(); // {value: 1, done: false}
iter.next(); // {value: 4, done: false}
iter.next(); // {value: 2, done: false}
iter.next(); // {value: undefined, done: true}


  const array = ['a', 'b', 'c', 'd', 'e'];
  const iterator = array[Symbol.iterator]();
  const newArray = [];
  for (let nextValue = iterator.next();
nextValue.done !== true;
nextValue = iterator.next())
{
    newArray.push(nextValue.value);
  }
  newArray.push('2')
  console.log(newArray);  // ["a", "b", "c", "d", "e", "2"]

//  The string is iterable-


[ ...'hi' ]; // // ['h', 'i']
 for (let char of "demo") {  // triggers 4 times: once for each character  console.log( char ); // d, then e, then m, then o}

[ ...new Set([1,2,3]) ]; // [1,2,3]

[ ...new Map([[1, 'one']]) ]; // [[1, 'one']]
[ ...document.querySelectorAll('div') ] // [ div, div, div]