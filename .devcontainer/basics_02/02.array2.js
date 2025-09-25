// *****************************Part2 Arrays *********************************************
const marvelHeroes = ["thor", "ironman", "spiderman", "hulk", "captain america"];
const dc=["superman","batman","wonderwoman","flash","aquaman"];

marvelHeroes.push(dc); // adds the entire dc array as the last element of the marvelHeroes array, it consider the dc array as a single element 
console.log(marvelHeroes); // Output: ["thor", "ironman", "spiderman", "hulk", "captain america", ["superman","batman","wonderwoman","flash","aquaman"] ]

console.log(marvelHeroes[5][2]) // Output: wonderwoman, accessing the third element of the dc array which is the last element of the marvelHeroes array

marvelHeroes.pop(); // removes the last element from the marvelHeroes array, which is the entire dc array
console.log(marvelHeroes); // Output: ["thor", "ironman", "spiderman", "hulk", "captain america"]

marvelHeroes.concat(dc); // concatenates the dc array to the end of the marvelHeroes array, but does not modify the original marvelHeroes array
console.log(marvelHeroes); // Output: ["thor", "ironman", "spiderman", "hulk", "captain america"]

let newArray=marvelHeroes.concat(dc); // creates a new array by concatenating the dc array to the end of the marvelHeroes array
console.log(newArray); //Output: ["thor", "ironman", "spiderman", "hulk", "captain america", "superman","batman","wonderwoman","flash","aquaman"]

//spread operator (...) is used to spread the elements of an array into individual elements
const all_new_heroes=[...marvelHeroes,...dc]; // creates a new array by spreading the elements of both marvelHeroes and dc arrays
console.log(all_new_heroes); // Output: ["thor", "ironman", "spiderman", "hulk", "captain america", "superman","batman","wonderwoman","flash","aquaman"]

//Diffrence between concat and spread operator
// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// The spread operator (...) is used to spread the elements of an array into individual elements. It can be used to create a new array by combining multiple arrays or adding new elements to an existing array.

const anotherArray=[1,2,3, [4,5,6 ] , 7,[6,7,[8,9]]]
const flattenedArray=anotherArray.flat(2); // flattens the array up to a depth of 2
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9]

//NOTE : flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. The original array will not be modified.

console.log(Array.isArray(marvelHeroes)); // checks if marvelHeroes is an array, Output: true
console.log(Array.isArray("string")); // checks if "string" is an array, Output: false

console.log(Array.from("hello")); // creates an array from a string, Output: ["h", "e", "l", "l", "o"]


let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3)); // creates an array from the given arguments, Output: [100, 200, 300]