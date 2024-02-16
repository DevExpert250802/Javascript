// getter and setters 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName)
      // fullName.split(" ")
      // [devansh, khandelwal]
    { //   destructure
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());

console.log(person1.fullName); // use as property
person1.fullName = "Devansh Khandelwal";
console.log(person1);
// console.log(person1.fullName);
