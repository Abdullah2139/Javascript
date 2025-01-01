// object constructor
const tinderUser=new Object(); // single turn object
// const tinderUser2={}; // non single turn object

tinderUser.id="123";
tinderUser.name="John";
tinderUser.isLoggedIn=false;

const regularUser={
    email:"john@g.com",
    fullname:{
        userfullname:{
            firstname:"sam",
            lastname:"smith",
        }
    }
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={5:"a",6:"b"};
// const obj4={obj1,obj2,obj3};
// const obj4=Object.assign({},obj1,obj2,obj3);
const obj4={...obj1,...obj2,...obj3};
// console.log(obj4);

const users=[
    {
        id:1,
        name:"John",
        email:"j@g.com",
    },
    {
        id:2,
        name:"sam",
        email:"s@g.com",
    },
];
users[1].email; // accessing the objects in the array
// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("id"));