// important array methods 


// forEach
// map
// filter
// reduce


const numbers = [4,2,5,8];


// example 1 -:

// function multiplyBy2(number , index){
//     console.log(" index is ", index);
//     console.log(`${number}*2 = ${number*2}`);
// }
// for(let i = 0; i < numbers.length ; i++){
//     multiplyBy2(numbers[i],i);
// }

// example 2(a) -:
// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

//method1 -:

// for(let i = 0; i < numbers.length ; i++){
//     myFunc(numbers[i],i);
// }

// method2-:
 // input -> callback method 
// 1-> number present in array 
//2-> index of array

//     numbers.forEach(myfunc);


// example 2(b) -:
// numbers.forEach(function(number,index) 
// {
//     console.log(`index is ${index} number is ${number}`);
// });


// example3:- 
// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })


//realistic example :- 
const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// for(let user of users){
//     console.log(user.firstName);
// }

// users.forEach((user) =>{
//     console.log(user.firstName);
// })

// users.forEach( user =>{
//     console.log(user.firstName);
// })

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })











