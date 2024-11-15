Math.max(10, 20, 60, 100, 50, 200); // returns 200
let arr = [10, 20, 60];
   Math.max(...arr); // 60  
   Math.max(arr2); // Shows error.  

   function getMax(arr){

      return Math.max.apply(null, arr);  
    
    }
    console.log(getMax([2, 4])); // 4
    var num3 = 177.234
    console.log(num3.toFixed(2)) // 177.23
    console.log(Math.pow(2, 8)) // 256
    console.log(Number.isFinite(10))  // true
    console.log(Number.isSafeInteger(10)) // true
    console.log(Number.isInteger(0)); // true
    console.log(Number.parseFloat("10")); // 10
    console.log(Number.parseInt("10")); // 10
    parseFloat('12.3.4') // 12.3
    parseInt('123', 10); // 123
parseInt('010', 10); // 10
parseInt('11', 2); // 3
parseInt('hello', 10); // NaN
console.log(+( "100px") )

console.log(parseInt( "100px") ) // 100
const a = (function() {
    return parseInt("1.5");
    })()
    // What is the data type of a?
    // Select the best option:
    // function
    // object
    // number
    // string
    console.log(a, typeof a, 'a');
    
        parseint with radix(octal..)
    console.log(0b001) // 1
    console.log(0b010) // 2
    console.log(0b011) // 3
    console.log(0b100) // 4
    console.log(0x010)  // 16
    console.log(0x100) // 256    
    
    
    var num1 = 1225.30
    console.log(num1.toExponential()) // 1.2253e+3

    var num = new Number(177.1234);
    console.log(num.toLocaleString()); // 177.123
    var num = new Number(7.123456);
     console.log(num.toPrecision()); // 7.123456
     console.log(num.toPrecision(1)); // 7
     console.log(Math.round(Math.random() *  10000)) // 1948
     console.log(Math.random() * 11) // 7.519018776604797   
     console.log( Math.floor(Math.random() *  10) + 1)   // 5
     console.log(Math.floor(Math.random() * 9) - 10) // -7
    //  With this, you can also find the random number between the range.
     let max = 10;
     let min= 2;
  console.log(Math.random() * (max - min + 1) + min); // 9 
  