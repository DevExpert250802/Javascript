// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]
// console.log(user);//  1 array--> 3 objects
for(let user of users){ // 3 different in 3 different lines
    console.log(user);
} 

for(let user of users) // only first name.... 
{
    console.log(user.firstName);
}
