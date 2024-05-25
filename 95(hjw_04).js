// console.log(firstName);
// console.log(typeof firstName);
let firstName = "Harshit";
console.log(firstName);

// (A) Compilation Phase
// (B) Code Execution Phase

// Global execuition context (GEC) -> added in stack

//  Global Execution Context creates => 2 Phases create => 
// 1)  Creation Phase /Global Memory /Environment record / Environment variable (when control enters in  Global Execution Context variables created in global memory)  
 
// Global Memory -->
// window object -> provided by browser 
// this(value) => refrence-> {window}
// firstName => uninitialised (let / const case)

// 2) Code Execution Phase


//1) console.log(firstName); => uninitialised => error (let / const case)
// Uncaught ReferenceError:
// Cannot access 'firstName' before initialization


// (hosting occurs in case of let and const but they are uninitialized)


// console.log(firstName); (only this line is written)

// Uncaught ReferenceError:  (this error comes when variable is not present)
// firstName is not defined


// firstName is present in "temporal dead zone" till it is uninitialized


// let firstName;  => print => undefined 
// const firstName;  => print => error =>Uncaught SyntaxError:

// (**
//   console.log(typeof firstName); => print => error => Uncaught ReferenceError: Cannot    access 'firstName' before initialization
// let firstName = "harshit";
// )

// (**
// console.log(typeof firstName); => print => Undefined 
// )
