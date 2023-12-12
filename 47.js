// hoisting 

hello(); // calling before declaring this behaviour is called hosting

function hello(){
    console.log("hello world");
}
// const hello = function() // error in case of function expression : "cannot access 'hello' before initialization"
// {
//     console.log("hello world");
// }

console.log(hello);// error
const hello = "hello world";   
console.log(hello);

console.log(hello);    //undefined
var hello = "hello world"; 
console.log(hello); //hello world