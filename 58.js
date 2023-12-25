// filter method 

 const numbers = [1,3,2,6,4,8,9];

//  numbers.filter(); input ->callback function (return boolean value ) 

//method 1 

// const isEven = function(number)// function expression
//  {
//     return number % 2 === 0;
// }
// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);


// const isOdd = function(number) // function expression
//  {
//     return number % 2 !== 0;
// }
// const OddNumbers = numbers.filter(isOdd);
// console.log(OddNumbers);


//method 2

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers)