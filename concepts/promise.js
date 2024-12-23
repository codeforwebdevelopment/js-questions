// A Promise has four states: 
// fulfilled: Action related to the promise succeeded
// rejected: Action related to the promise failed
// pending: Promise is still pending i.e. not fulfilled or rejected yet
// settled: Promise has fulfilled or rejected

// create function sum with promises if the values are string then reject otherwise resolve it
function sumValidate(a, b) {
    return  new Promise((resolve, reject) => {
 
         if (typeof a!= 'string' && typeof b!='string'){
    let sum = a + b
    
     resolve(sum)
         } else {
     reject('err')
         }
 
     })
     }
     
     sumValidate(2, 4).then((output) => {
    console.log(output, 'output')
 }). catch((err)=>{
 console.log(err, 'err')})
 
 async function finalSum() {
     try {
         let final = await sumValidate(2, 4)
         return final;
     } catch (err) {
         console.log(err, 'err finalSum')
     }
 
 }
 
  finalSum().then((res) => {console.log(res, 'res')});

doit().then(function () {
    log('Now finally done!');
});
log('---- But notice where this ends up!');

function doit() {
    return new Promise(async function (resolve, reject) {
        log('Calling someTimeConsumingThing');
        await someTimeConsumingThing();
        log('Ready with someTimeConsumingThing');
        resolve();
    });
}

function someTimeConsumingThing() {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 2000);
    });
}

function log(txt) {
    setTimeout(() => {
        //    (<HTMLDivElement>document.getElementById('msg')).innerHTML += txt + '<br>'
    }, 1000);
}

const CONDITION = true;
// Data passed when the promise is resolved
const DATA = 'hello world';
// Error passed when the promise is rejected
const ERROR = new Error('Ooops!');
const promise = new Promise((resolve, reject) => {
    // do some async stuff
    if (CONDITION) resolve(DATA);
    else reject(ERROR);
}).then(
    (data) => {
        console.log(data);
    },
    (err) => {
        console.log(err);
    }
);

// Example3-
let firstPromise = Promise.resolve(10);
let secondPromise = Promise.resolve(5);
let thirdPromise = Promise.resolve(20);
Promise.all([firstPromise, secondPromise, thirdPromise]).then((values) => {
    console.log(values, 'v');
});

// Example4-
//  You can use the Promise.race(iterable) function when you want the value of the first promise that resolves or rejects.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'promise 1 resolved');
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'promise 2 rejected');
});
Promise.race([promise1, promise2]).then(console.log).catch(console.log);

Example5 -
    function Person(options) {
        return new Promise((resolve, reject) => {
            if (typeof options.age === 'number') {
                // typeof is used to check that this property is present or not.
                if (options.age < 18) {
                    reject(new Error('You are not of legal age.'));
                }
                resolve(`${options.name} you are authorized for accessing our content.`);
            }
            reject('Request rejected.');
        });
    }
Person({ age: '15', name: 'sam' })
    .then((res) => {
        console.log(res, 'res');
    })
    .catch((error) => {
        console.error(error);
    });

(async function () {
    let result = await Person({ name: 'John', age: 22 }).catch((err) =>
        console.log(err)
    );
    if (result !== undefined) {
        console.log(result);
    } else {
        console.log('process not fullfilled');
    }
})();

Example6 -
    function getSum(n1, n2) {
        var isAnyNegative = function () {
            return n1 < 0 || n2 < 0;
        };
        var promise = new Promise(function (resolve, reject) {
            if (isAnyNegative()) {
                reject(Error('Negatives not supported'));
            }
            resolve(n1 + n2);
        });
        return promise;
    }

getSum(5, -3).then(
    function (result) {
        console.log(result);
    },
    function (error) {
        console.log(error.message);
    }
);

nw23
function getSum2(n1, n2) {
    var isAnyNegative = function () {
        return n1 < 0 || n2 < 0;
    };
    var promise = new Promise(function (resolve, reject) {
        if (isAnyNegative()) {
            reject(Error('Negatives not supported'));
        }
        resolve(n1 + n2);
    });
    return promise;
}

