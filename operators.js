Example-

console.log(false == ‘0’) // true

console.log(false === ‘0’) // false

undefined == null → true

undefined === null → false

2: greater and smaller than (< >) Operator-

You can also cast out variables by using the < > operator. This has the same effect on our code but implements a simpler syntax.

Example-

let str: any = ‘This is a String’

let strLength = (<string>str).length

Tricky examples-

console.log(1 < 2 < 3); // True

console.log(3 > 2 > 1); // false

Because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1 true has value 1, so it then compares 1 > 1, which is false.

Note-

A lowercase letter is always greater than the uppercase:

console.log( ‘a’ > ‘Z’ ); // true

When comparing the values of different types, JavaScript converts the values to numbers.

alert( ‘2’ > 1 ); // true, string ‘2’ becomes a number 2

alert( ‘01’ == 1 ); // true, string ‘01’ becomes a number 1

“2” > “12” → true

3- Arithmetic operators

It includes plus, minus, divide etc.

Examples-

console.log(1 + “2” + “2”); // 122

console.log(1 + +”2" + “2”); // 32

console.log(1 + -”1" + “2”); // 02

console.log(+”1" + “1” + “2”); // 112

Tricky examples or questions-

console.log( “A” — “B” + “2”); // NaN2 +”2"

the extra + before the first “2” is treated as a unary operator

console.log( “A” — “B” + 2); // null

“A” — “B” yields NaN. But any operator applied to NaN with any other numeric operand will still yield NaN

console.log(-’34'+10) // -24 (minus will convert the vale to number)

4- || (or) operator-

console.log(“0 || 1 = “+(0 || 1)); // 0 || 1 = 1

console.log(“1 || 2 = “+(1 || 2)); // 1 || 2 = 1

With this, you can also do Short-circuit evaluation. It minimizes your code.

true || alert(“not printed”);

false || alert(“printed”);

5- && (and) operator-

console.log(“0 && 1 = “+(0 && 1)); // 0 && 1 = 0

console.log(“1 && 2 = “+(1 && 2)); // 1 && 2 = 2

var a = 2, b =3 console.log(a && b) // 3

6- simple brackets-

var a = (2, 3, 5)

console.log(a) //5 return last value

7- incremental (++ )operator-

let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value

alert( b++ ); // 1, postfix form returns the old value

8- !! operator-

A double NOT !! is used for converting a value to boolean type:

alert( !!”non-empty string” ); // true

alert( !!null ); // false

9- Nullish coalescing operator (‘??’)

The result of a ?? b is:

if a is defined, then a,

if a isn’t defined, then b.

Example-

let user;

alert(user ?? “Anonymous”); // Anonymous

If the user had any value except null/undefined, then we would see it instead:

let user = “John”;

alert(user ?? “Anonymous”); // John

let height = 0;

alert(height || 100); // 100

alert(height ?? 100); // 0

10- as Keyword in Typescript-

Use this keyword after the name of the variable and end it with the desired data type.

Example-

let str: any = ‘This is a String’

let length = (str as string).length

console.log(1 && false && {}); //  false  

console.log([] && "true" && 1); // 1