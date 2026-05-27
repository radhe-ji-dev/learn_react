// Create Basic Promise

//lets have a look at the basic syntax of creating a promise in JavaScript
//very simple, we use the Promise constructor which takes a function as an argument.
//within that function, we have two parameters: resolve and reject.
//these are functions that we can call to either resolve the promise with a value or reject it with an error.
//the code inside the setTimeout simulates an asynchronous operation, and after 2 seconds,
// it will either resolve or reject the promise based on the value of success.
//not timeout

let testt = false;
const testp = new Promise((resolve, reject) => {
	if ((testt = true)) resolve('This promise is resolved successfully!');
	else reject('This promise is rejected with an error.');
});

console.log(testp); // This will log the promise object, which is in a pending state

//this is a simulation of an asynchronous operation using setTimeout,
// which will resolve the promise after 2 seconds.
// You can change the value of success to true or false to see how the promise behaves in both cases.
const myPromise = new Promise((resolve, reject) => {
	// Simulate an asynchronous operation
	setTimeout(() => {
		const success = true;
		if (success) {
			resolve('Promise resolved successfully!');
		} else {
			reject('Promise rejected with an error.');
		}
	}, 2000); // Simulate a delay of 2 seconds
});

// Consume Promise Using then

myPromise
	.then((message) => {
		console.log(message); // This will log 'Promise resolved successfully!' after 2 seconds
	})
	.catch((error) => {
		console.error(error); // This will log 'Promise rejected with an error.' if success is false
	});

// Consume Promise Using catch

myPromise.catch((error) => {
	console.error(error); // This will log 'Promise rejected with an error.' if success is false
});

// Use finally Method
myPromise
	.then((message) => {
		console.log(message); // This will log 'Promise resolved successfully!' after 2 seconds
	})
	.catch((error) => {
		console.error(error); // This will log 'Promise rejected with an error.' if success is false
	})
	.finally(() => {
		console.log(
			'This will always be executed regardless of the promise outcome.',
		); // This will log after the promise is settled (either resolved or rejected)
	});

// Create Delayed Promise

// myPromise = new Promise((resolve) => {
// 	setTimeout(() => {
// 		resolve('This promise is resolved after a delay!');
// 	}, 3000); // Resolve after 3 seconds
// });

// Convert Callback to Promise

const delayedMessage = (message, delay) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(message);
		}, delay);
	});
};

// Basic Async Function

let asyncFunction = async () => {
	return 'This is an async function!';
};

console.log(asyncFunction);

// Use await Keyword

asyncFunction = async () => {
	const message = await delayedMessage('Hello, World!', 2000);
	console.log(message); // This will log 'Hello, World!' after 2 seconds
};

// lets dicsuss about structure of async function, it is a function that is declared with the async keyword,
// and it allows us to use the await keyword inside it to wait for promises to resolve before proceeding with
// the execution of the code. This makes it easier to write asynchronous code that looks and behaves more like synchronous code,
//  improving readability and maintainability.
// now structure of async function is as follows:

// async function functionName() {
//     // code to be executed
// awit keyword can only be used inside an async function,
//  and it allows us to pause the execution of the function until the promise is resolved, making it easier to work with asynchronous operations without needing to chain .then() calls.
// }
// or we can also write it as an arrow function:
// const functionName = async () => {
//     // code to be executed
// }
//use async with await to handle promises in a more readable way, allowing us to write asynchronous code that looks synchronous,
//  improving code clarity and maintainability.

let asyncFunctionWithAwait = async () => {
	try {
		const message = await delayedMessage('Hello, Async/Await!', 2000);
		console.log(message); // This will log 'Hello, Async/Await!' after 2 seconds
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the asynchronous operation
	}
};

console.log(asyncFunctionWithAwait); // This will log the async function itself, which is a Promise that will resolve when the function completes its execution.

// Handle Errors with try-catch

