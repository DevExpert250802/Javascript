// function
// function --> keyword 

// example1:-

// singHappyBirthday()->function name  

function singHappyBirthday(){
    console.log("happy birthday to you ......");
}
// // Function call 
singHappyBirthday();
singHappyBirthday();

// example 2 :-

// function twoPlusFour(){
//     console.log(2+4); 
// }
// // function call  // print the function
// twoPlusFour();  
// twoPlusFour(); 
// twoPlusFour();  

// function twoPlusFour(){
//    return(2+4); // returning the value which can be stored or printed
// }
// console.log(twoPlusFour()); //print
// const returnedValue = twoPlusFour(); // store;
// console.log(returnedValue);

// example 3:-
// Reusable function 
function sumThreeNumbers(number1, number2, number3) // parameter in function
{
    return number1 + number2 + number3;
}
const returnedValue = sumThreeNumbers(2,5,6); // argument-> value we pass to the parameter
console.log(returnedValue);

// example 4:-

// isEven
// input : one number 
// output : true , false 

// method 1
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(4));

// method 2 
function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(4));

// example 5:-
// function 
// input : string 
// output: firstCharacter 

function firstChar(anyString){
    return anyString[0];
}
console.log(firstChar("zbc"));

// example 6:-
// function 
// input : array, target (number)
// output: index of target if target present in array 
// linear search 

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray = [1,3,8,90]
const ans = findTarget(myArray, 4);
console.log(ans);
