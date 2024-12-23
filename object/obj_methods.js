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
Object.keys(myObj).map(key => myMap[key])

let evilResponse = {
    "car":
    {
    "color": "red",
    "model": "2013"
    },
    "motorcycle":
    {
    "color": "red",
    "model": "2016"
    },
    
    "bicycle":
    {
    
    "color": "red",
    
    "model": "2011"
    }
    }
    let evilResponseProps = Object.keys(evilResponse);
    
    let goodResponse = [];
    // Iterate throw all keys.
    for (let prop of evilResponseProps) {
    
    goodResponse.push(prop);
    }
    
    // convert string to array
// ...valueEntered - spread operator
Object.assign([], valueEntered),
Array.from(valueEntered) // to turn a string into an array
string.split('');

    console.log(Array.from(Array(6).keys())); // [ 0, 1, 2, 3, 4, 5 ]
    
    console.log(...Array(8).keys()); // 0 1 2 3 4 5 6 7
    
let values = Object.values(person);
console.log(values);
// [ 'Roger', 30 ]

