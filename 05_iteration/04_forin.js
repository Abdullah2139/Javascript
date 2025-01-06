// forin loop with object
const myObject={
    js: 'JavaScript',
    cpp: 'C++',
    py: 'Python',
    rb: 'Ruby'
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// for in loop with array
const programming=['js','rb','py','cpp'];
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}

// forin loop with map

const myMap=new Map(); // can't write map through forin loop bcz map is non-iterable
myMap.set('js','JavaScript');
myMap.set('cpp','C++');
myMap.set('py','Python');

for (const key in myMap) {
    // console.log(key);
}