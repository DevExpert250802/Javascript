 // every method


// const numbers = [2,4,6,9,10];
// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);

// callback function --> true / false(boolean)
// every method ---> true/ false(boolean) (It gives true only if all elements are even )

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
]

const ans = userCart.every((cartItem)=>cartItem.price < 30000);
console.log(ans);