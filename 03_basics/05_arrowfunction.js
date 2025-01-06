// this keyword tell about current context, refer to current context

const user={
    username: 'Shubham',
    price: 100,

    welcomeMessage: function(){
        // console.log('${this.username}, welcome to website');
        // console.log(this);
    }

}
// user.welcomeMessage();
// user.username='Sam';
// user.welcomeMessage();

// console.log(this)

// function chai(){
//     let user1='Sam';
//     console.log(this);// this work in object, not in function
// }
// chai();

// through arrow function
const chai=()=>{
    let user2='Hi';
    console.log(this);
}
// chai();

// Arrow Function
const addTwo=(a,b)=>{
    return a+b;
}
// console.log(addTwo(2,3));

// implicit return
const addThree=(a,b)=>a+b;
// console.log(addThree(2,3));

// want to return object in implicit return
const addFour=(a,b)=>({myName:"abdullah", sum:a+b});
console.log(addFour(2,3));