// more about prototype

// let numbers =[1,2,3];
let numbers =[1,2,3];
console.log(Array.prototype);
console.log(numbers);
console.log(Object.getPrototypeOf(numbers));

// numbers.   --> many methods

//** javascript get these methods from prototype
//** prototype -> only functions --> eg:constructor functions
//** internally javascript array create
//** in javascript arrays are objects


function hello(){
    console.log("hello");
}
// by default we get prototype 
console.log(hello.prototype);
hello.prototype =  [] // change prototype
console.log(hello.prototype);
hello.prototype.push('1');
console.log(hello.prototype);