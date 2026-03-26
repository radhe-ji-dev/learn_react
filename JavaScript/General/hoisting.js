// lets learn about hoisting in javascript
// hoisting is a behavior in javascript where variable and function declarations are moved to
// the top of their scope before code execution.
// This means that you can use a variable or a function before it is declared in the code.
// hoisting only works with variable and function declarations, not with variable and function expressions.
//it means that if you declare a variable or a function using var,
// it will be hoisted to the top of its scope and initialized with undefined.
// If you declare a variable or a function using let or const, it will be hoisted to the top of its scope but not initialized.
// This means that if you try to access a variable or a function declared with let or const before it is declared, you will get a ReferenceError.
// The temporal dead zone is the time between the start of the block and the point where the variable is declared.
// During this time, the variable is in a "dead zone" and cannot be accessed.

// example of hoisting with variable declarations
console.log(name); // Output: undefined
var name = 'John Doe'; // declaration and initialization of the variable name
console.log(name); // Output: John Doe

// example of hoisting with function declarations
greet(); // Output: Hello, World!
function greet() {
	console.log('Hello, World!');
}
// example of hoisting with variable expressions
console.log(age); // Output: ReferenceError: Cannot access 'age' before initialization
var age = 30;
console.log(age); // Output: 30
// example of hoisting with function expressions
greet3();
// Output: ReferenceError: Cannot access 'greet3' before initialization
const greet3 = function () {
	console.log('Hello, World!');
};
greet3(); // Output: Hello, World!

function testhoisting() {
	console.log(x); // Output: undefined
	console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
	let x = 10;
	var y = 20;
	console.log(x); // Output: 10
	console.log(y); // Output: 20
}

// important

// take explae of functions

function outerFunction() {
	var a = 6;
	function innerFunction() {
		console.log(a); // output undefined
		var a = 10;
	}
	innerFunction();
	console.log(a); // Output: 6
}

function outer() {
	var a = 6;
	function inner() {
		console.log(a);
		var a = 10;
		console.log(a);
	}
	console.log(a); // Output: 6
	inner();
}
// Only declarations are hoisted, not initializations or values.

console.log(a);
var a = 20;
console.log(a);

// will go as in GEC
// var a;

// console.log(a);

// a = 20;

// console.log(a);

console.log(outer()); // Output: undefined 10

// Interview Questions
// 1. What is hoisting in java script?
// answer: Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope
// before code execution. This means that you can use a variable or a function before it is declared in the code.
// Hoisting only works with variable and function declarations, not with variable and function expressions.

// 2. What is the difference between variable declarations and variable expressions in java script?
// answer: Variable declarations are hoisted to the top of their scope and initialized with undefined,
//CODE for example, if you declare a variable using var, it will be hoisted to the top of its scope and initialized with undefined.
// If you declare a variable using let or const, it will be hoisted to the top of its scope but not initialized.
// This means that if you try to access a variable declared with let or const before it is declared, you will get a ReferenceError.
// while variable expressions are not hoisted and will throw a ReferenceError if accessed before declaration.
// example of variable declaration
console.log(a); // Output: undefined
var a = 10;
// example of variable expression
console.log(b); // Output: ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20

// 3. What is the difference between function declarations and function expressions in java script?
// answer: Function declarations are hoisted to the top of their scope and can be called before they are declared in the code.
// example of function declaration
greet(); // Output: Hello, World!
function greet() {
	console.log('Hello, World!');
}

// while function expressions are not hoisted and will throw a ReferenceError if accessed before declaration.
greet2();
// Output: ReferenceError: Cannot access 'greet2' before initialization
const greet3 = function () {
	console.log('Hello, World!');
};
greet2(); // Output: Hello, World!

// 4. Does hoisting work with let and const in java script?
// 5. Does hoisting work with arrow functions in java script?
// 6. What is the temporal dead zone in java script?
// 7. Can we use a variable or a function before it is declared in the code in java script?
// 8. What is the output of the following code in java script?
// console.log(name);
// var name = 'John Doe';
// 9. What is the output of the following code in java script?
// console.log(age);
// let age = 30;
// 10. What is the output of the following code in java script?
// greet();
// function greet() {
//     console.log('Hello, World!');
// }
// 11. What is the output of the following code in java script?
// greet3();
// const greet3 = function() {
//     console.log('Hello, World!');
// }
