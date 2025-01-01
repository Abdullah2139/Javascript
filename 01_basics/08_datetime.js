let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());

let myCreatedDate=new Date(2020, 11, 12);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000)); // Unix timestamp

let newDate=new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

newDate.toLocaleString('default', { 
    month: 'long', 
});