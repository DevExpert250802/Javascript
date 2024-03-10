// complication
// code execution

// How java script code executes ?
// why complication ?
// what is global execution context ?
// what is local execution context ?




// ** 1) Compile / Compilation phase

// (***according to ecmascript--> *early error checking, *determing apporipate scope for variables --> for that parsing  is necessary )

// Compilation has 3 phases -:
// a) Tocanizing / Lexing - Tokenization is the process of exchanging sensitive data for nonsensitive data called “tokens” that can be used in a database or internal system without bringing it into scope. (****code broke into small chuncks called tokens)

// Lexing and tokenizing terms are used interchangeably, but there is a subtle difference between them. Lexing is a process of tokenization but it also checks if it needs to be considered as a distinct token. We can consider Lexing to be a smart version of tokenization.


// b) Parsing- Parsing means analyzing and converting a program into an internal format that a runtime environment can actually run.(***** Tokens understand --> Abstact syntax tree create)


// c) Code generation -  In computing, code generation is part of the process chain of a compiler and converts intermediate representation of source code into a form (e.g., machine code) that can be readily executed by the target system.


// ** 2) Code Execution Phase :-
// (in J.S. code executes inside execution context(code execute karne ke liye execution context create karna hogaa)  --> 

// first, Global execution context creates ==> 2 phases create...


// a) Global memory (Creation phase)


// (**ecma script -> When control enters an execution context, the scope chain is created and initialized, variable instanination is performed(variable creation), and the 'this' value is determined)


// Global code--> this--> Global Object(window) 
//Eval code--> this--> ->this in calling context
 
//  hoisting (****storing in memory before execution of code)


// firstName : undefined  (in case of var)

// this(value): browser --> == window // --> window (already present) is a  object provided by browser .

//**** javascript is synchronous programming language(Synchronous programming is a programming model where operations take place sequentially. ) (Asynchronous feature was provided by browser)  and single threaded 

//B) Code Execution Phase :-
// Synchronous programming is a programming model where operations take place sequentially.

// Global execuition context (GEC) -> added in call stack

//  Global Execution Context creates => 2 Phases create => 
// 1)  Creation Phase /Global Memory /Environment record / Environment variable (when control enters in  Global Execution Context variables created in global memory)  

// 2) Code Execution Phase

// 1) console.log(this); // {window}
// 2) console.log(window); // {window}
// 3) console.log(firstname); // undefined
// 4) var firstName = "dev"
// 5) console.log(firstName);  //dev 
//// **** Global execuition context (GEC) -> pop out of  call stack

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "dev";
console.log(firstName);

