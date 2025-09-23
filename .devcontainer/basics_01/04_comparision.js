// Normal Comparisions
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 3); // false
console.log(5 == 5); // true
console.log(5 != 3); // true

//*************************************************************************************** */


console.log(null>0)// false beacause null is converted to 0false
console.log(null>=0)// true because null is converted to 0
console.log(null==0)// false because null is only equal to undefined

console.log(undefined>0)// false because undefined is converted to NaN
console.log(undefined<0)// false because undefined is converted to NaN
console.log(undefined==0)// false because undefined is only equal to null

//Note: == checks for value equality with type coercion, while === checks for both value and type equality.

// Strict Comparisons (checks both value and type)

console.log(5 === '5'); // false because types are different
console.log(5 !== '5'); // true because types are different
console.log(5 === 5);// true because both value and type are same
console.log(5 !== 5);// false because both value and type are same


// Comparing different types
console.log(5 > '3'); // true (string '3' is converted to number 3)
console.log('5' < 10); // true (string '5' is converted to number 5)

// Comparing booleans
console.log(true > false); // true (true is treated as 1, false as 0)
console.log(true == 1); // true
console.log(false == 0); // true