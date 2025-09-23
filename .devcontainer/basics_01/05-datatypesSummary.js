// Datatypes are primitive and non-primitive types in JavaScript.

// Primitive Data Types: String , Numbers , Boolean, null, undefined , Symbol,BigInt

const score= 100 // Number
const scoreValue= 100.5 // Number, there is nothing like float in JS
const isLoggedIn= false // Boolean
const outsideTemp= null // null
let userEmail; // undefined

//Symbol is a unique identifier in JS and it is immutable in nature 
// Even if we create two symbols with same name/value it will be different

const id= Symbol("123") // Symbol
const anotherId= Symbol("123") // Symbol
console.log(id===anotherId) // false

const bigNumvar= BigInt("123456789012345678901234567890") // BigInt
console.log(bigNumvar) 

// Non-Primitive or Refrence  Data Types(data type in which we can directly pass the refrence ): 
// Object, Array, Function

const heros= ["shaktiman","naagraj","doga"] // Array 
const myObj= {name:"Rakhi",age:21} // Object we give key value pair in object

function myFunc(){
    console.log("Hello World")
} // Function 

myFunc()

console.log(typeof myObj) // object
console.log(typeof heros) // object
console.log(typeof myFunc) // function

/*NOTE: 
typeof null -> object
type of undefined -> undefined
type of booll 
*/
          

/******************************Memories in JS***************************************** */
// Stack Memory: It stores primitive data types and function references
//whenever we declare a  stack memeory is  defined we get variable copy

let myYoutubeChannel= "Rakhi's Tech World"
let anotherChannel= myYoutubeChannel// here anotherChannel will get the copy of myYoutubeChannel
anotherChannel= "Code with Rakhi" // here anotherChannel is updated not myYoutubeChannel because it has its own copy
console.log(myYoutubeChannel) // Rakhi's Tech World
console.log(anotherChannel) // Code with Rakhi



// Heap Memory: It stores non-primitive data types
//whenwve we declare a non-primitive data type a heap memory is created and the refrence of that memory is stored in stack memory

let userOne= {name:"Rakhi",age:21}
let userTwo= userOne // here userTwo will get the refrence of userOne
userTwo.name= "Code with Rakhi" // here userTwo is updated and also userOne because both are pointing to same memory location
console.log(userOne.name) // Code with Rakhi
console.log(userTwo.name) // Code with Rakhi

// To create a copy of non-primitive data type we can use spread operator or Object.assign method