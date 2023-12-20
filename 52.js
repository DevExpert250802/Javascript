// rest parameters 


// function myFunc(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(3,4,5);


function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`); // string template
    console.log(`c is` , c);  //array
}

myFunc(3,4,5,6,7,8,9);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(4,5,4,66,10);
console.log(ans);