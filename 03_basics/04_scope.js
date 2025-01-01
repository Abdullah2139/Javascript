// nested scope

function one() {
    const userName = "john";
    function two() {
        const websiteOne = "youtube";
        // console.log(userName); // Accessible
    }
    two();
    // console.log(website); // ReferenceError
}
one();

if (true) {
    const username = "john";
    if (username === "john") { // Use comparison operator
        const websiteTwo = "youtube";
        // console.log(username); // Accessible
    }
    // console.log(website); // ReferenceError
}
// console.log(username); // ReferenceError


// +++++++++++ interesting ++++++++++

addOne(5); // not gives an error bcz we simply declare the function
function addOne(num){
    return num+1;
}
// addOne(5);

addTwo(5); // gives an error bcz(hoisting) of how you declare the function. here we store the function in variable
const addTwo = function(num){
    return num+2;
}
// addTwo(5);