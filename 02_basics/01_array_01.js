const heros = ["Batman", "thor", "superman", "spiderman"];
const villains = ["joker", "loki", "lex luthor", "venom"];

heros.push(villains);
// console.log(heros);
// console.log(heros[3][1]); // loki

const allHeros=heros.concat(villains);
// console.log(allHeros);

const all_new_heros=[...heros,...villains]; // spread operator
// console.log(all_new_heros);

// difference between concat and spread operator, concat takes one argument and spread operator takes multiple arguments

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity); // flat method is used to flatten the array
// console.log(real_another_array);

// console.log(Array.isArray("khan")); // false
// console.log(Array.from("khan")); // [ 'k', 'h', 'a', 'n' ]
// console.log(Array.from({name:"khan"})); // [], it will return empty array because it is an object and here it does not know that apply operation on keys or on value.you have to tell that apply operation on keys or on value and when you do't tell,it return empty array.

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]   // Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

// difference between Array.from() and Array.of() method
// Array.from() method creates a new Array instance from an array-like or iterable object.
// Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.