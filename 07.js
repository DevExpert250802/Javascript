// useful string methods

// a) trim()
// b) toUpperCase()
// c) toLowerCase()
// d) slice()
 
// a) :-
let firstName = "   Devansh   ";
// console.log(firstName.length;  13

//  to remove spaces we use trim method

// console.log(firstName.length); 13
// firstName.trim(); (it didnit change the existing string it gives us new string) // "devansh"
// if we use sting like this it would not work as string is immutable

// we can store this new string in another variable or put this string in same variable  
// 1
let newString = firstName.trim();
console.log(newString);
console.log(newString.length);
// 2
 firstName = firstName.trim();
console.log(firstName)
console.log(firstName.length);
 
// b) :-
// convert the letters of string into upper case
// firstName.toUpperCase() (new string)
console.log(firstName.toUpperCase());
 
// we can store this new string 
firstName = firstName.toUpperCase();
console.log(firstName);

//strings areee immutable
// firstName.toUpperCase(); // it will give new string so we have to store that new string
// console.log(firstName);


// c) :-
// converts the letters of string to lower case (similar to b)
firstName = firstName.toLowerCase();
console.log(firstName);

// d) :-

// start index (0)
// end index (end+1)(not include last index)

let mynewString = firstName.slice(0,5); // devan 
console.log(mynewString);

 mynewString = firstName.slice(2,5);  //van
console.log(mynewString);

mynewString = firstName.slice(3);  //ansh
console.log(mynewString);
