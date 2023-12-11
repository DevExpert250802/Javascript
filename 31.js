// use const for creating Array or any refrence types (as used by 90% developers)

// const pi = 3.14;
// pi = 4.7  (error as const can not be re-defined)
// array stored in heap memory fruits = ["apples","mango"]; // 0x11
const fruits = ["apples","mango"]; // 0x11
// fruits=["grapes","pineapple"] (error)
fruits.push("banana");
console.log(fruits);
