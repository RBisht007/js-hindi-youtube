// Dates in JavaScript
// The Date object in JavaScript is used to work with dates and times.
//Date object is created using the new Date() constructor.

const currentDate= new Date() // it will create a date object with current date and time
console.log(currentDate) // 2024-06-21T10:20:30.456Z (example output, will vary based on current date and time)
console.log(typeof currentDate) // object
console.log(currentDate.toString()) // it will convert date object to string

console.log(currentDate.toDateString()) //   ,it will return the date portion of the date object as a string
console.log(currentDate.toTimeString()) // it will return the time portion of the date object as a string
console.log(currentDate.toISOString()) // it will return the date object in ISO format
console.log(currentDate.toLocaleDateString()) // it will return the date portion of the date object in local format
console.log(currentDate.toLocaleTimeString()) // it will return the time portion of the date object in local format

// Creating Date object with specific date and time
let myDate = new Date(2023,0,23) // it will create a date object with specific date (23rd Jan 2023) , month is 0-indexed
console.log(myDate.toString()) // Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let myDate2 = new Date(2023,0,23,5,3) // it will create a date object with specific date and time (23rd Jan 2023, 5:03 AM)
console.log(myDate2.toString()) // Mon Jan 23 2023 05:03:00 GMT+0000 (Coordinated Universal Time)

let myDate3 = new Date("2023-01-23") // it will create a date object with specific date using date string
console.log(myDate3.toLocaleString()) // 1/23/2023, 12:00:00 AM (example output, will vary based on locale)

let myDate4 = new Date("2023-01-23T05:03:00") // it will create a date object with specific date and time using date string
console.log(myDate4.toLocaleString()) // 1/23/2023, 5:03:00 AM (example output, will vary based on locale)

let datetime=new date("01-14-2023 04:30:00") // it will create a date object with specific date and time using different date string format
console.log(datetime.toLocaleString()) // 1/14/2023, 4:30:00 AM (example output, will vary based on locale)
