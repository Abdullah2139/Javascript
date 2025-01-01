const myArr=[0,1,2,3,4,5,6,7,8,9];
console.log(myArr[0]); // 0

const myArr2=new Array(1,2,3,4);
console.log(myArr[1]); // 1

myArr.push(10); // it will add 10 at the end of the array
myArr.pop(); // it will remove the last element from the array
myArr.shift(); // it will remove the first element from the array
myArr.unshift(-1); // it will add -1 at the beginning of the array
myArr.includes(5); // it will return true if 5 is present in the array
myArr.indexOf(5); // it will return the index of 5 in the array
myArr.slice(2, 5); // it will return the elements from index 2 to 5
myArr.splice(2, 1); // it will remove 1 element from the index 2
myArr.splice(2, 0, 2); // it will add 2 at the index 2
myArr.splice(2, 1, 2); // it will remove 1 element from the index 2 and add 2 at the same index

// difference bw slice and splice
// in slice last index is not included while in splice last index is included
// slice will not modify the original array
// splice will modify the original array
// slice will return the elements from the array
// splice will return the removed elements from the array
// slice will take 2 arguments, start and end
// splice will take 3 arguments, start, deleteCount and elements to add
// in splice, if deleteCount is 0, it will not remove any element
// in splice, if deleteCount is not provided, it will remove all elements from the start index
// in splice, if elements to add are not provided, it will only remove the elements
// in splice, if elements to add are provided, it will add the elements at the start index

const newArr=myArr.join(); // add all elements of the array in a string
console.log(myArr);