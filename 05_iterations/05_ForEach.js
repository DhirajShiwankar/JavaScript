const coding = ["js", "ruby", "java", "py", "java"];
// coding.forEach(
//     function (item) {
//         console.log(item)
//     }
// )

// coding.forEach((item) => {
//     console.log(item);
// })

// function print(item) {
//     console.log(item);
// }
// coding.forEach(print)

// function print(item, index, arr) {
//     console.log(item, index, arr);
// }
// coding.forEach(print)

const mycoding = [
    {
        languageaName : "javascript",
        filename : "js"
    },
    {
        languageaName : "c++",
        filename : "C"
    },
    {
        languageaName : "java",
        filename : "java"
    }
]

mycoding.forEach( (item) => {
    console.log(item.filename)
})