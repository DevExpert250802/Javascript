// intro to arrays 
// reference type (data type)
// reference type --> object
// how to create arrays

// array are ordered/homogenous collection of items 
// array created using [] brackets

let fruits = ["apple", "mango", "grapes"];
let numbers = [1,2,3,4];
let mixed = [1,2,2.3, "string", null, undefined];
console.log(mixed);
console.log(numbers);
console.log(fruits[2]);

let obj = {}; // object literal
console.log(fruits);
fruits[1] = "banana";// change at first index
console.log(fruits);
console.log(typeof fruits);//object
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));


// array indexing  