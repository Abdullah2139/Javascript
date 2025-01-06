// Immideatly invoked function expression IIFE

(function sayHello() {
    console.log('Hello');
})();

// ()() // to avoid pollution of global scope we use iife

// write another iife function
// to write another iife function after another use semicolon after first
(function sayHi() {
    console.log('Hi');
})();

// can also write iife through arrow function
(() => {
    console.log('Arrow function');
})();

// iife with parameter
((name) => {
    console.log(`Hello ${name}`);
})("Khan");