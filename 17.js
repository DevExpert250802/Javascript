// nested if else
// nesting if & else in else
//game --:
// winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 

// "prompt" function is used to take input in your browser , we can pass massage in it eg: Guess a number 
//+prompt takes input in number (string --> number)
let winningNumber = 19;
let userGuess = +prompt("Guess a number"); // store the value in "userGuess" variable

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }
}