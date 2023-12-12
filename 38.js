// how to iterate object

const person = {
    name: "dev",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}
 
// to iterate objects we use 2 methods:-

// for in loop 
// Object.keys

// method 1 -> for in loop -:

// to print key:-
for(let key in person ){
    console.log(key);  
}
//  to print value pairs :-

// for(let key in person ){
//     console.log(person.key);   // undefined as there is no key->name in person 
// }

for(let key in person ){
    console.log(person[key]);  
}

//  to print key value pairs :-

for(let key in person ){
    // console.log(`${key} : ${person[key]}`);  
    console.log(key, " :",person[key]);
}

//method 2 -> Object.keys

console.log(Object.keys(person)) //keys  return array
console.log(typeof (Object.keys(person))) // to check type (object)
const val = Array.isArray(Object.keys(person)) // to check it is array or not...
console.log(val);
for(let key of Object.keys(person)){
    console.log(keys); //keys
    console.log(person[key]); //value
}



 