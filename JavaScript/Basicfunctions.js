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