getSum2(5, 6)
    .then(
        function (result) {
            console.log(result);
            return getSum(10, 20);
            //this returns another Promise
        },
        function (error) {
            console.log(error);
        }
    )
    .then(
        function (result) {
            console.log(result);
            return getSum(30, 40);
            //this returns another Promise
        },
        function (error) {
            console.log(error);
        }
    )
    .then(
        function (result) {
            console.log(result);
        },
        function (error) {
            console.log(error);
        }
    );

console.log('End of script ');

// Example7-
function delay(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, time);
    });
}

delay(1000)
    .then(function () {
        console.log('after 1000ms');
        return delay(2000);
    })
    .then(function () {
        console.log('after another 2000ms');
    })
    .then(function () {
        console.log('step 4 (next Job)');
        return delay(5000);
    });

// Example8-
function getNumber1() {
    return Promise.resolve('374');
}
// This function does the same as getNumber1
async function getNumber2() {
    return 374;
}

function f1() {
    return Promise.reject('Some error');
}
async function f2() {
    throw 'Some error';
}

// Example9-
function doSomething() {
    console.log("I promise to return at some point.");
    return new Promise(function (resolve, reject) {
        const allIsGood = someLongRunningActivity();
        if (allIsGood) {
            console.log("Resolving the promise.");
            resolve();
        } else {
            console.log("Something bad happened, don't forget to check for errors!");
            reject();
        }
    });
}

function someLongRunningActivity() {
    //run a query or perform some calculation
    return true;
}

doSomething()
    .then(() => {
        console.log("The promise was honored, you can do what you were waiting to do.");
    })
    .catch(() => {
        console.log("You remembered to check for errors!");
    });

const p1 = new Promise((resolve, reject) => {
    console.log("Promise has started");
    const lifeIsEasy = false;
    if (lifeIsEasy) {
        //Value to be returned if the promise is resolved
        //return value is optional
        resolve("No it's not");
    }
    else {
        //Value to be returned if the promise is rejected
        //return value is also optional
        reject("welcome to the real world");
    }
});
//then is executed when the promise is resolved
p1.then(value => {
    console.log(value);
})
    //catch is executed when the promise is rejected
    .catch(err => {
        console.log(err);
    });

// expected output
// Promise has started
// welcome to the real world

// async await pattern
function wait(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout);
    });
}
async function requestWithRetry(url) {
    const MAX_RETRIES = 10;
    for (let i = 0; i <= MAX_RETRIES; i++) {
        try {
            return await request(url);
        } catch (err) {
            const timeout = Math.pow(2, i);
            console.log('Waiting', timeout, 'ms');
            await wait(timeout);
            console.log('Retrying', err.message, i);
        }
    }
}

const promise3 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
});

promise3.then(() => {
    console.log(3);
});

console.log(4);

const promise4 = new Promise((resolve, reject) => {
    console.log(1);
});

promise4.then(() => {
    console.log(3);  // not resolved
});

console.log(4);
1
4


// new
const promise5 = new Promise((resolve, reject) => {
    console.log(1)
    resolve('resolve1')
})

const promise6 = promise5.then(res => {
    console.log(res, 'res')
})

console.log('promise1:', promise6);
// 1
// promise1: Promise{}
// resolve1 res

// new
const fn = () => (new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
}));

fn().then(res => {
    console.log(res)
});

console.log(2)

// 1
// 2
// success

// https://plainenglish.io/blog/6-interview-questions-that-combine-promise-and-settimeout-34c430fc297e#example

console.log('start');
const promise7 = new Promise((resolve, reject) => {
    console.log(1)
});
console.log('end');
// start
// 1
// end

console.log('start');
const promise8 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    console.log(3)
})
promise8.then(res => {
    console.log(res)
})
console.log('end');
// start
// 1
// 3
// end
// 2