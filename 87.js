// class practice and extends keyword

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal // subclass
{

} 

// const animal1 = new Animal("tommy", 3);
// console.log(animal1);
// console.log(animal1.eat())
// console.log(animal1.isCute());

const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());