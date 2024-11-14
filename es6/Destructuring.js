
var emp = { name: 'John', Id: 3 }
var { name, Id } = emp
console.log(name)
console.log(Id)
const objec = { first: 'xyz', last: 'abc', age: 39 };
const { first: fi, last: li } = objec;
console.log(fi); // xyz
console.log(li); // abc
var car = {
model: 'bmw 2018',
engine: {
v6: true,
turbo: true,
vin: 12345
}
}
const modelAndVIN = ({ model, engine: { vin } }) => {
console.log(`model: ${model} vin: ${vin}`);
}
modelAndVIN(car); // => model: bmw 2018 vin: 12345