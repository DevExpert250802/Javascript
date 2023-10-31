// and  or operator 

let firstName = "Harshit";
let age = 22;
if(firstName[0] === "H"){
    console.log("your name starts with H")
}

if(age > 18){
    console.log("you are above 18");
}
// and operator (checks both condition) -> && 

if(firstName[0] === "H" && age>18){
    console.log("Name starts with H and above 18");
}else{
    console.log("inside else");
}

// or operator (checks either condition) -> ||
 firstName = "arshit";
 age = 16;

if(firstName[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else"); 
}