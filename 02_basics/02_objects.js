// singleton create through object constructor
// object.create

// object literal

const mySymbol = Symbol('mySymbol');
const person = {
    name: 'John',
    "name2": "sam",
    "full name": 'John Doe', // way to create a property with space
    [mySymbol]: 'mySymbol', // way to create a symbol
    age: 30,
    location: 'USA',
    email: 'john@gmail.com',
    isLogged: false,
    lastLoggedIn: ["monday", "saturday"],
};
// console.log(person.email);
// console.log(person['email']); // best way to access object properties e.g, you can't access all properties through dot notation
// console.log(person[mySymbol]); // for example string with space objects can't be accessed through dot notation
// console.log(person["full name"]); // you can't full name property through dot notation because it has space
// console.log(person.name2); // you can access name2 property through dot notation because it has no space
console.log(person.name2);

person.email = 'john@google.com';
// Object.freeze(person); // freeze the object means you can't change the object properties
person.email = 'john@microsoft.com';
// console.log(person.email);

// way to add new property to object through function
person.greeting = function () {
    console.log("Hello JS user");
};
person.greetingTwo = function () {
    console.log(`Hello JS user ${this.name}`); // this keyword use for reference to name property in the object
};
console.log(person.greeting()); // when you don't use the brackets it will return function reference
console.log(person.greetingTwo()); // and when you use it executes the function