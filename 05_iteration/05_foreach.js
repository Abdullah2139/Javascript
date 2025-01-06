const coding= ['js', 'Python', 'Java', 'cpp']

coding.forEach(function(item){
    // console.log(item);
})

// Arrow function
coding.forEach((item) => {
    // console.log(item);
})

// function printMe(item){ // you can also pass the function as a parameter
//     console.log(item);
// }
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding=[
    {
        languageName:'javascript',
        languageFileName: 'js'
    },
    {
        languageName:'python',
        languageFileName: 'py'
    },
    {
        languageName:'java',
        languageFileName: 'ja'
    },
    {
        languageName:'ruby',
        languageFileName: 'rb'
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})