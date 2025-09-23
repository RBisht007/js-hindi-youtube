//*************************************STRINGS************************************/

const myString = "RAKHI BISHT";
console.log(myString); // Output: Hello, World!
const repoCount=50
console.log(name + repoCount + "How are u?") 
// Output is

// String Interpolation (Template Literals) : is a way to embed expressions within string literals, using backticks (`) and ${} syntax.
// It allows for easier and more readable string construction, especially when combining variables and expressions.
console.log(`Hello my name is  ${myString} and my repo count is  ${repoCount} How are u?`)

// we can also declare using new keyword
const anotherString= new String("Rakhi Bisht")
console.log(anotherString) // [String: 'Rakhi Bisht']
console.log(typeof anotherString) // object , here type is object because we have used new keyword and data is stored in the form of key value pair

// String Properties and Methods
console.log(myString.length) // 11 , it gives the length of string including spaces
console.log(myString.toLowerCase()) // rakhi bisht
console.log(myString.toUpperCase()) // RAKHI BISHT
console.log(myString.charAt(0)) // R , it gives the char at particular index
console.log(myString.indexOf("Bisht")) // 6 , it gives the starting index of the substring
console.log(myString.includes("Bisht")) // true , it checks whether the substring is present or not and returns boolean value
console.log(myString.endsWith("Bisht")) // true , it checks whether the string ends with the given substring and returns boolean value
console.log(myString.startsWith("RAKHI")) // true , it checks whether the string starts with the given substring and returns boolean value
console.log(myString.split(" ")) // [ 'RAKHI', 'BISHT' ] , it splits the string into an array of substrings based on the given separator
console.log(myString.replace("RAKHI","Code with Rakhi")) // Code with Rakhi BISHT , it replaces the first occurrence of the substring with the given substring
console.log(myString.replaceAll("I","1")) // RAKH1 B1SHT , it replaces all occurrences of the substring with the given substring
console.log(myString.slice(0,5)) // RAKHI , it extracts a section of the string and returns it as a new string, here 0 is starting index and 5 is ending index but not included
console.log(myString.slice(6)) // BISHT , if we don't provide ending index it will extract till the end of the string
console.log(myString.substring(0,5)) // RAKHI , it is similar to slice but it doesn't accept negative index
console.log(myString.substring(6)) // BISHT , if we don't provide ending index it will extract till the end of the string
console.log(myString.trim()) // RAKHI BISHT , it removes the whitespace from both ends of the string
console.log(myString.trimStart()) // RAKHI BISHT , it removes the whitespace from the start of the string
console.log(myString.trimEnd()) // RAKHI BISHT , it removes the whitespace from the end of the string
console.log(myString.repeat(2)) // RAKHI BISHTRAKHI BISHT , it repeats the string for the given number of times

// in all above methods original string will not be changed because strings are immutable in nature , it has changed the copy of the string and returned it


// cob=verting a string on array based on seperator dash 
const myData= "Rakhi-Bisht-21"
const myDataArr= myData.split("-")
console.log(myDataArr) // [ 'Rakhi', 'Bisht', '21' ]
console.log(typeof myDataArr) // object , array is a type of object

// joining an array to string based on seperator space
const myNewString= myDataArr.join(" ") // here we are joining the array elements with space
console.log(myNewString) // Rakhi Bisht 21 // 
console.log(typeof myNewString) // string // now it is string

//*************************************END OF STRINGS************************************/
