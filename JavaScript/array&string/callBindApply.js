// Basic call() Usage
// Using call() to invoke a function with a specific this value
function greet() {
	console.log(`Hello, my name is ${this.name}`);
}
const person = { name: 'Alice' };
greet.call(person);
// Output: Hello, my name is Alice
// how it works:
// The call() method allows you to call a function with a specified this value and arguments provided individually.
//  In this example, we use call() to set the this value to the person object, allowing us to access the name property within the greet function.

// Basic apply() Usage
// Using apply() to invoke a function with a specific this value and arguments as an array

function introduce(greeting, punctuation) {
	console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}
const person2 = { name: 'Bob' };
introduce.apply(person2, ['Hi', '!']);

//lets lern about apply() method in JavaScript with an example:
// Output: Hi, my name is Bob!
// how it works:
// The apply() method is similar to call(),
//  but it takes the arguments as an array instead of individually.
// In this example, we use apply() to set the this value to the person2 object and pass the greeting and punctuation as an array.

// Basic bind() Usage
// Using bind() to create a new function with a specific this value
function sayHello() {
	console.log(`Hello, my name is ${this.name}`);
}
const person3 = { name: 'Charlie' };
const sayHelloCharlie = sayHello.bind(person3);
sayHelloCharlie();
// Output: Hello, my name is Charlie
// how it works:
// The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// In this example, we use bind() to create a new function sayHelloCharlie that has its this value set to the person3 object.
//  When we call sayHelloCharlie(), it accesses the name property of person3 and logs the greeting.

// Borrow Function with call()

function displayInfo() {
	console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person4 = { name: 'David', age: 30 };
displayInfo.call(person4);
// Output: Name: David, Age: 30

// Borrow Array Method
const arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const result = Array.prototype.join.call(arrayLikeObject, '-');
console.log(result);
// Output: a-b-c

// Find Max Using apply()
const numbers = [5, 10, 15, 20];
const max = Math.max.apply(null, numbers);
console.log(max);
// Output: 20

// Delayed Execution with bind()

function delayedGreeting() {
	console.log(`Hello, my name is ${this.name}`);
}
const person5 = { name: 'Eve' };
const delayedGreet = delayedGreeting.bind(person5);
setTimeout(delayedGreet, 1000);
// Output (after 1 second): Hello, my name is Eve

// Partial Function with bind()
function multiply(a, b) {
	return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5)); // Output: 10

// Student Marks Calculator

let student = {
	name: 'John',
	marks: [85, 90, 78],
	calculateAverage: function () {
		const total = this.marks.reduce((acc, mark) => acc + mark, 0);
		return total / this.marks.length;
	},
};
console.log(`${student.name}'s average marks: ${student.calculateAverage()}`);

// e com discount calculator

function calculateDiscountedPrice(price, discount) {
	return price - (price * discount) / 100;
}
const discountedPrice = calculateDiscountedPrice.call(null, 100, 20);
console.log(`Discounted Price: $${discountedPrice}`);
// Output: Discounted Price: $80

// Array-like Object to Array Conversion
function convertToArray() {
	return Array.prototype.slice.call(arguments);
}
const arrayFromArgs = convertToArray(1, 2, 3, 4);
console.log(arrayFromArgs);
// Output: [1, 2, 3, 4]
