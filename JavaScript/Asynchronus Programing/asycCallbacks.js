// lets se async using callbacks in js
function fetchData(callback) {
	setTimeout(() => {
		const data = 'Hello, World!';
		callback(data);
	}, 2000);
}

console.log('Fetching data...');
fetchData((data) => {
	console.log('Data received: ' + data);
});

// In this example, the fetchData function simulates an asynchronous operation using setTimeout.
// It takes a callback function as an argument, which is called with the fetched data after a delay of 2 seconds.
// The main thread continues to execute while waiting for the data, allowing the application to remain responsive.

// what actuall async means in js?
// Async in JavaScript refers to the ability of the language to handle operations that may take some time to
// complete without blocking the main thread. This is achieved through mechanisms like callbacks, promises, and async/await.
//  When an asynchronous operation is initiated, JavaScript can continue executing other code while waiting for the operation to complete,
// allowing for a more responsive user experience. Asynchronous programming is essential for tasks such as fetching data from a server, reading files,
//  or performing any I/O operations that may take time.

// Interview question:
// 1. What is asynchronous programming in JavaScript and why is it important?
// 2. Can you explain how callbacks work in JavaScript and provide an example of their usage?
// 3. What are some common issues or pitfalls associated with using callbacks in JavaScript, and how can they be mitigated?
// 4. How do promises differ from callbacks in JavaScript, and what advantages do they offer?
// 5. Can you explain the concept of "callback hell" and how it can be avoided in JavaScript?
// 6. How does async/await syntax improve the readability and maintainability of asynchronous code in JavaScript?
// 7. Can you provide an example of how to convert a callback-based function to use promises or async/await in JavaScript?
// 8. What are some best practices for error handling in asynchronous JavaScript code, especially when using callbacks?
// 9. How does the event loop in JavaScript interact with asynchronous operations, and how does it ensure that the main thread remains responsive?
// 10. Can you discuss the differences between microtasks and macrotasks in the context of asynchronous programming in JavaScript, and how they affect the execution order of code?
