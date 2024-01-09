// call , apply , bind methods

// const user1 = {
//     firstName : "harshit",
//     age: 8,   
//     about : function (){
//         console.log(this.firstName, this.age);
//     }
// }

// const  user2 = {
//     firstName : "mohit", 
//     age: 9,
// }

// user1.about.call(user2) // mohit     9
// user1.about.call()     // undefined  undefined
// user1.about.call(user1) // harshit   8

// const user1 = {
//     firstName : "harshit",
//     age: 8,   
//     about : function (hobby,favMusician){
//         console.log(this.firstName, this.age,hobby,favMusician);
//     }
// }
// user1.about.call(user2,"guitar","mojart") // mohit 9 guitar mozart


// defining function outside object
function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName : "harshit",
    age: 8,   
    about : function (hobby,favMusician){
        console.log(this.firstName, this.age,hobby,favMusician);
    }
}

const  user2 = {
    firstName : "mohit",
    age: 9,
}

about.call(user1,"guitar","mojart")
about.call(user2,"guitar","mojart")


// apply
//array pass

about.apply(user1, ["guitar", "bach"]);

// bind
// function return
about.bind(user1, ["guitar", "bach"]); // nothing print

const func = about.bind(user2, "guitar", "bach");
func();