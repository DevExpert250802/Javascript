// object destructuring

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

// const bandName = band.bandName
// const famousSong = band.famousSong
// console.log(bandName,famousSong);
//// bandName = "queen"; // error use of const


let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);