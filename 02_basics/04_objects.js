// Object destructuring

const course={
    name:'React',
    price:1000,
    courseInstuctor:'Rah',
};
// course.name; // every time we have to write course dot blah blah, so we can use object destructuring
const {courseInstuctor: instructor}=course; // we can rename the variable name e.g. courseInstuctor to instructure
// console.log(courseInstuctor);
console.log(instructor);

