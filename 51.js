// default parameters 

// // before ES2015 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 1;
//     }
//     return a+b;
// }
// const ans = addTwo(4);
// console.log(ans)



function addTwo(a,b=0){
    return a+b;
}

const ans = addTwo(4, 8);
console.log(ans)