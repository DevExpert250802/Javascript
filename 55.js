// function returning function 
// (higher order function)
// function myFunc(){
//     function hello(){
//        console.log("hello world")
//     }
//     return hello;     //return
// }
// const ans = myFunc();  //store
// console.log(ans)       //print
// ans()                  //call



function myFunc(){
    function hello(){
        return "hello world"
    }
    return hello;  // return hello function
}

const ans = myFunc(); // store hello function
console.log(ans());


// function myFunc(){
//     return Function(){
//         return "hello world"
//     }
//     
// }
// const ans = myFunc(); 
// console.log(ans());

