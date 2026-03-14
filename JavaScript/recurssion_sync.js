// use recursion for sync code in js
function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
// In this example, the factorial function is defined recursively.
// It calls itself with a decremented value of n until it reaches the base case (n === 0).
// This is a synchronous operation, as each call to the function waits for the previous call to complete before proceeding.
// The main thread is blocked until the entire calculation is finished, which is typical for synchronous code.

// //asynchronous callbacks, recursion can be effectively utilized
// to maintain the flow without blocking the event loop. This
// approach allows iterations to occur across multiple turns of
// the event loop without risking stack overflow errors, which can happen with deep
// recursion in synchronous code. By using asynchronous callbacks, we can ensure that each recursive
// call is scheduled to run after the current call stack is cleared, allowing for more efficient memory
//  usage and preventing potential crashes due to exceeding the call stack limit.

// lets see an example of asynchronous recursion using setTimeout
function asyncFactorial(n, callback) {
	if (n === 0) {
		callback(1);
		return;
	}
	asyncFactorial(n - 1, (result) => {
		callback(n * result);
	});
}

console.log('Calculating factorial asynchronously...');
asyncFactorial(5, (result) => {
	console.log('Factorial result: ' + result); // Output: Factorial result: 120
});

// In this example, the asyncFactorial function is defined recursively, but it uses a callback to handle the result of each recursive call.
// Each call to asyncFactorial schedules the next call to run after the current call stack is cleared, allowing for asynchronous execution.
// This approach prevents blocking the main thread and allows for efficient memory usage, even with deep recursion.
