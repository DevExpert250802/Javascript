// methods
// function inside object
// this-> Object

//// majour problem with this is if you change first name and age you need to directly change in about also which is not possible in this case
// const person = {
//     firstName : "harsh",
//     age: 8,
//     about: function(){
//         console.log("person name is harshit and person age is 8");
//     }
// }
// person.about(); // call


// const person = {
//     firstName : "harsh",
//     age: 8,
//     about: function(){
//         console.log("person name is $ {this.firstName} and age is ${this.age} ");
//     }
// }
// person.about(); // call



function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "harsh",
    age: 8,
    about: personInfo
}
const person2 = {
    firstName : "mohit",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName : "nitish",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();