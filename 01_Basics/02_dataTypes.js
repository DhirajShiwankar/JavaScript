"use strict"; //treat all JS code as newer version

// alert("hello"); //we are using node JS not browser

let name = "Dhiraj";
let num = 22;
let value = true;
let state;

// number => 2 to power 53
// BigInt
// String = ""
// Boolean = true / false
// null => Standalone value
// undefined
// Symbol => unique
// object

// console.log(typeof "Dhiraj");
// console.log(typeof null); // object
// console.log(typeof undefined); //undefined


// primitive
// 7 types : string, Number, boolean, null, undefinde, symbol, BigInt

const score = 100
const scoreValue =   100.3
const isloggedIn = false
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotheId = Symbol('123')

// console.log(id == anotheId);

const bigNum = 12123453674253542365n



// Reference (non primitive)
//Array, Objects, Functions


//++++++++++++++++++++++++++++++++++++++++++++++++++++

let myname = "Mithun"
let anothername = myname
anothername = "Sunil"

console.log(myname);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne 

userTwo.email = "exmaple@gmial.com"
console.log(userOne.email);
console.log(userTwo.email);
