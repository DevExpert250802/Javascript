// undefined

let firstName;
console.log(typeof firstName) // undefined comes when you have not assign any value in variable
firstName = "devansh";
console.log(firstName, typeof firstName) // we can print more than 1 values in string

var firstNam;
console.log(typeof firstNam)

// const firstName1;  // error
// console.log(typeof firstName1) 

//null

let myVariable = null;
console.log(myVariable);
myVariable = "devansh";
console.log(myVariable, typeof myVariable);
console.log(typeof null); // object (typeof null -> null)
// (object->refrence datatype) -> bug/error in javascript 

// BigInt

let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);//maximum value you store in js

 let myNum = 123n
 let myNumb = BigInt(123)
 console.log(myNum);
 console.log(myNumb);
 console.log(myNum+myNumb);//135n
// if both number are not BigInt then error will occur " mix BigInt and other types , use explicit conversion"