let asyncFunctionWithErrorHandling = async () => {
	try {
		const message = await delayedMessage(
			'Hello, Async/Await with Error Handling!',
			2000,
		);
		console.log(message); // This will log 'Hello, Async/Await with Error Handling!' after 2 seconds
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the asynchronous operation
	}
};
console.log(asyncFunctionWithErrorHandling); // This will log the async function itself, which is a Promise that will resolve when the function completes its execution.

// Fetch Fake API Data

let fetchData = async () => {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/posts/1',
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		console.log(data); // This will log the fetched data from the API
	} catch (error) {
		console.error('Fetch error:', error); // This will log any errors that occur during the fetch operation
	}
};

fetchData(); // Call the function to fetch data from the API

// Handle API Errors

let fetchDataWithErrorHandling = async () => {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/invalid-endpoint',
		);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		console.log(data); // This will log the fetched data from the API if the endpoint is valid
	} catch (error) {
		console.error('Fetch error:', error); // This will log any errors that occur during the fetch operation, such as a network error or an invalid endpoint
	}
};

fetchDataWithErrorHandling(); // Call the function to fetch data from the API with error handling

// Chain Multiple Promises
//promise chaining is a technique in JavaScript that allows you to perform a sequence of asynchronous operations in a more readable and maintainable way.
//  Instead of nesting callbacks, you can chain promises together using the .then() method, which helps to avoid callback hell and makes the code easier to understand.

let promiseChain = new Promise((resolve) => {
	resolve(1); // Start with the initial value of 1
})
	.then((value) => {
		console.log(value);
		return value * 2; // Multiply the value by 2 and pass it to the next .then()
	})
	.then((value) => {
		console.log(value);
		return value * 3; // Multiply the value by 3 and pass it to the next .then()
	})
	.then((value) => {
		console.log(value); // This will log the final result of the chained operations
	})
	.catch((error) => {
		console.error('Error:', error); // This will catch any errors that occur in the promise chain
	});

// Parallel API Calls

let parallelAPICalls = async () => {
	try {
		const [response1, response2] = await Promise.all([
			fetch('https://jsonplaceholder.typicode.com/posts/1'),
			fetch('https://jsonplaceholder.typicode.com/posts/2'),
		]);
		if (!response1.ok || !response2.ok) {
			throw new Error('Network response was not ok');
		}
		const data1 = await response1.json();
		const data2 = await response2.json();
		console.log('Data from API 1:', data1);
		console.log('Data from API 2:', data2);
	} catch (error) {
		console.error('Fetch error:', error); // This will log any errors that occur during the fetch operations
	}
};

parallelAPICalls(); // Call the function to perform parallel API calls

// Promise.all Practice

let promiseAllPractice = async () => {
	try {
		const results = await Promise.all([
			delayedMessage('First message', 1000),
			delayedMessage('Second message', 2000),
			delayedMessage('Third message', 3000),
		]);
		console.log('All messages:', results); // This will log all messages once they are all resolved
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the promise operations
	}
};

promiseAllPractice(); // Call the function to practice using Promise.all

// Promise.race Practice

let promiseRacePractice = async () => {
	try {
		const result = await Promise.race([
			delayedMessage('First message', 1000),
			delayedMessage('Second message', 2000),
			delayedMessage('Third message', 3000),
		]);
		console.log('First resolved message:', result); // This will log the first message that resolves
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the promise operations
	}
};

promiseRacePractice(); // Call the function to practice

// Promise.any Practice

let promiseAnyPractice = async () => {
	try {
		const result = await Promise.any([
			Promise.reject('First promise rejected'),
			delayedMessage('Second message', 2000),
			Promise.reject('Third promise rejected'),
		]);
		console.log('First resolved message:', result); // This will log the first message that resolves, which is 'Second message' after 2 seconds
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the promise operations, but in this case, it will not log an error because one of the promises resolves successfully
	}
};

promiseAnyPractice(); // Call the function to practice using Promise.any

// Promise.allSettled Practice

