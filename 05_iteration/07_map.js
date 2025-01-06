const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums=myNumbers.map((num)=>num+10); // it will return new array
// console.log(newNums);

// chaining
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1) // it takes the result of first one
  .filter((num) => num >= 40); // it takes the result of second one and print the result
console.log(newNums);
