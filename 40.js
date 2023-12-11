// spread operator
// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// working of spread operator

// const newArray = [...array1, ...array2] // merge of both arrays will come

// const newArray = [...array1, array2] // whole array2 comes as 4th element  orr array2 will not spread

// // const newArray = [...array1, ...array2, 89, 69]; 
// const newArray = [..."123456789"];  // string use is compulsary as it will not iterate and  "not __  iterable error will come" string->iterable
// console.log(newArray);


// spread operator in objects

// same key will not repeat in object
//const obj1 = {
//     key1: "value1",
//     key2: "value2",
//    key1: "value59",

//   };

const obj1 = {
    key1: "value1",
    key2: "value2",
  };
  const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
  };
//   const newObject = { ...obj1, ...obj2}; as key1 comes 2 times in obj1 and obj2 both soo key1 of obj2 will come as it is written in last
  // const newObject = { ...obj2, ...obj1, key69: "value69" }; // adding new key

  // const newObject = { ...["item1", "item2"] };

  // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" }; // key value pair (spreading string)
  // console.log(newObject);