// ********************Numbers **********************
// Numbers are one of the primitive data types in JavaScript.

//Numbers can be defined directly or using the Number() constructor
const num1 = 42; // here we dierctly define a number
const num2 = 3.14; // floating-point number
const num3 = new Number(100); // here we explicitly defined number using Number constructor

console.log(num1);
console.log(num2);
console.log(num3); // [Number: 100]
console.log(typeof num3); // object, because we used the Number constructor

// Basic Methods in Numbers 

const num=100;
console.log(num.toString()); // "100" - converts number to string
console.log(num.toFixed(2)); // "100.00" - formats number to 2 decimal places
console.log(Number.isInteger(num)); // true - checks if the number is an integer
console.log(Number.isNaN(NaN)); // true - checks if the value is NaN

// ********************Maths**********************
// The Math object provides properties and methods for mathematical constants and functions.


