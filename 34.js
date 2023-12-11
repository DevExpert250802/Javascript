// for in loop in array
// used very less

// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"]; 

// for(let index in fruits){
    // console.log(index); // prints index
// }

// for(let index in fruits){
    // console.log(fruits[index]); // prints items on that index
// }

const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let index in fruits){
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);