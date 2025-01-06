// if statement

// const isUserLoggedIn = true;
// const tempreture = 41;

// if (tempreture < 50) {
//   console.log("less than 50");
// } else {
//   console.log("greater than 50");
// }

// const score=200;
// if(score>100){
//     const power='fly';
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); //error

// const balance = 1000;
// if (balance > 500) console.log("test");
// else console.log("test2"); // short form of if else

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn=true;
const debitCard=true;
const loggedInGoogle=false;
const loggedInEmail=true;

if(userLoggedIn && debitCard){
    console.log('user can purchase');
}
if(loggedInGoogle || loggedInEmail){
    console.log('user can login');
}