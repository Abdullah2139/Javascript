const myName="Abdullah";
const repoCount=39;
// console.log("My name is "+myName+" and I have "+repoCount+" repositories on GitHub.");

console.log(`My name is ${myName} and I have ${repoCount} repositories on GitHub.`); // String interpolation

const gameName=new String("pubgkhan");
// console.log(gameName[0]);
// console.log(gameName.charAt(0)); // index position
// console.log(gameName.indexOf("k")); // char is in the which index 
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// const gameName2=gameName.substring(0,3);
// console.log(gameName2);

const gameName3=gameName.slice(-7,5);
console.log(gameName3);