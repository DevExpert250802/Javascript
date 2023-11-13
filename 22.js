// intro to for loop 
// print 0 to 9

for(let i = 0;i<=9;i++){
    console.log(i);
}
// console.log("value of i is ",i); //error as i dose not exist out of for block

for(var i = 0;i<=9;i++){
    console.log(i);
}
console.log("value of i is ",i);// i exist outside for loop

//we can use i outside
 let j = 0;
for(;j<=9;j++){
    console.log(j);
}
console.log("value of j is ",j);