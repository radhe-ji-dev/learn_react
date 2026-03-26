// //JavaScript utilizes non-blocking APIs for I/O operations,
// allowing the program to continue processing other events
// while waiting for results. Developers should avoid blocking
// operations, especially in event-driven environments, as they
// prevent other inputs from being processed, leading to
// unresponsive applications. Asynchronous designs using
// callbacks are preferred, allowing the app to remain
// //responsive while waiting for operations to complete.

// event loop in js
// the event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible. The event loop continuously checks the call stack and the task queue. If the call stack is empty, it takes the first task from the task queue and pushes it onto the call stack, which effectively runs it. This allows JavaScript to handle multiple tasks concurrently without blocking the main thread, making it efficient for handling events and asynchronous operations.

// example of event loop in js
console.log('Start');

setTimeout(() => {
	console.log('Timeout');
}, 0);

console.log('End');

// In this example, the output will be:
// Start
// End
// Timeout

// This is because the setTimeout callback is added to the task queue and will only be executed after the current call stack is empty, which happens after 'End' is logged.

// Another example of event loop in js
console.log('Start');

setTimeout(() => {
	console.log('Timeout 1');
}, 0);

setTimeout(() => {
	console.log('Timeout 2');
}, 0);

console.log('End');

// In this example, the output will be:
// Start
// End
// Timeout 1
// Timeout 2

// Interview question:
// 1. What is the event loop in JavaScript and how does it work?
// 2. How does JavaScript handle asynchronous operations and what role does the event loop play in this process?
// 3. Can you explain the difference between the call stack and the task queue in the context of the event loop?
// 4. How does the event loop ensure that JavaScript remains responsive while handling multiple tasks concurrently?
// 5. Can you provide an example of how the event loop works with setTimeout or other asynchronous functions in JavaScript?
// 6. What are some common pitfalls or challenges developers might face when working with the event loop in JavaScript, and how can they be mitigated?
// 7. How does the event loop interact with promises and async/await in JavaScript?
// 8. Can you explain the concept of "event loop starvation" and how it can affect the performance of a JavaScript application?
// 9. How does the event loop handle errors in asynchronous code, and what are some best practices for error handling in this context?
// 10. Can you discuss the differences between microtasks and macrotasks in the event loop, and how they are prioritized during execution?
