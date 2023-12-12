// typeof operator

// data types (primitive data types)
// string "harshit"
// number 2, 4, 5, 6.7
//  booleans
// undefined
// null
// BigInt
// Symbol

//  typeof operator tells about the which type of  data type it is

let age = 22;
let firstName = "devansh";

console.log(typeof age); //number
console.log(typeof 22); //number
console.log(typeof firstName); // string
console.log(typeof "devansh");//string

// convert number to string

// 22 -> "22"
// 1 method
console.log(typeof (age + "")); //string 
//  2 method
age = age + "";
console.log(typeof age); //string
// 3 method
age = String(age);
console.log(typeof age);  // string


// convert string to number.

let myString = "34";
console.log(typeof myString); //string

  // 1 method
let mynewString = +"34";
console.log(typeof myString); //number
// 2 method
 let myStr = "18";
 myStr = Number(myStr)
 console.log(typeof myStr);