const user = {
    username : "Dhiraj",
    price : 999,
    welcomeMsg : function () {
        console.log(`${this.username} , welcome to website.`)
        console.log(this);
        
    }
}

// user.welcomeMsg();
// user.username = "Shubham";
// user.welcomeMsg();

// console.log(this);


// function funtn (){
//     let username = "Dhiraj"
//     console.log(this.user);
// }
// funtn()

// const fun = function () {
//     let username = "Hitesh";
//     console.log(this.username);
// }

const fun = () => {
    let username = "Hitesh";
    console.log(this);
}
// fun()

// const addtwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addtwo(10, 20));

// const addtwo = (num1, num2) => ( num1 + num2 );

const addtwo = (num1, num2) => ({ username : "Dhiraj" });
console.log(addtwo(10, 20));
