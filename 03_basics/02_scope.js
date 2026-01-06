// var c = 300;
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    c = 30;   
    // console.log("Inner Value:" + a);
     
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Dhiraj"
    function two() {
        const web = "YouTube"
        console.log(username);
    }
    // console.log(web);

    two()
}

// one()

if (true) {
    const username = "dhiraj"
    if (username === "dhiraj") {
        const web = " youtube";
        // console.log(username + web);
    }
    // console.log(web);
}

// console.log(username);


//++++++++++++intresting ++++++++++++++++++++++++++++++++++++++

console.log(add(5))
function add(num) {
    return num + 1;
}

addTwo(5)
const addTwo = function (num) {
    return num + 2;
}
