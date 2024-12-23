let currentDate = new Date();  //2019-09-27T04:36:38.743Z
currentDate.getHours(); //9
currentDate.getMinutes(); // 30
currentDate.getSeconds(); // 20
let currentTime = new Date().getTime() //1569559064378
new Date().toLocaleTimeString(); // 11:18:48 AM
new Date().toLocaleDateString(); // 11/16/2015
new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM
new Date(1992, 5, 6); //1992-06-06T04:00:00.000Z
let d = new Date(1382086394000);

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
currentmonth = monthNames[currentDate .getMonth()];

console.log(currentDate.getDate() + '/' + (currentDate .getMonth()+1) + '/' + currentDate .getFullYear())
Get Time in AM and PM-
var h =  currentDate.getHours(), m =currentDate.getMinutes();
var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
console.log(_time)