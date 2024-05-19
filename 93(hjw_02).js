
//  hoisting (****storing in memory before execution of code)


console.log(this);
console.log(window);
console.log(myFunction);

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}

var firstName = "Harshit";
var lastName = "Sharma"
var fullName = firstName + " " + lastName;
console.log(fullName);

// compilation phase:-
// global scope:-
// firstName,lastName,fullName,myFunction

// lexing-->javascript -> lexical scope language-> code kaha likha vaha ka scope
//eg)  lexcically my function is in global scope

// code execution phase :-

// // ****
// Global execuition context (GEC) -> added in  call stack


//  Global execuition context (GEC) ==> creation in 2 phases

// 1) Creation phase(Global memory)

// present before creation of global execution context
// window object provided by browser

//** window object -> {} 
//**console.log(this) -> window
//**var firstName = "Harshit" -> undefined
//**var lastName = "Sharma" -> undefined
//**var fullName = firstName + " " + lastName -> undefined
//**function( keyword) -> myFunction  ->added in global memory

// execution starts :--
//2) Code execution phase

// console ;- 
//1 console.log(this); -> {w}
//2 console.log(window);->{w}
//3 console.log(myFunction); -> "print" -> f myFunction(){
//     console.log("this is my function");
// }

//4 console.log(fullName); ->undefined

//5 function myFunction() ->   nothing hapens as my function is alredy present in global memory
// {               
//     console.log("this is my function");
// }

//6  var firstName = "Harshit"; =>global memory (undefined -> harshit)
//7 var lastName = "Sharma" =>global memory (undefined ->  sharma)
//8 var fullName = firstName + " " + lastName; =>global memory (undefined-> harshit sharma )
//9 console.log(fullName);->harshit sharma

//// **** Global execuition context (GEC) -> pop out of call stack