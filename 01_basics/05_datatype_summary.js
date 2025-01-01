// Primitive data types(reference, call by value): number, string, boolean, undefined, null, symbol

const score=100;
const isLoggedIn=true;
const outsideTemp=null;

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId); // false because Symbol is unique

const bigNumber=362628365273652736n;
// Reference data types(reference, call by reference): object, array, function

const heros=['superman', 'batman', 'spiderman'];
const user={
    name:'john',
    age:30,
};
const myFunction=function greet(){
    console.log('hello');
};

// memory, stack and heap
// stack: primitive data types -> In stack, the data is stored in a linear and ordered way and you get the copy.
// heap: non-premitive(reference data types) -> In heap, the data is stored in a random way and you get the actual value but the reference(pointers) reside in stack.

let myName='john';
let anotherName=myName;
anotherName='doe';

console.log(myName); // john
console.log(anotherName); // doe

let userOne={
    email:"asda@google.com",
    id:"user@123",
};

let userTwo=userOne;
userTwo.email="khan@google.com";

console.log(userOne.email);
console.log(userTwo.email);