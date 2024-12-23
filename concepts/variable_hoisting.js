
function hoist() { 
a = 20;
var b = 100; 
var a;
console.log(a); //20
}
hoist();

// This works because of hoisting.

var x = 21;
var boy = function () {
    console.log(x);
    var x = 20;
};
boy ();

// undefined

// Question 1

function func1() {

  function foo() {

    return 'foo-top';

  }

  return foo();

}

func1();

// The output is foo-top. The function foo is defined and then the function is executed and returned. This one is pretty straight forward.

// Question 2

function func2() {

  return foo();

  function foo() {

    return 'foo-bottom';

  }

}

func2();

// The output is foo-bottom. When func2 executes it immediately returns the execution of the function foo. But wait, foo hasn't been defined yet? Or has it? Understanding that situation requires some experience with hoisting and the difference between a function declaration and function expression. foo is a function declaration (aka a function statement). JavaScript will hoist function declarations to the top of their closure, in this case that is the top of func2. What's hoisting? Hoisting is when JavaScript moves the definition of some code to the top of the closure. (There will be more on hoisting to follow, so remember that).

// So in this case, it is helpful to think of Question 2 like this:

function func2() {

  // Hoisted from below

  function foo() {

    return 'foo-bottom';

  }

  return foo();

  // This is hoisted to the top of func2

  //function foo() {

  //  return 'foo-bottom';

  //}

}

func2();

// Question 3

function func3() {

  var foo = function () {

    return 'foo-top';

  }

  return foo();

}

func3();

// The output here is foo-top. This examples uses a function expression. A function expression takes a function and sets it to a variable, in this case foo. This works like any other variables defined in JavaScript if it is defined before it is used, then it's value is accessible. That's why we can execute foo successfully in this question.

// Question 4

function func4() {

  return foo();

  var foo = function () {

    return 'foo-bottom';

  }

}

func4();

// The output here is an error undefined is not a function. Here is where hoisting comes into play yet again. The return statement executes foo which appears below the return. Since foo is a function expression, it is hoisted above the return right to the top of func4. But wait, didn't I just say it was hoisted up? Then why can't the return execute it properly? The interesting part is that the variable foo is hoisted, but the value it is set to is left in place. Say what? OK, let's look at how it actually is interpreted.

function func4() {

  var foo; // which is undefined

  return foo(); // now executing `undefined`

  foo = function () {

    return 'foo-bottom';

  }

}

func4();