// functions as fisrt class citizens in JavaScript

// In JavaScript, functions are first-class objects, or first-class citizens as
// they’re often called. They  coexist  with,  and  can  be  treated  like,  any  other  JavaScript
// object.  Just  like  the  more  mundane  JavaScript  data  types,  they  can  be  referenced  by
// variables, declared with literals, and even passed as function parameters.

function add(a, b) {
	return a + b;
}

// function expression
const subtract = function (a, b) {
	return a - b;
};

// arrow function
const multiply = (a, b) => a * b;
// function with default parameters
function divide(a, b = 1) {
	return a / b;
}

// function with rest parameters

function sum(...numbers) {
	return numbers.reduce((total, num) => total + num, 0);
}

// function with callback
function greet(name, callback) {
	const greeting = `Hello, ${name}!`;
	callback(greeting);
}
