// functions inside function

// arrow function
// const app = () =>{
//     const myFunction =() => {
//         console.log("hello from my function")
//     }
//     console.log("inside app")
//     myFunction();
// }
// app();


// function declaration :-
function app(){
    const myFunc = () =>{
        console.log("hello from myFunc")
    }

    const addTwo = (num1, num2) =>{
        return num1 + num2;
    }

    const mul = (num1, num2) => num1* num2;

    console.log("inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(2,3));
}
app();