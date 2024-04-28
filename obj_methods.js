let obj = {};
obj.name = "messi";
obj.year= 2018;
obj.speak = function(){
return "My Name is "+this.name+" and this is year "+this.year;
}
let newObj = obj;
obj.year = 2019;
console.log(newObj.year)
// 2019
console.log(newObj.speak())

// Immutability handle
let copyObject = Object.assign({},newObj);
copyObject.name = "ronaldo";
console.log(copyObject.speak());
// My Name is ronaldo and this is year 2019
console.log(newObj.speak());
// My Name is messi and this is year 2019

let deepCopyObj = JSON.parse(JSON.stringify(obj));
console.log(deepCopyObj);
//{ name: 'messi', year: 2019 }

let person = {name:"Roger",age:30}
let entries = Object.entries(person);
console.log(entries);
//[ [ 'name', 'Roger' ], [ 'age', 30 ] ]

let keys = Object.keys(person);
console.log(keys);
// [ 'name', 'age' ]
let values = Object.values(person);
console.log(values);
// [ 'Roger', 30 ]

