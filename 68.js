// Maps 
// map is an iterable
 
// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// Map-> method => get method
// different between maps and objects
//*** objects can only have string or symbol as key 

// in maps you can use anything as key like array, number, string  

// we can use for of loop in maps which we can not use in objects(we can use for in loop in objects)

// object literal 
// key -> string 
// key -> symbol

// const person = {
//     firstName : "harshit",
//     age: 7,
//     1:"one"
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);
// for(let key in person){ 
//     console.log(typeof key);
// }


//------------------------------------MAP--------------------------------------------

/*
const person = new Map();  // create map
person.set('firstName', 'Harshit');
person.set('age', 7);
person.set(1,'one');
person.set([1,2,3],'onetwothree'); //array ->object
person.set({1: 'one'},'onetwothree');
console.log(person);
console.log(person.get(1));
console.log(person.get(firstName));
console.log(person.get(age));
console.log(person.keys()); // map iterator -> print keys using loops
*/

/*
for(let key of person.keys()){
    console.log(key);
    console.log(key, typeof key);
}
*/

/*
for(let key of person){   //key value pair
  console.log(key); 
  console.log(Array.isArray(key));
}
*/

/*
for(let [key, value] of person){// destructure array
    console.log(key, value)
}
*/

// Directly create map

//  const person = new Map([['firstName','harshit'],['age',7]])
//  console.log(person);









// realistic example



const person1 = {
    id: 1,
    firstName: "harshit"
}
const person2 = {
    id: 2,
    firstName: "harshta"
}


const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person2, {age: 9, gender: "female"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);

