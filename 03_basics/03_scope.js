// scope
// scope is the context in which a variable is declared.

var c=300;
{
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a);
// console.log(b);
console.log(c);// var has global scope that's why we don't use it.