// immediaty invocekd function expression
(function () {
	console.log('I am an IIFE');
})();
// IIFE is a function that is executed immediately after it is defined.
// It is a common pattern in JavaScript to create a new scope and avoid polluting the global namespace.
// IIFE can also be used to create private variables and functions that cannot be accessed from outside the function.
// This is useful for data encapsulation and creating modules in JavaScript.
// IIFE can also be used to create a new scope for variables and functions, which can help to avoid naming conflicts and improve code organization.

//Example of IIFE
(function (name) {
	console.log('Hello ' + name);
})('John');
// In this example, the IIFE takes a parameter name and logs a greeting message to the console.
// The IIFE is immediately invoked with the argument "John", resulting in the output "Hello John".

//InterviewQ:
// 1. What is an IIFE in JavaScript?
// 2. How does an IIFE work in JavaScript?
// 3. Can you give an example of an IIFE in JavaScript?
// 4. What are some common use cases for IIFEs in JavaScript?
// 5. How do IIFEs help with data encapsulation in JavaScript?
// 6. Can you explain the concept of lexical scoping in relation to IIFEs?
// 7. How do IIFEs affect memory management in JavaScript?
// 8. Can you create an IIFE that maintains state across multiple function calls?
// 9. What are some potential pitfalls of using IIFEs in JavaScript?
// 10. How do IIFEs interact with asynchronous code in JavaScript?
