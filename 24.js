// break keywork
// stops the execution of for loop and execution jumps outside the for block
for(let i = 1; i<=10; i++){
    if(i===4){
        break; 
    }
    console.log(i);
}
console.log("hello there");

// continue keyword 
// using continue current execution will skip 
for(let i = 1; i<=10; i++){
    if(i===4){
        continue;
    }
    console.log(i);
}

