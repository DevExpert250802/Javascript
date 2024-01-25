// 2015 / es6 

// class keyword 
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
       console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }
func(a) // we can write parameter in methods
{
    console.log(a);
}
}

// class constructor can not be called without new keyword
const user1 = new CreateUser('harshit', 'vashsith', 'harshit@gmail.com', 18, "my address");
const user2 = new CreateUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
const user3 = new CreateUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");

console.log(user1.sing())
console.log(user1.is18())
console.log(user1.firstName())
console.log(user3.firstName())

console.log(Object.getPrototypeOf(user1));

user1.func("dev")
