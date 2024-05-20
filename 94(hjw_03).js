console.log(myFunction);

// function expression
var myFunction = function(){
    console.log("this is my function");
}

console.log(myFunction);

//1) compilation
// global scope ->my function

// global execution context -> added in stack
// global execution context -> 2phases=> 1) creation phase (global memory) 2) code execution phase

// global memory -> 
// window object -> provided by browser 
// this(value) ->-> refrence-> {window}

// function expression 
// myFunction treated as a variable -> undefined(var)

//  Code execution phase (CEP) :-

//console.log(myFunction); -> Undefined
// var myFunction = function()  => ( assign function in myfunction in global memory)
// {
//     console.log("this is my function");
// }

// console.log(myFunction); -> function print ->

// f() {
//     console.log("this is my function");
// }

//// **** Global execuition context (GEC) -> pop out of stack
