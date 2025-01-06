// const userEmail = "sam@g.com";
// if (userEmail) {
//   console.log("got user email");
// } else {
//   console.log("don't have user email");
// }

// falsy values
// false, 0, "", null, BigInt, 0n, undefined, NaN,-0

// truthy values
// "0", "false", " ", [], {}, function(){}

// const userEmail1 = [];
// if (userEmail1.length === 0) {
//   console.log("empty array");
// }

// const emptyobject = {};
// if (Object.keys(emptyobject).length === 0) {
//   console.log("empty object");
// }

// Nullish coalescing operator (??): null undefined

let val1;
// val1=5??10
// val1 = null ?? 10;
// val1=undefined ?? 15;
val1 = null ?? 10 ?? 15;
// console.log(val1);

// Ternary operator
// condition?true:false

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("I will buy ice tea")
  : console.log("I will not buy ice tea");
