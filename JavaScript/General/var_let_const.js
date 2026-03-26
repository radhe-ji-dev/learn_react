// var let and const are used to declare variables in java script
// var is the old way of declaring variables in java script
var name = 'John Doe';
console.log(name); // Output: John Doe
// let is the new way of declaring variables in java script
let age = 30;
console.log(age);
// const is used to declare constants in java script
const pi = 3.14;
console.log(pi);

// differences between var, let and const
// 1. var is function scoped while let and const are block scoped
function varTest() {
	var x = 1;
	if (true) {
		var x = 2; // same variable
		console.log(x); // Output: 2
	}
	console.log(x); // Output: 2
}
function letTest() {
	let y = 1;
	if (true) {
		let y = 2; // different variable
		console.log(y); // Output: 2
	}
	console.log(y); // Output: 1
}
varTest();
letTest();

// Interview Questions
// 1. What is the difference between var, let and const in java script?
// 2. What is the scope of var, let and const in java script?
// 3. Can we reassign a variable declared with var, let and const in java script?
// 4. Can we redeclare a variable declared with var, let and const in java script?
// 5. What is the temporal dead zone in java script?
// 6. What is hoisting in java script?
// 7. What is the difference between function scope and block scope in java script?
// 8. What is the difference between var and let in java script?
// 9. What is the difference between let and const in java script?
// 10. What is the difference between var and const in java script?
