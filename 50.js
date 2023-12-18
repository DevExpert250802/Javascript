// block scope vs function scope 
// { } => matter present in curly braces is called block

// let and const are block scope
// var is function scope

// {    
//     block 1 
//  }

// {  
//   block 2
//  }

// {
//     let firstName = "harshit"; 
// }
// console.log(firstName); // error :as let is block scope.

// different block different variable
{
    let firstName = "harshit"; 
    console.log(firstName);
}// let is block scope

{
   const firstName = "mohit"; 
    console.log(firstName);
}// let and const are block scope

    const firstName = "Dev"; 
console.log(firstName)
// let and const are block(block of global block) scope


{
   var firstname = "smriti"; 
}
 console.log(firstname);// var is function scope

if(true){
    var firstNamme = "harshita";
    console.log(firstName);
}
console.log(firstNamme);


// if(true){
//     let firstName = "harshit";
//     console.log(firstName);
// }
// console.log(firstName); // error : let is block scope


// function myApp(){
//     if(true){
//        let firstName = "harshit";
//         console.log(firstName);
//     }
////     console.log(firstName); // error : let is block scope
//  }
//   myApp();

function myApp(){
    if(true){
        var firstName = "harshiti"; // var can be used inside the function in any block
        console.log(firstName);
    }

    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}

myApp();