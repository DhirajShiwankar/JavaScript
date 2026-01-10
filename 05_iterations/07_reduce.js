const mynum = [1, 2, 3];

// const result = mynum.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`)
//     return acc + currval;
// }, 0)

// const result = mynum.reduce( (acc, currval) => acc + currval, 0);

// console.log(result)

const cart = [
    {
        item : "js cource",
        price : 999
    },
    {
        item : "java cource",
        price : 599
    },
    {
        item : "C++ cource",
        price : 1999
    },
    {
        item : "python cource",
        price : 2999
    }
]

const result = cart.reduce( (acc, item) => acc + item.price, 0)
console.log(result);
