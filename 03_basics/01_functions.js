function myname (){
    console.log("d");
    console.log("h");
    console.log("i");
    console.log("r");
    console.log("a");
    console.log("j");
}
// myname ()

// function addTwoNum (num1, num2){
//     console.log(num1 + num2);
    
// }
// addTwoNum(10, 20)

function addTwoNum (num1, num2){
    // let result = num1 + num2;
    // return result;    
    return num1 + num2;
}
const result = addTwoNum(10, 20);
// console.log(result);

function loginuser (username = "sam") {
    if (!username){
        console.log("Plese enter Username.");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuser());
// console.log(loginuser("Dhiraj"));

function calPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calPrice(5, 10, 20, 30));

const user = {
    username : "Dhiraj",
    price : 199
}

function handObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handObject(user)

const arr = [100, 200, 300, 400];
function arrVal(getValue) {
    return getValue[2];
}

console.log(arrVal(arr));

