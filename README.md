# The Ultimate javascript interview questions

- transpilation and compilation
- unknown in ts
- generics
- How to check if an object is an array or not? Provide some code
- Lexical scope
- Difference between const, let and var.
- what isNaN function does?
- Scope in JavaScript function
- Ecma6 feat
- What is context in JS?
- Difference between map, reduce and filter
- Difference between class and function
- Normal Function vs Arrow function
- Difference between async and defer
- Difference between == and ===
- Difference between setTimeout and setInterval
- What are the different DOM API’s
- DOM vs Virtual DOM
- What is event delegation
- Difference between call, bind and apply
- Explain Promise
- Throttling vs Debouncing
- What is Closure and why should we use closure
- What are the different internal storage and its differences
- Difference between document.ready(){} and window.onload(){}
- What is async, preload, prefetch in script
- Explain Currying
- Questions related to flatten array
- Call by value vs Call by reference
- Prototypal inheritance
- How do you optimize page performance
- Write polyfill for Filter, Reduce, Promise
- DOM Traversal, Manipulation & Creating Elements
- core principles: (JS fundamentals)
- Functions are first-class citizens in JavaScript
- Objects
- Prototypical Inheritance -> ES6 Class
- Callbacks and Promises
A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking
- Regular Expressions
- Error handling (promise.then(...).catch(...), try { } catch(e) { })
- JavaScript ES6 and beyond
- variable hoisting, Hoisting
- Memoization - way to speed up performance by reducing computations. there are two ways that you can implement memoization: Implicit Caching, Decorator Functions.
When you use memoization, you want to implement .clear() method to manage your application's resources and performance. Here's why:
Memory management: It frees up resources by allowing you to manually purge the cache.
Data freshness: It ensures cached results stay accurate by removing outdated or incorrect data.
Control over cache behavior: It gives you the ability to reset the cache in response to events or conditions that affect data processing.
Testing and debugging: It allows you to operate your functions in a known state, without interference from cached data, which is important for reliable testing.
Performance optimization: It maintains cache efficiency by allowing periodic resets to manage size and lookup costs.
Memoization is useful in:
Recursive algorithms: As shown with the Fibonacci sequence, recursive functions that repeat the same calculations can benefit greatly from memoization by avoiding redundant operations.
Database queries: You can cache results from expensive database queries.
Data fetching: In web development, memoization can cache responses from API calls. This reduces network traffic and speeds up response times by serving cached data for repeated requests with the same parameters.
Data transformation: You can cache results of transformations that are costly in processing time.
Preventing component rendering: In frontend frameworks like React, memoization can prevent unnecessary re-renders of components as long as their their props stay the same.

- Declarative vs imperative programming
- Functional vs object-oriented programming
- Inheritance vs composition  
- Inheritance types- Single, Multi-level, Multiple
- composition types- object, function, class
- Functions - Factory , Generator, pure and Non-pure
- objects
- hashmap
- shallow and deep copy
- polyfills
- recursive problems - flatten object
- How Event loop works - how heap works  -> event loop handles the recursion, not the call stack
The Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients
A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing external resources, such as computation, database, file system, etc.

Once the task is carried out completely, the response is sent to the Event Loop that sends that response back to the client.

Event loops handle asynchronous callbacks in Node.js. It is the foundation of the non-blocking input/output in Node.js, making it one of the most important environmental features.

- Call Stack, Memory Heap, Event Queue, and Event Loop
- main thread and secondary thread
- critical rendering path - browser app load
- caching - server
- proxy
- temporal dead zone
- global, local, lexical
- v8 and libuv
- IIFEs
- this keyword
- ES6 features - WeakMap, set, WeakSet
- Babel
- solid principle
- Four principles of OOP-Encapsulation, Abstraction, Inheritance, Polymorphism
- Rest vs spread
- context
- Prototype
- defer and async
- Event Bubbling and Capturing
- Static method
- Method decorators
- events - keydown, keyup , focus, blur, click "keydown", "textInput" , mouse(“mousewheel”, "mouseup", "click", "mousemove", "mouseout", " mousedown ", mouseenter, mouseleave), Touch ("touchstart", "touchmove", "touchend", "touchcancel"), control/form ()"reset", "scroll", "zoom", "blur", "select", "submit"), Document/Window Events(resize, scroll, DOMContentLoaded), unload, input

<https://www.jsv9000.app/>
