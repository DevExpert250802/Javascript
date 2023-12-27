// find method

// const myArrary = ["Hello", "cat", "dog","lion" ];

// example 1
// function isLength(string){
//     return string.length === 3;
// }
 //  myArray.find()

//  const ans = isLength("doog");
// console.log(ans);

// const ans = myArrary.find(isLength);
// console.log(ans);
 
// example 2
// const ans = myArrary.find((string)=>string.length===3);
// console.log(ans);
  
const users = [
    {userID : 1, userName: "harshit"},
    {userID : 2, userName: "devansh"},
    {userID : 3, userName: "asdrfgg"},
    {userID : 4, userName: "efefbbb"},
    {userID : 5, userName: "harshig"},
]; 

const myUser = users.find((user)=>{
    return user.userID===3
});

// const myUser = users.find((user)=>user.userID===3);
console.log(myUser);
