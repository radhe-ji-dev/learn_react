//TDZ and hoisting in JavaScript

// Hoisting is a JavaScript mechanism where variable and function
// declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in the code.
//  However, only the declarations are hoisted, not the initializations.
// For example:

console.log(myVar); // Output: undefined
var myVar = 10;

// In the above example, the declaration of myVar is hoisted to the top of the scope, but its initialization is not.
// Therefore, when we try to access myVar before its initialization, it returns undefined instead of throwing an error.

// Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before their declaration.
// This means that if you try to access a variable declared with let or const before its declaration, it will throw a ReferenceError.
// For example:

console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;

//lets have hoisting and TDZ in the same example

console.log(myVar);
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
var myVar = 10;
let myLet2 = 20;

// lets have function hoisting and TDZ in the same example

myFunction();

function myFunction() {
	console.log('This is a function declaration and it is hoisted.');
}

myFunctionExpression(); // ReferenceError: Cannot access 'myFunctionExpression' before initialization

var myFunctionExpression = function () {
	console.log('This is a function expression and it is not hoisted.');
};

// In the above example, trying to access myLet before its declaration results in a ReferenceError because it is in the Temporal Dead Zone (TDZ) until it is declared.

// Interview Questions:
// 1. What is hoisting in JavaScript?
// 2. How does hoisting work for variables declared with var, let, and const in JavaScript?
// 3. What is the Temporal Dead Zone (TDZ) in JavaScript, and how does it affect variable accessibility?
// 4. Can you give an example of hoisting and TDZ in JavaScript?
// 5. How does hoisting affect function declarations and function expressions in JavaScript?
// 6. What are some common pitfalls of hoisting and TDZ in JavaScript, and how can they be avoided?
// 7. How does hoisting impact the performance of JavaScript code, and what are some best practices for optimizing it?
// 8. Can you explain the difference between hoisting and scoping in JavaScript?
// 9. How does hoisting interact with closures in JavaScript?
// 10. Can you explain how to handle hoisting and TDZ when working with asynchronous code in JavaScript?
