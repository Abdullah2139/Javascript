function calculateCartPrice(val1,val2,...num1){ // Rest parameter
    return num1;
};
console.log(calculateCartPrice(1,2,3));

const user={
    name:'John',
    price:139,
};
function handleObject(anyobject){ // object pass to funciton
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
};
handleObject(user);

const newArray=[1,2,3,4,5];
function returnSecondValue(getArray){// array pass to function
    return getArray[1];
};
console.log(returnSecondValue(newArray));
