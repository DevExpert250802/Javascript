// map method (**important)

// **works same as foreach take callback as input
// ** map function-> returns new Array
// ** return in map is necessary as nothing returns then by default  "undefined"   return (if you use console.log directly instead return)


const numbers = [3,4,6,1,8];

// //  method 1
// const square = function(number){
//     return number*number;
// }
// // numbers.map(square); //  square -> function name and map -> creates new array 

// const squareNumber = numbers.map(square); //squareNumber stores new array 
// console.log(squareNumber);

// method 2 {inside map function}
// const squareNumber = numbers.map(function(number){
//     return number * number ;
// });
// console.log(squareNumber);


// method 3 {arrow function}
// const squareNumber = numbers.map(number=>{
//     return number * number ;
// });
// console.log(squareNumber);

// // const squareNumber = numbers.map((number, index)=>{
//   return  `index: ${index},${number*number} ` ;
// });
// console.log(squareNumber);

////realistic example :-

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// console.log(userNames);