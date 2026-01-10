// for loop


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best no")
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++ ){
    // console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`)       
        // console.log(i + '*' + j + '=' + i*j)
    }
}


const myarr = ["Flash", "Batman", "Superman"]
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    // console.log(element)
}


// break and continue.......................................

// for (let i = 1; i <= 20; i++) {
//     if (i == 5 ){
//         console.log("5 is Detected");
//         break;
//     }
//     console.log(` value of i is ${i}`)
// }

for (let i = 1; i <= 20; i++) {
    if (i == 5 ){
        console.log("5 is Detected");
        continue;
    }
    console.log(` value of i is ${i}`)
}