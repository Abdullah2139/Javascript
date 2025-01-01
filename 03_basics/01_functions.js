// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2){
    let result = num1 + num2;
    return result;
    console.log(num1 + num2); // bcz it's below return
}
const result = addTwoNum(3,4); // can also be stored in object
// console.log("Result: ",result);

function loginUserMessage(username){
    return `${username} is logged in`;
}
console.log(loginUserMessage("John"));