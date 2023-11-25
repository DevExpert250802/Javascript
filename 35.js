// array destructuring

const myArray = ["value1","value2","value3"];
//  task-: create 2 variables in which stores value1 on 1st variable and value2 on 2nd variable
// method 1
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);
// method 2

 let[myvar1,myvar2,myvar3] = myArray; // if i use const instead of let then we cannot change the value

// myvar1 = "value changed" // to change the value
 console.log("value of myvar1" , myvar1);
console.log("value of myvar2" , myvar2);
console.log("value of myvar3" , myvar3);

// case1 -:
// const myArray = ["value1"];
// let[myvar1,myvar2,myvar3] = myArray; 
// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);//undefined
// console.log("value of myvar3" , myvar3);//undefined

// case2 -:
// const myArray = ["value1" , "value2", "value3"];
// let[myvar1,myvar2] = myArray; 
// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);

// case3 -: //index skiping
// const myArray = ["value1" , "value2", "value3"];
// let[myvar1, ,myvar2] = myArray; 
// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);  //value3

// case4 -: storing value 1 and 2 in myvar1 and myvar2 and 3 and 4 in another array
// const myArray = ["value1" , "value2", "value3", "value4"];

// method 1:-
// let[myvar1,myvar2] = myArray; 
// let mynewarray = myArray.slice(2) // not to be used

//method 2:-

// let[myvar1,myvar2,...myNewArray] = myArray; 


// console.log("value of myvar1" , myvar1);
// console.log("value of myvar2" , myvar2);









