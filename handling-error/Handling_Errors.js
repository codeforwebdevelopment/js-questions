

var message, x;
message = document.getElementById("message");
message.innerHTML = "";
x = (<HTMLInputElement>document.getElementById("demo")).value;
try {
if (x == "") throw "empty";
if (isNaN(x)) throw "not a number"; // isNan() function returns true if the variable value is not a number.
x = Number(x);
if (x < 5) throw "too low";
if (x > 10) throw "too high";
}
catch (err) {
message.innerHTML = "Input is " + err; //err is the throw message
}
finally {
document.getElementById("demo").value = "";
}
function MyError(message?) {
this.name = 'CustomError';
this.message = message || 'Error raised with default message';
}
try {
throw new MyError(); // throw new MyError('Printing Custom Error message');
} catch (e) {
console.log(e.name);
console.log(e.message);
}

function myFunction(input) {
if (!input)
throw new InputValidationError('Validation error...')
return input
}

try {
myFunction(null)
} catch (e) {
if (e.name === 'InputValidationError') {
console.log("Handling input validation error")
} else {
console.log("Handling other errors")
}
}

function myFunction(input) {
return new Promise((resolve, reject) => {
if (!input)
return reject(new InputValidationError('Validation error...'))
resolve(input)
})
}
class InputValidationError extends Error {
constructor(message) {
super(message)
this.name = 'InputValidationError'
this.message = message
}
}
class PermissionError extends Error {
constructor(message) {
super(message)
this.name = 'PermissionError'
this.message = message
}
}
class DatabaseError extends Error {
constructor(message) {
super(message)
this.name = 'DatabaseError'
this.message = message
}
}

Here super keyword refers to the parent class. It is used to call the constructor of the parent class and to access the parent's properties and methods. This comes under the inheritance.

In the Angular project, we can do error handling using catchError method-

request() {
const url = 'GoalTree/GetById/';
this.http.get(url)
.pipe(
map((data: any) => {
this.showError = false;
console.log('data1', data);
}),
catchError((error: HttpErrorResponse) => {
console.log('error', error);

if (error.status === 401) {
this.showError = true;
this.error = error.message;
return this.error;
}
this.showError = true;
this.error = error.message;
return this.error
}))
.subscribe(data => {
console.log('data2', data);
})
}

We can also make a separate method to handle error-

// private handleError(error: HttpErrorResponse | any) {
// // In a real world app, you might use a remote logging infrastructure
// let errMsg: string;
// if (error.error instanceof Error) {
// console.log("Client-side error occured.");
// } else {
// console.log("Server-side error occured.");
// }
// return (error);
// }

// getdata() {
// return this.jsonp.get(this.url).pipe(
// .map(this.extractData)
// .catch(this.handleError);
// }

private extractData(res: Response) {
let body = res.json();
console.log('extracting data');
return body ;
}

API handling:

async function myFetch() {
try {
let response = await fetch('coffee.jpg');
let myBlob = await response.blob();

let objectURL = URL.createObjectURL(myBlob);
let image = document.createElement('img');
image.src = objectURL;
document.body.appendChild(image);
} catch(e) {
console.log(e);
}
}

myFetch();