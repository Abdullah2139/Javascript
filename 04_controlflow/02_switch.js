// switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3;

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febrauray");
        break;
    case 3:
        console.log("march"); // when the keys match the value and we don't have a break statement, the code will execute all except the default case
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;

    default:
        console.log("invalid month");
        break;
}