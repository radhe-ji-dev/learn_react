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

// Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with ---let and const--- are not accessible before their declaration.
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
// answer: Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope before code execution. This means that you can use a variable or a function before it is declared in the code. Hoisting only works with variable and function declarations, not with variable and function expressions.
// 2. How does hoisting work for variables declared with var, let, and const in JavaScript?
// answer: Variables declared with var are hoisted to the top of their scope and initialized with undefined. Variables declared with let and const are also hoisted to the top of their scope, but they are not initialized. This means that if you try to access a variable declared with let or const before it is declared, you will get a ReferenceError due to the Temporal Dead Zone (TDZ).
// 3. What is the Temporal Dead Zone (TDZ) in JavaScript, and how does it affect variable accessibility?
// answer: The Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before their declaration. This means that if you try to access a variable declared with let or const before it is declared, it will throw a ReferenceError. The TDZ exists to prevent the use of variables before they are declared, which can help catch errors and improve code readability.
// 4. Can you give an example of hoisting and TDZ in JavaScript?
// answer: Yes, here is an example that demonstrates both hoisting and TDZ:
console.log(myVar); // Output: undefined
console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
var myVar = 10;
let myLet1 = 20;
let myLet3 = 30;
// In this example, the variable myVar is hoisted and initialized with undefined, so it can be accessed before its declaration. However, the variable myLet is in the Temporal Dead Zone (TDZ) until it is declared, so trying to access it before its declaration results in a ReferenceError.
// 4. Can you give an example of hoisting and TDZ in JavaScript?
// answer: Yes, here is an example that demonstrates both hoisting and TDZ:
myFunction();
function myFunction() {
	console.log('This is a function declaration and it is hoisted.');
}
myFunctionExpression(); // ReferenceError: Cannot access 'myFunctionExpression' before initialization
var myFunctionExpression = function () {
	console.log('This is a function expression and it is not hoisted.');
};
// In this example, the function declaration myFunction is hoisted, so it can be called before its declaration.
// However, the function expression myFunctionExpression is not hoisted, so trying to call it before its declaration results in a ReferenceError
// due to the Temporal Dead Zone (TDZ).

// 5. How does hoisting affect function declarations and function expressions in JavaScript?
// answer: Function declarations are hoisted to the top of their scope and can be called before they are declared in the code. On the other hand,
//  function expressions are not hoisted and will throw a ReferenceError if accessed before declaration.
//  This is because function expressions are treated as variable assignments,
// and variables declared with var are hoisted but not initialized until the assignment is executed.
//  Therefore, trying to call a function expression before its declaration will result in a ReferenceError due to the Temporal Dead Zone (TDZ).

// 6. What are some common pitfalls of hoisting and TDZ in JavaScript, and how can they be avoided?
// answer: Some common pitfalls of hoisting and TDZ in JavaScript include:
// - Accessing variables before they are declared, which can lead to unexpected behavior or ReferenceErrors.
// - Using function expressions before they are declared, which can also lead to ReferenceErrors.
// - Relying on hoisting to access variables or functions in a way that makes the code less readable and harder to maintain.
// To avoid these pitfalls, it is best practice to always declare variables and functions at the top of their scope, and to avoid using variables or functions before they are declared. This can help improve code readability and reduce the likelihood of errors related to hoisting and TDZ.

// 7. Can you explain how hoisting and TDZ interact with each other in JavaScript?
// answer: Hoisting and TDZ interact with each other in JavaScript in a way that can lead to unexpected behavior if not properly understood.
// When a variable or function is hoisted, its declaration is moved to the top of its scope, but its initialization is not. This means that if you try to access a variable declared with let or const before it is declared, you will get a ReferenceError due to the Temporal Dead Zone (TDZ). On the other hand, variables declared with var are hoisted and initialized with undefined, so they can be accessed before their declaration without throwing an error. Understanding how hoisting and TDZ work together is important for writing clean and error-free JavaScript code.

// 7. How does hoisting impact the performance of JavaScript code, and what are some best practices for optimizing it?
// answer: Hoisting itself does not have a direct impact on the performance of JavaScript code,
// as it is a behavior that occurs during the compilation phase.
// However, relying on hoisting to access variables or functions in a way that makes the code less readable can lead to confusion and maintenance issues,
//  which can indirectly affect performance. To optimize performance, it is best practice to always declare variables and functions at the top of their scope,
// and to avoid using variables or functions before they are declared.
//  This can help improve code readability and reduce the likelihood of errors related to hoisting and TDZ, ultimately leading to better performance in the long run.

// 8. Can you explain the difference between hoisting and scoping in JavaScript?
// answer: Hoisting and scoping are two different concepts in JavaScript.
//  Hoisting refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in the code. Scoping, on the other hand,
//  refers to the accessibility of variables and functions in different parts of the code. JavaScript has function scope and block scope,
//  which determine where variables and functions can be accessed.
//  Understanding both hoisting and scoping is important for writing clean and error-free JavaScript code.

// 9. How does hoisting interact with closures in JavaScript?
// answer: Hoisting interacts with closures in JavaScript in a way that can lead to unexpected behavior if not properly understood.
// When a variable or function is hoisted, its declaration is moved to the top of its scope, but its initialization is not.
// This means that if you try to access a variable declared with let or const before it is declared,
//  you will get a ReferenceError due to the Temporal Dead Zone (TDZ). On the other hand, variables declared with var are hoisted and initialized with undefined,
//  so they can be accessed before their declaration without throwing an error.
//  When closures are involved, it is important to understand how hoisting and TDZ work together to avoid unexpected behavior and ensure that variables and
// functions are accessible when needed.

// 10. Can you explain how to handle hoisting and TDZ when working with asynchronous code in JavaScript?
// answer: When working with asynchronous code in JavaScript, it is important to be mindful of hoisting and TDZ to avoid unexpected behavior.
//  One common approach is to use function expressions or arrow functions instead of function declarations, as they are not hoisted and will throw a ReferenceError if accessed before declaration.
//  This can help ensure that variables and functions are not accessed before they are declared, which can lead to cleaner and more maintainable code.
//  Additionally, using let and const for variable declarations can help prevent issues related to hoisting and TDZ, as they are not hoisted and will throw a ReferenceError if accessed before declaration. Overall, being mindful of hoisting and TDZ when working with asynchronous code can help improve code readability and reduce the likelihood of errors.


// 11. Can you explain how to handle hoisting and TDZ when working with modules in JavaScript?
// answer: When working with modules in JavaScript, it is important to be mindful of hoisting and TDZ to avoid unexpected behavior.
//  One common approach is to use function expressions or arrow functions instead of function declarations, as they are not hoisted and will throw a ReferenceError if accessed before declaration.
//  This can help ensure that variables and functions are not accessed before they are declared, which can lead to cleaner and more maintainable code.
//  Additionally, using let and const for variable declarations can help prevent issues related to hoisting and TDZ, as they are not hoisted and will throw a ReferenceError if accessed before declaration. Overall, being mindful of hoisting and TDZ when working with modules can help improve code readability and reduce the likelihood of errors.
