console.log("2" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// The reason is that an equality check and other comparisons automatically convert null to a number, treating it as 0.
// That's why (null == 0) is false and (null >= 0) is true.

// === strict equality
// strict equality operator === checks the equality without type conversion means it also check data type.

console.log("2" === 2); // false
