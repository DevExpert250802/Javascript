// reduce 

// numbers.reduce((() =>{}); -> use , input -> callback function

const numbers = [1,2,3,4,5, 10];

// aim : sum of all the numbers in array 

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 100); // 100-->>  passing initial value

console.log(sum);

//   Trace :-
// accumulator , currentValue,  return 
// 1               2              3     (first function) 
// 3(return)       3              6
// 6               4              10
// 10              5              15
// 15              10             25


// real  life example :-

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]


// Method:1

// let totalPrice = 0;
// for (let i = 0; i < userCart.length; i++) {
//     totalPrice += userCart[i].price;
//   }
// console.log(totalPrice);


// Method:2

let totalPrice = 0;
for (const item of userCart) {
    totalPrice += item.price;
}
console.log(totalPrice);



// Method:3

// const totalPrice = userCart.reduce((accumulator, product) => accumulator + product.price, 0);
// console.log(totalPrice); // Output: 49000


// Method:4

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>
//    totalPrice + currentProduct.price
// , 0)
// console.log(totalAmount);




// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000