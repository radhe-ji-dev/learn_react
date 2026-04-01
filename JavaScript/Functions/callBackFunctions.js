// call aback function is a special type of function that is passed as an argument to
//  another function and is executed after a certain event or condition is met. It allows you to handle asynchronous operations,
// such as fetching data from an API or responding to user interactions, without blocking the main thread of execution.



//==== simples code sample ====
// Step 1: Create a callback function
function greet(name) {
    console.log("Hello " + name);
}

// Step 2: Create a function that accepts a callback
function processUser(callback) {
    let userName = "Ravi";
    
    // calling the callback
    callback(userName);
}

// Step 3: Pass function as argument
processUser(greet);







// Example of a callback function
function fetchData(callback) {
	// Simulating an asynchronous operation (e.g., fetching data from an API)
	setTimeout(() => {
		const data = { id: 1, name: 'John Doe' };
		callback(data); // Calling the callback function with the fetched data
	}, 2000);
}

// Using the fetchData function with a callback
fetchData((data) => {
	console.log('Data fetched:', data);
});

// Another example of a callback function for handling user interactions
function handleButtonClick(callback) {
	// Simulating a button click event
	setTimeout(() => {
		const event = { type: 'click', target: 'button' };
		callback(event); // Calling the callback function with the event data
	}, 1000);
}

// Using the handleButtonClick function with a callback
handleButtonClick((event) => {
	console.log('Button clicked:', event);
});

// setTimeout and setInterval are also examples of functions that use callbacks to execute code after a specified delay or at regular intervals.
setTimeout(() => {
	console.log('This message is displayed after 3 seconds');
}, 3000);

setInterval(() => {
	console.log('This message is displayed every 2 seconds');
}, 2000);

//In summary, callback functions are essential for handling asynchronous operations and events in JavaScript, allowing you to write more efficient and responsive code.

//Interview question:
// 1. What is a callback function in JavaScript?
// 2. How do you use a callback function in JavaScript?
// 3. Can you give an example of a callback function in JavaScript?
// 4. What are some common use cases for callback functions in JavaScript?
// 5. How do you handle errors in a callback function in JavaScript?
// 6. What is the difference between a callback function and a promise in JavaScript?
// 7. How do you avoid callback hell in JavaScript?
// 8. Can you explain the concept of "callback hell" and how to avoid it in JavaScript?
// 9. What are some alternatives to callback functions in JavaScript for handling asynchronous operations?
// 10. How do you ensure that a callback function is executed after a certain event or condition is met in JavaScript?
