// splice method 
// start , delete , insert 

const myArray = ['item1', 'item2', 'item3'];

// delete (it also gives you written of what you deleated)

 //myArray.splice(1,1)
// const deletedItem = myArray.splice(1, 1);
// console.log("delted item", deletedItem);

// insert 
// myArray.splice(1, 0,'inserted item');

// insert and delete simultaneously

const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
console.log("delted item", deletedItem);
console.log(myArray);