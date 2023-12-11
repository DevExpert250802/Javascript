// arrow functions

// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// } // function declaration

// const singHappyBirthday = function(){
//     cosole.log("happy birthday to you ......");n
// }// function expression

const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}
singHappyBirthday();


const sumThreeNumbers = (number1, number2, number3) => {
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4);
console.log(ans);


// const isEven = function(number) // function expression
// {
//     return number % 2 === 0;
// }

// const isEven = (number) => // arrow function
// {
//     return number % 2 === 0;
// }

//if you have only single parameter you can remove parenthesis ()

// const isEven = number =>
// {
//     return number % 2 === 0;
// }

const isEven = number =>  number % 2 === 0;
    
console.log(isEven(4));


// const firstChar = (anyString) => {
//     return anyString[0];
// }

const firstChar = anyString => anyString[0];

console.log(firstChar("harshit"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}