let promiseAllSettledPractice = async () => {
	const results = await Promise.allSettled([
		Promise.resolve('First promise resolved'),
		Promise.reject('Second promise rejected'),
		Promise.resolve('Third promise resolved'),
	]);
	console.log('All Settled Results:', results); // This will log the results of all promises,
	// including their status and value or reason for rejection in form of array of objects
};

promiseAllSettledPractice(); // Call the function to practice using Promise.allSettled

// Create Loading Simulation

// Retry Failed Promise

let retryFailedPromise = async (retries) => {
	try {
		const result = await new Promise((resolve, reject) => {
			const success = Math.random() > 0.5;
			setTimeout(() => {
				if (success) {
					resolve('Promise resolved successfully!');
				} else {
					reject('Promise rejected with an error.');
				}
			}, 1000);
		});
		console.log(result); // This will log 'Promise resolved successfully!' if the promise resolves
	} catch (error) {
		console.error('Error:', error); // This will log 'Promise rejected with an error.' if the promise rejects
		if (retries > 0) {
			console.log(`Retrying... (${retries} retries left)`);
			await retryFailedPromise(retries - 1); // Retry the promise with one less retry count
		} else {
			console.log('No more retries left.');
		}
	}
};

// Debounce API Calls

let debounceTimeout;
const debounceAPICall = (callback, delay) => {
	clearTimeout(debounceTimeout);
	debounceTimeout = setTimeout(() => {
		callback();
	}, delay);
};

// Example usage:
// debounceAPICall(() => {
//     console.log('API call made!');
// }, 3000); // This will log 'API call made!' after 3 seconds,
//  but if debounceAPICall is called again within those 3 seconds, the timer will reset and the API call will be delayed until there are no calls for 3 seconds.

// Throttle Function Calls

let lastCallTime = 0;
const throttleFunctionCall = (callback, delay) => {
	const now = Date.now();
	if (now - lastCallTime >= delay) {
		callback();
		lastCallTime = now;
	}
};

// Example usage:
// throttleFunctionCall(() => {
//     console.log('Function called!');
// }, 3000); // This will log 'Function called!' at most once every 3 seconds,
//  even if throttleFunctionCall is called multiple times within those 3 seconds.

// Sequential Async Tasks

let sequentialAsyncTasks = async () => {
	try {
		const result1 = await delayedMessage('First task completed', 1000);
		console.log(result1); // This will log 'First task completed' after 1 second
		const result2 = await delayedMessage('Second task completed', 2000);
		console.log(result2); // This will log 'Second task completed' after 2 seconds
		const result3 = await delayedMessage('Third task completed', 3000);
		console.log(result3); // This will log 'Third task completed' after 3 seconds
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the asynchronous tasks
	}
};
sequentialAsyncTasks(); // Call the function to execute sequential asynchronous tasks

// Parallel Async Tasks

let parallelAsyncTasks = async () => {
	try {
		const [result1, result2, result3] = await Promise.all([
			delayedMessage('First task completed', 1000),
			delayedMessage('Second task completed', 2000),
			delayedMessage('Third task completed', 3000),
		]);
		console.log(result1); // This will log 'First task completed' after 1 second
		console.log(result2); // This will log 'Second task completed' after 2 seconds
		console.log(result3); // This will log 'Third task completed' after 3 seconds
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the asynchronous tasks
	}
};
parallelAsyncTasks(); // Call the function to execute parallel asynchronous tasks

// Simulate Login System

// Simulate File Upload

let simulateFileUpload = async (file) => {
	try {
		const result = await new Promise((resolve, reject) => {
			const success = Math.random() > 0.5;
			setTimeout(() => {
				if (success) {
					resolve(`File "${file}" uploaded successfully!`);
				} else {
					reject(`File "${file}" failed to upload.`);
				}
			}, 2000);
		});
		console.log(result); // This will log the success message if the file upload is successful
	} catch (error) {
		console.error('Error:', error); // This will log the error message if the file upload fails
	}
};

simulateFileUpload('example.txt'); // Call the function to simulate file upload with a sample file name

