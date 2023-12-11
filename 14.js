// if else condition

let age = 19 ;

if(age>18){ //true
    console.log(" user can play ddlc");
}

let age1 = 17 ;
if(age1>18){// false
    console.log(" user can play ddlc");
}


let age2 = 17 ;
if(age2>18) //  condition is true
{
    console.log(" user can play ddlc");
}
else // condition is false
{
    console.log("user can not play ddlc")
}

let num = 14;
if(num%2===0){
    console.log("even")
}
else{
    console.log("odd")
}
// falsy values

// false
// ""
// null
// undefined
// 0

let firstName = ""; //empty string is falsy value

if (firstName){
    console.log(firstName);
}
else{
    console.log("first name is  kinda empty")
}

let firstName1 ; //undefined is falsy value

if (firstName1){
    console.log(firstName1);
}
else{
    console.log("first name is  kinda empty")
}

// truthy
// "abc"
//  1,-1
let firstNam =" devansh" 

if (firstNam){
    console.log(firstNam);
}
else{
    console.log("first name is  kinda empty")
}
let firstName2 = 1;

if (firstName2){
    console.log(firstName2);
}
else{
    console.log("first name is  kinda empty")
}
