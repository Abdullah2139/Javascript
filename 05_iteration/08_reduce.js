const newNums=[1,2,3,4,5];

// const myTotal = newNums.reduce(function(acc, currval){
//     console.log(`accumolator: ${acc}, curruentvalue: ${currval}`);
//     return acc + currval;
// }, 3); // this value is accumolator initial value
// console.log(myTotal);

// through arrow function
const myTotal = newNums.reduce((acc, currval) => acc+currval, 3);
// console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price: 1000
    },
    {
        itemName:"py course",
        price: 15000
    },
    {
        itemName:"flutter course",
        price: 20000
    },
]

const priceToPay=shoppingCart.reduce((acc, item)=>acc+item.price, 0); // 0 is initial value of accumolator
console.log(priceToPay);