// how to clone array 
// how to concatenate two arrays

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log(array1===array2);


// task 1 :- we have to make array2 in such a way that
//  if we change anything in array1 nothing will be changed in array2


// let array2 = ["item1", "item2"]; //method 0 (it is not good if we have 1000 elements)

// let array2 = array1.slice(0);     //method 1 (0 to last index)(faster)

// let array2 = [].concat(array1);   //method 2 (adding empty array in array1)

// spread operator
//  let array2 = [...array1];        //method3

// array1.push("item3");

// console.log(array1===array2);//to check whether both array are same or not
// console.log(array1)
// console.log(array2)

// task 2 :-
// clone array 1 and add items in 2nd array

// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// new way 
// spread operator
// let oneMoreArray = ["item3", "item4"]
//  array2 = [...array1, ...oneMoreArray];

// console.log(array1)
// console.log(array2)
