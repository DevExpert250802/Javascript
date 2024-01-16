// store methods in different objects


// when user 1 forms -> object create ->2 methods
// when user 2 forms -> object create ->2 methods
//                     .
//                     .
//                     .
//                     .
//when user 10k forms->object create -> 2 methods   
//      that many times memory fills


// function createUser(firstName, lastName, email, age, address){ 
//     const user = {};
//     user.firstName = firstName;     //2.) add key value pair in object
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;

//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     };
//     user.is18 =  function(){
//         return this.age >= 18;
//     }
//     return user;
// }


const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about; //refrence(address)
    user.is18 = userMethods.is18; //refrence(address)
    return user;
}

const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());