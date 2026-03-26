/* 
====================================================================
ALL TYPES OF FUNCTIONS IN JAVASCRIPT - COMPLETE TUTORIAL
====================================================================

JavaScript functions are FIRST-CLASS: treated as values (assign, pass, return).
Hoisted differently by type. Core to callbacks, OOP, async, higher-order patterns.

Run examples in console/Node!

SECTION 1: FUNCTION DECLARATION (HOISTED)
*/
// ✅ Can call BEFORE definition (hoisted)
sayHello();

function sayHello() {
	console.log('Declaration: Hoisted & callable anywhere!');
}
sayHello(); // Works!

/*
Features:
- Hoisted: function declaration moved to top.
- Block-scoped? No, function-scoped.
Pitfall: Name collisions in same scope.
*/

// SECTION 2: FUNCTION EXPRESSION (NOT HOISTED)
// ❌ Cannot call before assignment
// greet(); // ReferenceError!

const greet = function (name) {
	// Anonymous
	console.log(`Expression: Hello ${name}`);
};
greet('Alice'); // Expression: Hello Alice

// Named for better stack traces
const namedExpr = function log(name) {
	console.log(`Named: ${name}`);
};
namedExpr('Bob');

/*
Use: Assign to vars, pass as args, return from functions.
*/

// SECTION 3: ARROW FUNCTIONS (ES6) - Concise, LEXICAL 'this'
// Shorter syntax
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Block body
const multiply = (a, b) => {
	return a * b;
};

// 'this' is lexical (from enclosing scope)
const obj = {
	name: 'ArrowObj',
	regular: function () {
		console.log(this.name);
	},
	arrow: () => console.log(this.name), // 'this' = global/window!
};
obj.regular(); // ArrowObj
obj.arrow(); // undefined (lexical)

// NO 'new' (not constructors, no own 'this'/args/super)

/*
Perfect for: Callbacks, short funcs, preserving 'this'.
Pitfall: Can't use as methods (this issue), no arguments obj.
*/

// SECTION 4: CONSTRUCTOR FUNCTIONS ('new')
// See newKeyword.js for details
function Person(name) {
	this.name = name;
}
const p1 = new Person('Constructor');
console.log(p1.name); // Constructor

// Prototype methods
Person.prototype.walk = function () {
	console.log(`${this.name} walks`);
};
p1.walk();

/*
For OOP instances pre-class.
*/

// SECTION 5: IIFE (Immediately Invoked Function Expression)
const result = (function () {
	// Self-executing
	const secret = 'IIFE private';
	return secret.toUpperCase();
})();
console.log(result); // IIFE PRIVATE

/*
Use: Init modules, avoid globals, one-time setup.
Pattern: (function(){})(); or !function(){}();
*/

// SECTION 6: CALLBACK FUNCTIONS
// Passed as arg, called later
function fetchData(callback) {
	setTimeout(() => callback('Data loaded!'), 1000);
}
fetchData((msg) => console.log(msg)); // Data loaded!

// Sync example
[1, 2, 3].forEach((n) => console.log(n * 2)); // 2 4 6

/*
Async glue: Events, timers, array methods.
*/

// SECTION 7: HIGHER-ORDER FUNCTIONS (HOF)
// Accept funcs as args OR return funcs
function withLog(fn) {
	return function (...args) {
		console.log('Calling:', fn.name);
		return fn(...args);
	};
}
const loggedAdd = withLog(add);
loggedAdd(4, 5); // Calling: add \n 9

// Array HOF: map/filter/reduce
const doubled = [1, 2, 3].map((n) => n * 2); // [2,4,6]
console.log(doubled);

/*
Powerful: map, filter, reduce, curry, compose.
*/

// SECTION 8: CLOSURE FUNCTIONS (Lexical scoping)
function outer(x) {
	return function inner(y) {
		return x + y; // 'Remembers' outer x
	};
}
const addFive = outer(5);
console.log(addFive(3)); // 8 (x=5 persists)

/*
Private vars, modules, memoization.
See closures.js for more.
*/

// SECTION 9: GENERATOR FUNCTIONS (ES6) - Yield values
function* idGenerator() {
	let id = 0;
	while (true) {
		yield id++;
	}
}
const gen = idGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1

/*
Lazy iteration: Infinite sequences, stateful iterators.
Use with for...of.
*/

// SECTION 10: ASYNC FUNCTIONS (ES8)
async function fetchUser() {
	try {
		const response = await fetch('https://api.github.com/users/octocat');
		const user = await response.json();
		console.log(user.login); // octocat
	} catch (err) {
		console.error('Error:', err);
	}
}
// fetchUser(); // Uncomment if API available

/*
Async/await sugar over Promises.
Always returns Promise.
*/

// SECTION 11: RECURSIVE FUNCTIONS
function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

/*
Self-calls. Watch stack overflow!
Tail recursion optimization rare in JS.
*/

// SECTION 12: METHOD FUNCTIONS (Object methods)
const calculator = {
	value: 0,
	add(n) {
		this.value += n;
	}, // Concise method
	getValue() {
		return this.value;
	},
};
calculator.add(10);
console.log(calculator.getValue()); // 10

// 'this' = caller object

/*
ES6 concise syntax.
*/

// SECTION 13: Pitfalls & Best Practices
// 1. Hoisting confusion: Declare first
// 2. 'this' varies: Arrow lexical, regular dynamic
// 3. Arguments obj: Only regular funcs
function regular() {
	console.log(arguments);
} // Arguments obj
regular(1, 2, 3);
// arrow: no arguments

// Practices:
// - Arrow for non-methods
// - Name functions for debugging
// - Default params: function(x=1){}
// - Rest: (...args) =>

// SECTION 14: EXERCISES
/*
1. HOF: Create 'retry' fn that retries async fn 3x.
2. Closure counter with private increment.
3. Generator for Fibonacci sequence.
4. Curry add(1)(2)(3) === 6
5. Convert callback hell to async/await.
*/

console.log(
	'All types demo complete! Check Functions/ subfiles for deep dives.',
);
