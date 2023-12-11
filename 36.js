// objects (reference type)  

// arrays are good but not sufficient 
// for real world data 

// objects store key value pairs 
// objects don't have index

// how to create objects 
// object--> const; object name --> person; object-->{} ;key/ prpoerties-->name,age ; value-->(string) harstit,22
// const person = {name:"Harshit",age:22};
// console.log(typeof person); // object

const person = {
    name: "harshit",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects (dot notation and bracket notation)
// console.log(person.name); 
// console.log(person.age); 
// console.log(person["name"]); // key in js is bydefault in string "" or''
// console.log(person["age"]);
// console.log(person.hobbies);

// how to add key value pair to objects (dot notation and bracket notation)
// person.gender = "male";
person["gender"] = "male";
console.log(person);