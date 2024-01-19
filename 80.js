const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {
//     key3: "value3", 
// }

// // another way :-
// const obj2 = {}
// obj2.key3= "value3";

// console.log(obj1.key1) // value 1
// console.log(obj2.key3) // value 3
// console.log(obj2.key1) // undefined


// what we want :- if js dose not find key1 on obj2 then it automatically go to obj1 and print key 1


// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ , [[prototype]] => same
// prototype => different from previous two


// prototype  and __proto__ are different  


const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object

obj2.key3 = "value3";
// obj2.key2 = "unique";
console.log(obj2);

console.log(obj2.__proto__); // Dunder
