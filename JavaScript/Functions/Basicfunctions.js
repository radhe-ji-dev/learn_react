// basic function in js
// function declaration
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

// function with are and rest parameters
function calculate(operation, ...numbers) {
	return numbers.reduce((total, num) => operation(total, num), 0);
}

// function with nested functions
function outerFunction(x) {
	function innerFunction(y) {
		return x + y;
	}

	return innerFunction;
}

// example usage
console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));
console.log(divide(5)); // uses default parameter
console.log(sum(1, 2, 3, 4, 5));
greet('Alice', (message) => {
	console.log(message);
});

// //in JavaScript, functions are first-class objects, or first-class citizens as
// they’re often called. They  coexist  with,  and  can  be  treated  like,  any  other  JavaScript
// object.  Just  like  the  more  mundane  JavaScript  data  types,  they  can  be  referenced  by
// variables, declared with literals, and even passed as function parameters.

// import tant exmaple of function as an argument

function sum(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

// lets se example function as an argument to another function
function calculate(a, b, operation) {
	return operation(a, b);
}
console.log(calculate(5, 3, sum)); // Output: 8

// noe seee function as firt class citizen
// function as a return value
function createMultiplier(multiplier) {
	return function (a) {
		return a * multiplier;
	};
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10


//parameterised function

