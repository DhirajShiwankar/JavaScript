// const trinderUser = new Object()

const trinderUser = {}
trinderUser.id = "1234abc"
trinderUser.name = "Dhiraj"
trinderUser.isLoggedIn = false
// console.log(trinderUser);

const regularUser = {
    email : "example@gmail.com",
    fullname : {
        userFullName : {
            firstName : "Dhiraj",
            lastName : "Shiwankar"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {4: "a", 5: "b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 ={...obj1, ...obj2, ...obj3}
// console.log(obj4);

const users = [
    {
        id : 1,
        email : "D@gmail.com"
    },
    {
        id : 1,
        email : "D@gmail.com"
    },
    {
        id : 1,
        email : "D@gmail.com"
    },
    {
        id : 1,
        email : "D@gmail.com"
    }
]

users[1].email
// console.log(trinderUser);

// console.log(Object.keys(trinderUser));
// console.log(Object.values(trinderUser));
// console.log(Object.entries(trinderUser));

// console.log(trinderUser.hasOwnProperty('isLoggedIn'));

const cource = {
    courname : "JS in Hindi",
    price : "999",
    courceInstructor : "Dhiraj"
}

const {courceInstructor} = cource
console.log(courceInstructor);

const {courceInstructor : instructor} = cource
console.log(instructor);

// {
//     "name": "dhiraj",
//     "courName": "Marathi",
//     "price" : "1000"

// }