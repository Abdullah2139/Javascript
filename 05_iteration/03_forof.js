// forof loop

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('PAK', 'Pakistan')
map.set('IND', 'India')
map.set('USA', 'United States')

// console.log(map);
for (const key of map) {
    // console.log(key); // it will return array of key and value
}
for (const [key,value] of map) {
    // console.log(key, '=>',value); // it will return key and value like destructuring
}

// on object
const myObject={
    'game1':'Cricket',
    'game2':'Football'
}
for (const [key,value] of myObject) { // objects are not iterable
    console.log(key, '=>',value); // forof loop will not work on objects
}