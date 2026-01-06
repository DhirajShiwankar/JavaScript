// singleton

// object literals

// Object.create

const mySym = Symbol("Key1")
const jsUser = {
    name : "Dhiraj",
    "full name" : "Dhiraj S.",
    [mySym] : "myKey1", 
    age : 22,
    email : "example@gmail.com",
    isLoggedin : false,
    lastLoginDays : ["Monday", "Saturdaay"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "dhiraj@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "dhiraj@google.com"

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(jsUser.greetingTwo());
