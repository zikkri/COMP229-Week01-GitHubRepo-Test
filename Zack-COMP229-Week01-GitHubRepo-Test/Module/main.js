// Imports the functions halfOf from the lib.js module
// import doSomething from './lib.js';

// console.log("halfOf: " + halfOf(84) );

// console.log("multiply:" + multiply(84, 2) );

// doSomething();

import { flag, touch } from './validator.js';
console.log(flag); //false
touch(); // change to true
console.log(flag); // true
flag = false; // change to false
console.log(flag); // error
