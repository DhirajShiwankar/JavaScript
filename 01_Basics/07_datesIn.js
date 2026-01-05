let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myOwnDate = new Date(2026, 0, 23)
// let myOwnDate = new Date(2026, 0, 23 , 5, 3)
// let myOwnDate = new Date("2026-01-14")
let myOwnDate = new Date("01-05-2026")
// console.log(myOwnDate.toLocaleString());

let timestamp = Date.now()
// console.log(timestamp);
// console.log(myOwnDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());
// console.log(`${newDate.getDate()} and ${newDate.getMonth()}`);


newDate.toLocaleString('defailt', {
    weekend: "long",
})