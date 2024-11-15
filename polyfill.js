Array.prototype.polyfillReduce = function (reduceFn, initialValue) {
  let output = initialValue,
    arr = this;
  for (let i = 0; i < arr.length; i++) {
    output = reduceFn(output, arr[i], i);
  }
  return output;
};
const numbers = [
  1, 2, 3, 4, 5, 6, 7,
]; /* accumulator accumulate the sum, curr refer to the current element. 0 is the initial value of accumulator. */
const sumOfNumbers = numbers.reduce(
  (accumulator, curr) => accumulator + curr,
  0
); // 28

Array.prototype.polyfillFilter = function (filterLogicFn) {
  let output = [],
    arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (filterLogicFn(arr[i], i)) {
      output.push(arr[i]);
    }
  }
  return output;
};

const evenNumbers = numbers.polyfillFilter((x) => x % 2 === 0); // [2, 4, 6]
const oddNumbers = numbers.polyfillFilter((x) => x % 2 !== 0); // [1, 3, 5, 7]

Array.prototype.polyfillMap = function (mapLogicFn) {
  let output = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    output.push(mapLogicFn(arr[i], i));
  }
  return output;
};
const numbers1 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers1.polyfillMap((x) => x * 2); // [2, 4, 6, 8, 10]
const anotherArray = numbers.polyfillMap((x, index) => x * index); // [0, 2, 6, 12, 20]
