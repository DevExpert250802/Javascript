//*****primitve vs reference data types

// /primitve
let num1 = 6;
let num2 = num1;
console.log("value is num1 is", num1);
console.log("value is num2 is", num2);
num1++;
console.log("after incrementing num1")
console.log("value is num1 is", num1);// 7
console.log("value is num2 is", num2);// 6


// reference types 
// 1 array 

let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push("item3");
console.log("after pushing element to array 1");
console.log("array1", array1);
console.log("array2", array2);

// primitive data type are stored in stack less memory needed
// when we write let num1 = 4 it is stored somewhere in stack, let num2 = num1 it is stores somewhere in stack(memory) 
// if num1++ there is no change in num2 as both element are different in stack

// refrence data types are stored in heap which has whose address stored in stack
// let array1 = ["item1","item2"]; array2 = array1; (array1 and array2 has same address when stored in stack ) 
// in stack a pointer1 is present which has the address of array 1 any change in array 1 led the change in array2
// array1.push("item3") then we go to stack --> pointer of array1 which has the address of array1 which is stored in heap and when we push item3
// change in heap will reflect in both array1 and array2 as both elements has same address
