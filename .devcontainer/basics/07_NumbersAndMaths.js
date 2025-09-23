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

console.log(toString(num1)) // "42", it will convert number to string

// Basic Methods in Numbers 

const num=100.3934;
console.log(num.toFixed(2)) // 100.39, it will convert number to string with fixed decimal points
console.log(num.toPrecision(4)) // 100.4, it will convert number to string with specified length
console.log(Number.isInteger(num1)) // true, it will check if the number is integer or not
console.log(Number.isNaN(NaN)) // true, it will check if the value is NaN or not
console.log(parseInt("100.56")) // 100, it will convert string to integer
console.log(parseFloat("100.56")) // 100.56, it will convert string to floating point number
console.log(Number("123")) // 123, it will convert string to number
console.log(Number("123abc")) // NaN, it will return NaN if the string is not a valid number


const hundreds=100000000;
console.log(hundreds.toLocaleString()) // 100,000,000, it will convert number to string with commas as thousands separators
console.log(hundreds.toLocaleString('de-DE')) // 100.000.000, it will convert number to string with dots as thousands separators in German locale
console.log(hundreds.toLocaleString('en-IN')) // 10,00,00,000, it will convert number to string with commas as thousands separators in Indian locale



//Max value and Min value in JavaScript
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308, it will return the maximum representable number
console.log(Number.MIN_VALUE) // 5e-324, it will return the minimum representable number
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991, it will return the maximum safe integer
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991, it will return the minimum safe integer

// ********************Maths **********************
// The Math object in JavaScript provides various mathematical constants and functions.

console.log(Math.PI) // 3.141592653589793, it will return the value of PI
console.log(Math.E) // 2.718281828459045, it will return the value of Euler's number
console.log(Math.SQRT2) // 1.4142135623730951, it will return the square root of 2
console.log(Math.SQRT1_2) // 0.7071067811865476, it will return the square root of 1/2
console.log(Math.abs(-10)) // 10, it will return the absolute value of a number
console.log(Math.ceil(4.2)) // 5, it will return the smallest integer greater than or equal to a number
console.log(Math.floor(4.7)) // 4, it will return the largest integer less than or equal to a number
console.log(Math.round(4.5)) // 5, it will return the value of a number rounded to the nearest integer
console.log(Math.max(10, 20, 30)) // 30, it will return the largest of zero or more numbers
console.log(Math.min(10, 20, 30)) // 10, it will return the smallest of zero or more numbers
console.log(Math.pow(2, 3)) // 8, it will return the base to the exponent power
console.log(Math.sqrt(16)) // 4, it will return the square root of a number
console.log(Math.random()) // it will return a random number between 0 and 1
console.log(Math.trunc(4.9)) // 4, it will return the integer part of a number by removing any fractional digits\
console.log(Math.random()*10 ) // it will return a random number between 0 and 10
console.log(Math.floor(Math.random()*10)) // it will return a random integer between 0 and 9
console.log(Math.floor(Math.random()*10)+1) // it will return a random integer between 1 and 10


const max=20;
const min=10;
const randomInRange=Math.floor(Math.random()*(max-min+1))+min; // it will return a random integer between min and max (inclusive)
console.log(randomInRange)
// ********************End **********************
