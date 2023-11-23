// for of loop in array
// used for iteration of normal array

// new way to iterate loop
// internally works as for loop, it works automatically it iterates till its length as you increase the length of array it automatically increases
// const fruits = [ "apples","mango","grapes","fruit4","fruit5"];

// for(let fruit of fruits){
//     console.log(fruit);
// }
//  we can also write ( but it is tough for understanding)
// const i = [ "apples","mango","grapes","fruit4","fruit5"];
// for(let k of i){  
//     console.log(k);
// }
const fruits = [ "apples","mango","grapes","fruit4","fruit5"];
fruits2 = [];

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
    console.log(fruits2);
    


