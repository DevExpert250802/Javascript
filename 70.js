// optional chaining 

const user  = {
    firstName: "harshit",
    address: {houseNumber: '1234'}
}

// console.log(user.firstName);
// console.log(user.address);
// console.log(user.address.houseNumber);

// currently key is absent but in next second the property will appear
// so it dose not give error while accessing undefined

console.log(user?.firstName);
console.log(user?.address?.houseNumber);