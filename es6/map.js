
const words = new Map([[1, 'Angular'], [2, 'Guru']]);

var map = new Map();
map.set('name', 'steadyadvice');
map.get('name');

var roles = new Map([
['r1', 'User'],
['r2', 'Guest'],
['r3', 'Admin'],
]);
console.log(roles.get('r2')) //Guest
console.log(roles.size) //3
