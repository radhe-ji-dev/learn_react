// Error handling in asynchronous programming requires
// careful attention as traditional ways (like try/catch) are
// ineffective. Instead, callbacks typically include error
// parameters, necessitating explicit error handling mechanisms
// to avoid unreported errors that could undermine user
// experience and complicate debugging. Promises and
//  async/await provide more structured approaches to error handling, allowing developers to use .catch() for promises or try/catch blocks with async/await,
// enhancing code readability and maintainability while ensuring that errors are properly managed in asynchronous operations.

// lets see how to handle errors in async using callbacks in js
function fetchData(callback) {
	setTimeout(() => {
		const error = null; // Simulating no error
		const data = 'Hello, World!';
		callback(error, data);
	}, 2000);
}

console.log('Fetching data...');
fetchData((error, data) => {
	if (error) {
		console.error('Error fetching data: ' + error);
	} else {
		console.log('Data received: ' + data);
	}
});

// In this example, the fetchData function simulates an asynchronous operation and includes an error parameter in the callback.
// The callback checks for the presence of an error and handles it accordingly, 
// ensuring that any issues during data fetching are properly reported.
