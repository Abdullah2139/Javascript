// Description: Conversion operations in JavaScript.

let score = "33";

console.log(typeof score); // number
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // 33

// "33"->33
// "33abc"->NaN
// true->1, false->0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1->true, 0->false
// "0"->true, "1"->true, "false"->true, "true"->true, "abc"->true, ""->false

let someValue = 33;
let stringValue = String(someValue);
console.log(stringValue); // "33"
console.log(typeof stringValue); // string

// Description: Operators in JavaScript.

console.log("1"+2);
console.log(1+2);
console.log(1+"2");
console.log("1"+2+3);
console.log(1+2+"3");

// whenever string is in the first place, it will concatenate the values.
// whenever number is in the first place, it will add the values and if there is any string, it will concatenate.
