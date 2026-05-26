//closures in js
// simple closure can be defined as a function that has access to its own scope
// the scope of the outer function, and the global scope.
// closures are created when a function is defined inside another
// function and the inner function references variables from the outer function.

function outerFunction() {
	let count = 0; // This variable is enclosed by the inner function
	function innerFunction() {
		count++;
		console.log(count);
	}
	return innerFunction; // Return the inner function to create a closure
}

// 🔹 What’s happening here?

// outer() runs → creates variable count

// inner() is returned

// Normally, outer() should be removed from memory after execution
// ❗ BUT because inner() still uses count, JavaScript keeps it alive

// 👉 This “keeping alive” of variables is called a closure

const myClosure = outerFunction(); // myClosure now has access to the count variable
myClosure(); // Output: 1
myClosure(); // Output: 2
myClosure(); // Output: 3

function createBankAccount() {
	let balance = 0;

	return {
		deposit(amount) {
			balance += amount;
		},
		getBalance() {
			// method
			return balance;
		},
	};
}

const account = createBankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100

// 🔹 Function vs Method
// Type	Definition
// Function	Independent (not inside object)
// Method	Function inside an object

// 🔹 Proper Definition (Interview Level)

// A closure is a function bundled together with its lexical environment,
// allowing it to access variables from its outer scope even after the outer function has returned.

// 🔹 Key Points

// Closure = function + its remembered scope

// Created automatically in JavaScript (you don’t manually create it)

// Works because of lexical scoping

// Useful for:

// Data hiding (private variables)

// Function factories

// Callbacks & async code

// clouse is used to maintain state in a function, it
// allows us to create private variables and functions that can only be accessed by the inner function.
// This is useful for data encapsulation and creating modules in JavaScript.
// this make a powerfull tool for creating reusable code and managing state in a clean way.

//Interesting example of closure
function createCounter() {
	let count = 0; // This variable is enclosed by the inner function
	return {
		increment: function () {
			count++;
			console.log(count);
		},
	};
}
const counter = createCounter();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.increment(); // Output: 3

// In this example, the createCounter function returns an object with an increment method that has access to the count variable.
// Each time we call counter.increment(), it increments the count and logs the current value.
// The count variable is private and cannot be accessed directly from outside the createCounter function, demonstrating how closures can be used to encapsulate state.

//encapsulations with closures
// Encapsulation is a fundamental principle of object-oriented programming that involves bundling data and methods that operate on that data within a single unit,
// such as an object. In JavaScript,
//  closures can be used to achieve encapsulation by creating private variables and functions that are not accessible from outside the enclosing function.
function createPerson(name, age) {
	let _name = name;
	let _age = age;

	return {
		getName() {
			return _name;
		},
		getAge() {
			return _age;
		},
	};
}
const person = createPerson('Alice', 30);
console.log(person.getName());
console.log(person.getAge());

// In this example, the createPerson function creates private variables _name and _age that are not accessible from outside the function.
// The returned object has methods getName and getAge that can access these private variables, allowing us to retrieve the person's name and age without directly exposing the variables themselves.
// This demonstrates how closures can be used to achieve encapsulation in JavaScript.

//leaking closures
// A closure is said to "leak" when it unintentionally retains references to variables that are no longer needed, which can lead to memory leaks.
// This can happen when a closure holds onto large objects or data structures that are not properly cleaned up, preventing them from being garbage collected.
function createLeakingClosure() {
	let largeData = new Array(1000000).fill('leaking data'); // This creates a large array that will be retained in memory
	return function () {
		console.log(largeData[0]); // The closure retains a reference to largeData, preventing it from being garbage collected
	};
}
const leakingClosure = createLeakingClosure();
leakingClosure(); // Output: "leaking data"
// In this example, the createLeakingClosure function creates a large array called largeData and returns a closure that references it.
// Since the closure retains a reference to largeData, it prevents the array from being garbage collected, even if we no longer need it.
// This can lead to memory leaks if the closure is kept around for a long time or if multiple closures are created that reference large data structures.
// To avoid this, it's important to be mindful of what variables are being captured by closures and to clean up any references that are no longer needed.

// variable shadowing in closures
// Variable shadowing occurs when a variable declared within a certain scope (e.g., a function) has the same name as a variable declared in an outer scope.
// In the context of closures, this can lead to confusion because the inner function may reference the outer variable instead of its own variable, or vice versa.
function createShadowingClosure() {
	let value = 'outer value'; // This variable is in the outer scope
	return function () {
		let value = 'inner value'; // This variable shadows the outer variable
		console.log(value); // This will log 'inner value' because it references the inner variable
	};
}
const shadowingClosure = createShadowingClosure();
shadowingClosure(); // Output: "inner value"

//InterviewQ:
// 1. What is a closure in JavaScript?
// 2. How do closures work in JavaScript?
// 3. Can you give an example of a closure in JavaScript?
// 4. What are some common use cases for closures in JavaScript?
// 5. How do closures help with data encapsulation in JavaScript?
// 6. Can you explain the concept of lexical scoping in relation to closures?
// 7. How do closures affect memory management in JavaScript?
// 8. Can you create a closure that maintains state across multiple function calls?
// 9. What are some potential pitfalls of using closures in JavaScript?
// 10. How do closures interact with asynchronous code in JavaScript?