// Create Custom wait Function
const wait = (ms) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
};

// Example usage:
// wait(2000).then(() => {
//     console.log('Waited for 2 seconds!');
// }); // This will log 'Waited for 2 seconds!' after a delay of 2 seconds

// Async Array Mapping

let asyncArrayMapping = async (array) => {
	try {
		const results = await Promise.all(
			array.map(async (item) => {
				const result = await delayedMessage(`Processed item: ${item}`, 1000);
				return result;
			}),
		);
		console.log('All items processed:', results); // This will log the processed results of all items in the array
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the asynchronous array mapping
	}
};

asyncArrayMapping([1, 2, 3, 4, 5]); // Call the function to perform asynchronous array mapping with a sample array of numbers

// Async Loop Problem

let asyncLoopProblem = async () => {
	try {
		for (let i = 0; i < 5; i++) {
			const result = await delayedMessage(`Loop iteration: ${i}`, 1000);
			console.log(result); // This will log the loop iteration message for each iteration with a delay of 1 second
		}
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the asynchronous loop
	}
};

asyncLoopProblem(); // Call the function to execute the asynchronous loop problem

// Build Countdown Timer

let countdownTimer = async (seconds) => {
	try {
		for (let i = seconds; i >= 0; i--) {
			console.log(i); // This will log the current countdown number
			await wait(1000); // Wait for 1 second before the next iteration
		}
		console.log('Countdown complete!'); // This will log when the countdown is complete
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the countdown timer
	}
};
countdownTimer(5); // Call the function to start a countdown from 5 seconds

// Cancel Previous API Request

