//higher order function is a function that takes another function as an argument or returns a function as a result

//example of higher order function that takes another function as an argument

function higherOrderFunction(func) {
	console.log('This is a higher order function');
	func();
}

function sayHello() {
	console.log('Hello!');
}

higherOrderFunction(sayHello);

//example of higher order function that returns a function as a result
function createMultiplier(multiplier) {
	return function (num) {
		return num * multiplier;
	};
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

// Interview question:
// 1. What is the difference between a pure function and an impure function?
// 2. Can you give an example of a higher order function in JavaScript?
// 3. How do you create a higher order function that takes another function as an argument?
// 4. How do you create a higher order function that returns a function as a result?
// 5. What are some common use cases for higher order functions in JavaScript?
// 6. How do you handle errors in higher order functions?
// 7. Can you explain the concept of closures in relation to higher order functions?
// 8. How do you optimize performance when using higher order functions in JavaScript?
// 9. Can you give an example of a real-world application of higher order functions in JavaScript?
// 10. How do you test higher order functions in JavaScript?
