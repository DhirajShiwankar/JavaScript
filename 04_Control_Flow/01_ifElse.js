// if

// if ( 2 == "2" ) {
//     console.log("value is exual");
// }

// if ( 2 === "2" ) {
//     console.log("value is exual");
// }
// else {
//     console.log("value is not equal.");
// }

// <, <=, >, >= , ==, != , ===

// const temp = 43 ;
// if ( temp < 50 ) {
//     console.log("temperature is less tham 50");    
// } else {
//     console.log("Temperature is greater tham 50");
// }

// const balance = 600;

// // if (balance > 500) console.log(("test")), console.log("test2");

// if (balance < 500){
//     console.log("balence is less than 500");    
// }else if (balance <= 550){
//     console.log("balence is less than or equal to 550")
// }else{
//     console.log("Balence is 600 or above")
// }

const user = true;
const debotcard = true;
const login = false;
const logEmail = true;

if (user && debotcard) {
    console.log("Allow to buy course");
}

if (login || logEmail) {
    console.log("user log in");
}
