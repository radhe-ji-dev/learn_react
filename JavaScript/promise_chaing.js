// lets have example of promise chaining

// promise chaining is a technique where you can chain multiple
// .then() methods together to handle a sequence of asynchronous operations. Each .then() method returns a new Promise,
//  allowing you to perform additional operations on the result of the previous Promise.

// Example of Promise chaining
function fetchData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Data fetched');
		}, 1000);
	});
}

function processData(data) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`${data} processed`);
		}, 1000);
	});
}

function displayData(data) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`${data} displayed`);
		}, 1000);
	});

	// Chaining the Promises
	fetchData()
		.then((data) => {
			// data is "Data fetched"

			return processData(data); // returns a new Promise
		})
		.then((processedData) => {
			// processedData is "Data fetched processed"
			return displayData(processedData); // returns a new Promise
		})
		.then((displayedData) => {
			// displayedData is "Data fetched processed displayed"
			console.log(displayedData);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

fetchData()
	.then((data) => {
		return processData(data);
	})
	.then((processedData) => {
		return displayData(processedData);
	})
	.then((displayedData) => {
		console.log(displayedData);
	})
	.catch((error) => {
		console.error('Error:', error);
	});

// interview question:
// 1. What is Promise chaining and how does it work in JavaScript?
// 2. Can you provide an example of Promise chaining in JavaScript?
// 3. How do you handle errors in a Promise chain?
// 4. What are the benefits of using Promise chaining over nested callbacks?
// 5. Can you explain the concept of "returning a Promise" in the context of Promise chaining?
// 6. How does the order of .then() methods affect the execution of a Promise chain?
// 7. Can you explain the difference between .then() and .catch() in a Promise chain?
// 8. How do you handle multiple asynchronous operations that depend on each other using Promise chaining?
// 9. Can you explain the concept of "Promise.all" and how it can be used in conjunction with Promise chaining?
// 10. What are some common pitfalls to avoid when working with Promise chaining in JavaScript?
