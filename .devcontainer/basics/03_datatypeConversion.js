// Conversion of datatypes

// 1. Number to string
let score="22"
console.log(typeof score)
console.log(typeof(score))
let a=null;

let valueInNumber=Number(score)
console.log(typeof(a));// null is object type
console.log(a);// 

let b=undefined;
console.log(typeof(b))// undefined isundefined type itself
console.log(b)// undefined value 

//"33" -> can easily be converted to a number that is 33
//"33abs" cannot be converted to a number ->NaN as Output
//true is converted to 1 and false is converted to 0


console.log("! return true in boolean and 0 return false in bo0lean \n")
let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

console.log("\n")

console.log("Empty string to boolean retuens")
let str=""
let booleanStr=Boolean(str)
console.log(booleanStr)
console.log(typeof booleanStr)

console.log("\n")

console.log("Non Empty string to boolean retuurns ")
// non empty string is always true
let str1="sudh"
let booleanStr1=Boolean(str1)
console.log(booleanStr1)
console.log(typeof booleanStr1)

console.log("\n")
console.log("number to string conversion")
let num=33;
console.log(num)
console.log(typeof num)

let strNum=String(num)
console.log(strNum)
console.log(typeof strNum)

console.log("\n")


// ********************************Operations**************************************
console.log ("********************************Operations**************************************")
let value =3
let negValue=-value
console.log(value)
console.log(negValue)

console.log(2+2)//additionn
console.log(2*2)//multiplication
console.log(2-2)//subtraction
console.log(2/2)//division
console.log(2**3)// 2^3 power
console.log(10%3)// remainder
console.log("++ increment operator")
let num1=10
console.log(num1)
num1++
console.log(num1)

console.log("String operrations")
let str3="hello"
console.log(str3)
str3=str3+" sudh"
console.log(str3)


console.log("\n")
//doing addition 0f a number and a string
let str4="100"
let num4=100
let newValue=str4+num4
console.log(newValue)
console.log(typeof newValue)
// if any one of the operand is string in + operation then it will convert other operand to string and do concatenation
