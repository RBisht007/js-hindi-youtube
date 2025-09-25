// ************************array****************************
// Create an array
//Note: Arrays in JavaScript can hold elements of different types, including numbers, strings, objects, and even other arrays. 
// In javascript arrays are resizable and can grow or shrink as needed.
//array creaes shallow copy of the original array, shallow copy means that it copies the references of the elements in the array, rather than creating a new copy of the elements themselves.
// If the elements in the array are objects, changes made to the objects in the copied array will also affect the original array, since both arrays reference the same objects in memory.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]

// Access elements in an array
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana

// Modify elements in an array
fruits[1] = "blueberry";
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]

// Add elements to an array
fruits.push("date");
console.log(fruits); // Output: ["apple", "blueberry", "cherry", "date"]

// Remove the last element from an array
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: date
console.log(fruits); // Output: ["apple", "blueberry", "cherry"]

// Get the length of an array
console.log(fruits.length); // Output: 3

// iterate over an array using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// iterate over an array using for...of loop
for (let fruit of fruits) {
    console.log(fruit);
}

// iterate over an array using forEach method
fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

// Check if an element exists in an array
console.log(fruits.includes("apple")); // Output: true
console.log(fruits.includes("date")); // Output: false

// Find the index of an element in an array
console.log(fruits.indexOf("cherry")); // Output: 2
console.log(fruits.indexOf("date")); // Output: -1

// Convert an array to a string
let fruitsString = fruits.join(", ");
console.log(fruitsString); // Output: apple, blueberry, cherry

// array methods

let arr=[1,2,3,4,5];
arr.push("string"); // adds an element to the end of the array
console.log(arr); // Output: [1, 2, 3, 4, 5, "string"]

arr.pop(); // removes the last element from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.unshift(0); // adds an element to the beginning of the array
console.log(arr); // Output: [0, 1, 2, 3, 4, 5]

arr.shift(); // removes the first element from the array
console.log(arr); // Output: [1, 2, 3, 4, 5]

console.log(arr.includes(3)); // checks if the array contains a specific element, Output: true

console.log(arr.indexOf(4)); // returns the index of a specific element, Output: 3

// Diffrence between slice and splice
// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.

let array = [1, 2, 3, 4, 5];
let newArray = array.slice(1, 4); // creates a new array from index 1 to 3
console.log(newArray); // Output: [2, 3, 4]
console.log(array); // Original array remains unchanged, Output: [1, 2, 3, 4, 5]

array.splice(1,3); // removes 3 elements starting from index 1
console.log(array); // Output: [1, 5]


//******************************************* */

// we can also crete aarray using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]