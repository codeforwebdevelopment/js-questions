Example-

const debounce = (func, delay) => {

let inDebounce

return function() {

const context = this

const args = arguments

clearTimeout(inDebounce)

inDebounce = setTimeout(() => func.apply(context, args), delay)

}

}
debounceBtn.addEventListener('click', debounce(function() {

console.info('Hey! It is', new Date().toUTCString());

}, 3000));

inDebounce is a variable that we use to track the delay period.

In this example, we are debouncing the call by 3 seconds at which point we print the date.

const throttle = (func, limit) => {

let inThrottle

return function() {

const args = arguments

const context = this

if (!inThrottle) {

func.apply(context, args)

inThrottle = true

setTimeout(() => inThrottle = false, limit)

}

}

}

throttleBtn.addEventListener('click', throttle(function() {

return console.log('Hey! It is', new Date().toUTCString());

}, 1000));