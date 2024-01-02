// Sets (it is iterable)

// jispe hum for of loop laga sakein
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
//*** unique items only (no duplicates allowed)

// const numbers = [1,2,3]; // array

// const numbers = new Set(1,2,3); // set
// console.log(numbers);  //Order is not guaranteed (2,1,3 or 1,2,3 or 3,2,1)
// console.log(numbers[2]); // error (undefined)


// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set(); //  empty set
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// numbers.add(items);   //(no duplicates allowed)
//  numbers.add(['item1', 'item2']);
//  numbers.add(['item1', 'item2']); // they will add as they store as different  array in memory(different address)
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }


const myArray = [1,2,4,4,5,6,5,6];
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);