let currentAbortController;
const fetchWithCancel = async (url) => {
	if (currentAbortController) {
		currentAbortController.abort(); // Cancel the previous request if it exists
	}
	currentAbortController = new AbortController(); // Create a new AbortController for the current request
	try {
		const response = await fetch(url, {
			signal: currentAbortController.signal,
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		console.log('Fetched data:', data); // This will log the fetched data from the API
	} catch (error) {
		if (error.name === 'AbortError') {
			console.log('Previous request canceled'); // This will log if the previous request was canceled
		} else {
			console.error('Fetch error:', error); // This will log any other errors that occur during the fetch operation
		}
	}
};
fetchWithCancel('https://jsonplaceholder.typicode.com/posts/1');
// Call the function to fetch data from the API,
// and if this function is called again before the previous request completes, the previous request will be canceled.

// Fetch with Timeout
let fetchWithTimeout = async (url, timeout) => {
	const controller = new AbortController();
	const timeoutId = setTimeout(() => controller.abort(), timeout);
	try {
		const response = await fetch(url, { signal: controller.signal });
		clearTimeout(timeoutId);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		console.log('Fetched data:', data); // This will log the fetched data from the API
	} catch (error) {
		if (error.name === 'AbortError') {
			console.log('Request timed out'); // This will log if the request was aborted due to timeout
		} else {
			console.error('Fetch error:', error); // This will log any other errors that occur during the fetch operation
		}
	}
};

// Create Promise Queue

let promiseQueue = [];
const addToPromiseQueue = (promise) => {
	promiseQueue.push(promise);
	promise.finally(() => {
		promiseQueue = promiseQueue.filter((p) => p !== promise); // Remove the promise from the queue once it settles
	});
};

// Understand Microtask Queue

let microtaskQueueExample = () => {
	console.log('Start of function');
	Promise.resolve().then(() => {
		console.log('This is a microtask'); // This will log after the current synchronous code has finished executing
	});
	console.log('End of function'); // This will log before the microtask is executed
};

log('Before calling function');
microtaskQueueExample();

// Event Loop Practice
//event loop tricks

let eventLoopExample = () => {
	console.log('Start of function');
	setTimeout(() => {
		console.log('This is a macrotask'); // This will log after all microtasks have been executed
	}, 0);
	Promise.resolve().then(() => {
		console.log('This is a microtask'); // This will log before the macrotask, even though it is defined after the setTimeout
	});
	console.log('End of function'); // This will log before both the microtask and macrotask
};
log('Before calling function');
eventLoopExample();

// setTimeout vs Promise

let setTimeoutVsPromise = () => {
	console.log('Start of function');
	setTimeout(() => {
		console.log('This is a setTimeout callback'); // This will log after the current synchronous code and all microtasks have finished executing
	}, 0);
	Promise.resolve().then(() => {
		console.log('This is a Promise callback'); // This will log before the setTimeout callback, even though it is defined after it
	});
};
log('Before calling function');
setTimeoutVsPromise();

// Async Function Return Value

let asyncFunctionReturnValue = async () => {
	return 'This is the return value of the async function!';
};

asyncFunctionReturnValue().then((value) => {
	console.log(value); // This will log 'This is the return value of the async function!' when the promise returned by the async function resolves
});

log('Before calling async function');
asyncFunctionReturnValue();

// Nested Promise Handling

let nestedPromiseHandling = async () => {
	try {
		const result1 = await delayedMessage('First task completed', 1000);
		console.log(result1); // This will log 'First task completed' after 1 second
		const result2 = await new Promise((resolve) => {
			setTimeout(() => {
				resolve('Second task completed');
			}, 2000);
		});
		console.log(result2); // This will log 'Second task completed' after 2 seconds
		const result3 = await delayedMessage('Third task completed', 3000);
		console.log(result3); // This will log 'Third task completed' after 3 seconds
	} catch (error) {
		console.error('Error:', error); // This will log any errors that occur during the nested promise handling
	}
};
nestedPromiseHandling(); // Call the function to execute nested promise handling

// Build Fake API Service

let fakeAPIService = async (endpoint) => {
	try {
		const response = await new Promise((resolve, reject) => {
			setTimeout(() => {
				if (endpoint === '/users') {
					resolve({ data: [{ id: 1, name: 'John Doe' }] });
				} else if (endpoint === '/posts') {
					resolve({ data: [{ id: 1, title: 'Hello World' }] });
				} else {
					reject('Endpoint not found');
				}
			}, 1000);
		});
		console.log('API Response:', response); // This will log the fake API response based on the endpoint
	} catch (error) {
		console.error('API Error:', error); // This will log any errors that occur during the fake API service operation
	}
};
fakeAPIService('/users'); // Call the function to get fake API response for users
fakeAPIService('/posts'); // Call the function to get fake API response for posts
fakeAPIService('/invalid'); // Call the function to get fake API response for an invalid endpoint, which will trigger an error

// Cache API Responses
let apiCache = {};
let fetchWithCache = async (endpoint) => {
	if (apiCache[endpoint]) {
		console.log('Cache hit:', apiCache[endpoint]); // This will log the cached response if it exists
		return apiCache[endpoint];
	}
	try {
		const response = await fakeAPIService(endpoint);
		apiCache[endpoint] = response; // Cache the response for future requests
		console.log('Fetched and cached response:', response);
		return response; // This will log the fetched response and cache it for future use
	} catch (error) {
		console.error('Fetch error:', error); // This will log any errors that occur during the fetch operation
	}
};
fetchWithCache('/users');

// Build Async Task Manager
let asyncTaskManager = {
	tasks: [],
	addTask: function (task) {
		this.tasks.push(task); // Add a new task to the task manager
		task.finally(() => {
			this.tasks = this.tasks.filter((t) => t !== task); // Remove the task from the manager once it settles
		});
	},
	getPendingTasks: function () {
		return this.tasks; // Return the list of pending tasks
	},
};
// Example usage:
const task1 = delayedMessage('Task 1 completed', 2000);
const task2 = delayedMessage('Task 2 completed', 3000);
asyncTaskManager.addTask(task1);
asyncTaskManager.addTask(task2);
console.log('Pending tasks:', asyncTaskManager.getPendingTasks()); // This will log the list of pending tasks in the task manager
