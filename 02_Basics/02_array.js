const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const arrInarr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realArr = arrInarr.flat(Infinity)
// console.log(realArr);


// console.log(Array.isArray("Dhiraj"));
// console.log(Array.from("Dhiraj"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

 
