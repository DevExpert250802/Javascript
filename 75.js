// arrow functions 
// no this in arrow function
// this in arrow function( is  from surrounding ) window object

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => {
        console.log(this.firstName, this.age);
    }   
}

// user1.about(); // undefined undefined
user1.about(user1);