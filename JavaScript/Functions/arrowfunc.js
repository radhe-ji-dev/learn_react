// lets do arrow functions in js
// Arrow functions provide a concise syntax for writing functions in JavaScript.
// They are often used for shorter functions and can help improve readability,
// especially when working with higher-order functions like map, filter, and reduce.

// Traditional function expression
const add = function (a, b) {
	return a + b;
};

// Arrow function equivalent
const subtract = (a, b) => a - b;

// Arrow functions can also be used without parameters
const greet = () => 'Hello, World!';
// Arrow functions with a single parameter can omit parentheses
const square = (x) => x * x;
// Arrow functions do not have their own 'this' context, which can be beneficial in certain scenarios,
// such as when working with methods in classes or when using callbacks.

// Example of using arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// In this example, we defined several functions using both traditional function expressions and arrow functions.
// The arrow functions provide a more concise syntax, especially for simple operations.
// Additionally, we used an arrow function with the map method to double each number in the array,
//  demonstrating how arrow functions can enhance readability and reduce boilerplate code.
