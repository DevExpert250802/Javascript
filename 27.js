// array push pop 
// array(refrence type) is mutable(original array can be changed)
// while string (primitive type) is immutable

// array shift unshift 

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push --> add last 
fruits.push("banana");
console.log(fruits);

// pop --> remove the last element and return that element....
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift --> add in start
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift --> remove the starting element and return that element....
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);
// push and pop are faster as compared to shift and unshift
// as push and pop, adds/removes the element in last and shift and unshift adds/removes the element in starting which shifts every element
