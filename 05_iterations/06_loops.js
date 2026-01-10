const myNum = [1, 2, 3, 4, 5, 6, 6, 7, 9, 10];

// const newNum = myNum.filter( (num) => {
//     return num > 4
// })

const newNum = []

myNum.forEach( (num) => {
    if (num > 4){
        newNum.push(num)
    }
})
// console.log(newNum)

// const result = myNum.map( (num) => num + 10)

const result = myNum
.map( (num) => num * 10)
.map( (num) => num + 1)
.filter( (num) => num >= 40)
console.log(result);
