const userEmail = [];

if (userEmail) {
    console.log("Got User Email.")
} else {
    console.log("Don't have user email.")
}

//Falsy values
// false, 0 , -0, BigInt 0n, null, undefined, "", NaN

// Truthy Values
// true, 1, "0", 'false', " ", [], {}, functionn()



// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operation (??)

let val;
// val = 5 ?? 10 // 5
// val = null ?? 10 //10
// val = undefined ?? 10 // 10
val = null ?? 10 ?? 20 // First value 10
console.log(val)


// Terniary Operator
// condition ? true : false

const num1 = 100;
num1 >= 80 ? console.log("More Than 80") : console.log("Less Than 80")