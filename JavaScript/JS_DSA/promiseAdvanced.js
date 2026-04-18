// Advanced
// Implement your own Promise.all()

function myPromiseAll(promises) {
	return new Promise((resolve, reject) => {
		let results = []; // array of results
		let completed = 0;

		promises.forEach((p, index) => {
			Promise.resolve(p) // handle non-promises also
				.then((value) => {
					results[index] = value; // keep order
					completed++; // each one by complerd

					if (completed === promises.length) {
						// lst me len equal hai to hi return krn hai
						resolve(results);
					}
				})
				.catch((err) => {
					reject(err); // fail fast
				});
		});
	});
}

// Implement retry with exponential backoff

function wait(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

function retryWithBackoff(fn, retries, delay) {
	return fn().catch((err) => {
		if (retries === 0) {
			return Promise.reject(err); // no retries left
		}

		console.log(`Retrying in ${delay}ms...`);

		return wait(delay).then(() => {
			return retryWithBackoff(fn, retries - 1, delay * 2);
		});
	});
}

function fakeAPI() {
	return new Promise((resolve, reject) => {
		let success = Math.random() > 0.7;

		setTimeout(() => {
			success ? resolve('Success!') : reject('Failed!');
		}, 500);
	});
}

// Limit concurrent API calls (like 3 at a time)

function runWithLimit(tasks, limit) {
	let i = 0;
	let running = 0;
	let results = [];

	return new Promise((resolve, reject) => {
		function runNext() {
			// done condition
			if (i === tasks.length && running === 0) {
				return resolve(results);
			}

			// fill slots
			while (running < limit && i < tasks.length) {
				let currentIndex = i;
				let task = tasks[i++];
				running++;

				Promise.resolve(task())
					.then((res) => {
						results[currentIndex] = res;
					})
					.catch(reject)
					.finally(() => {
						running--;
						runNext(); // start next task
					});
			}
		}

		runNext();
	});
}

function createTask(name, delay) {
	return () =>
		new Promise((resolve) => {
			setTimeout(() => {
				console.log(name, 'done');
				resolve(name);
			}, delay);
		});
}

let tasks = [
	createTask('A', 1000),
	createTask('B', 2000),
	createTask('C', 1500),
	createTask('D', 1000),
	createTask('E', 500),
];

runWithLimit(tasks, 3).then((res) => {
	console.log('All done:', res);
});

// Cancel a request (AbortController concept)

// ===============================
// UTIL: delay helper
// ===============================
function wait(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// ===============================
// FAKE API (supports abort)
// ===============================
function fakeAPI(name, delay, signal) {
	return new Promise((resolve, reject) => {
		let timer = setTimeout(() => {
			let success = Math.random() > 0.3;

			if (success) {
				console.log(name, '✅ success');
				resolve(name);
			} else {
				console.log(name, '❌ failed');
				reject('API failed');
			}
		}, delay);

		// abort support
		signal?.addEventListener('abort', () => {
			clearTimeout(timer);
			reject(new Error('AbortError'));
		});
	});
}

// ===============================
// RETRY WITH EXPONENTIAL BACKOFF
// ===============================
function retryWithBackoff(fn, retries = 3, delay = 500) {
	return fn().catch((err) => {
		if (err.message === 'AbortError') {
			return Promise.reject(err); // don't retry aborted
		}

		if (retries === 0) {
			return Promise.reject(err);
		}

		console.log('Retrying in', delay, 'ms');

		return wait(delay).then(() => retryWithBackoff(fn, retries - 1, delay * 2));
	});
}

// ===============================
// CONCURRENCY LIMIT (e.g. 3 at a time)
// ===============================
function runWithLimit(tasks, limit) {
	let i = 0;
	let running = 0;
	let results = [];

	return new Promise((resolve, reject) => {
		function runNext() {
			// all done
			if (i === tasks.length && running === 0) {
				return resolve(results);
			}

			// fill available slots
			while (running < limit && i < tasks.length) {
				let currentIndex = i;
				let task = tasks[i++];
				running++;

				Promise.resolve(task())
					.then((res) => {
						results[currentIndex] = res;
					})
					.catch(reject)
					.finally(() => {
						running--;
						runNext(); // trigger next task
					});
			}
		}

		runNext();
	});
}

// ===============================
// MAIN EXECUTION
// ===============================
let controller1 = new AbortController();

// create tasks (each task returns a Promise)
let taskslist = ['A', 'B', 'C', 'D', 'E'].map((name, i) => {
	return () =>
		retryWithBackoff(
			() => fakeAPI(name, 1000 + i * 300, controller1.signal),
			2, // retries
			500, // initial delay
		);
});

// run with concurrency limit = 3
runWithLimit(taskslist, 3)
	.then((res) => {
		console.log('🎉 All done:', res);
	})
	.catch((err) => {
		console.log('❌ Error:', err.message || err);
	});

// ===============================
// CANCEL ALL (after 3 sec)
// ===============================
setTimeout(() => {
	console.log('⛔ Aborting all requests...');
	controller.abort();
}, 3000);

// Debounce API calls (search input)

/*******************************************************
 * DEBOUNCE + SEARCH API + ABORT CONTROLLER (Single File)
 *******************************************************/

/***********************
 * 1. Debounce Function
 ***********************/
function debounce(fn, delay) {
	let timer;

	return function (...args) {
		clearTimeout(timer); // cancel previous timer

		timer = setTimeout(() => {
			fn.apply(this, args); // call latest function
		}, delay);
	};
}

/*******************************
 * 2. Fake Search API (simulate)
 *******************************/
function fakeSearchAPI(query) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('🌐 API called with:', query);

			resolve(['Result 1 for ' + query, 'Result 2 for ' + query]);
		}, 500);
	});
}

/*********************************************
 * 3. Debounced Search (Basic - without cancel)
 *********************************************/
const debouncedSearchBasic = debounce((query) => {
	fakeSearchAPI(query).then((results) => {
		console.log('✅ Results:', results);
	});
}, 500);

/*********************************************
 * 4. Debounced Search with AbortController
 * (Cancels previous request)
 *********************************************/
let controller; // shared controller

const debouncedSearchAdvanced = debounce((query) => {
	// cancel previous request if exists
	if (controller) {
		controller.abort();
		console.log('❌ Previous request cancelled');
	}

	controller = new AbortController();

	fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`, {
		signal: controller.signal,
	})
		.then((res) => res.json())
		.then((data) => {
			console.log('✅ Data:', data.slice(0, 2));
		})
		.catch((err) => {
			if (err.name === 'AbortError') {
				console.log('⚠️ Request aborted');
			} else {
				console.log('❌ Error:', err);
			}
		});
}, 500);

/*********************************************
 * 5. SIMULATION (Typing)
 *********************************************/

// --- Basic debounce ---
debouncedSearchBasic('r');
debouncedSearchBasic('re');
debouncedSearchBasic('rea');
debouncedSearchBasic('reac');
debouncedSearchBasic('react');

// Only "react" triggers API call

// --- Advanced debounce with cancel ---
setTimeout(() => {
	console.log('\n--- Advanced Search ---');

	debouncedSearchAdvanced('j');
	debouncedSearchAdvanced('ja');
	debouncedSearchAdvanced('jav');
	debouncedSearchAdvanced('java');
	debouncedSearchAdvanced('javascript');
}, 3000);

/*******************************************************
 * FINAL NOTES
 *******************************************************

1. Debounce → delays execution until user stops typing
2. clearTimeout → cancels previous call
3. AbortController → cancels previous API request
4. Prevents unnecessary API calls (real-world use)

*******************************************************/

// Cache API responses (memoization)/*******************************************************
// * API CACHE (MEMOIZATION) - Single File *******************************************************/

/*******************************
 * 1. Simple Cache Storage
 *******************************/
const cache = {};
// key → API URL or query
// value → Promise (important)

/*********************************************
 * 2. Cached Fetch Function
 *********************************************/
function fetchWithCache(url) {
	// ✅ If already cached → return it
	if (cache[url]) {
		console.log('📦 From cache:', url);
		return cache[url];
	}

	// ❌ Not cached → call API
	console.log('🌐 Fetching:', url);

	let promise = fetch(url)
		.then((res) => {
			if (!res.ok) {
				throw new Error('API Error');
			}
			return res.json();
		})
		.catch((err) => {
			// ⚠️ Important: remove failed cache
			delete cache[url];
			throw err;
		});

	// store promise (not data!)
	cache[url] = promise;

	return promise;
}

/*********************************************
 * 3. Usage Example
 *********************************************/

let url = 'https://jsonplaceholder.typicode.com/users';

// First call → API hit
fetchWithCache(url).then((data) => {
	console.log('First call:', data.length);
});

// Second call → cache used
setTimeout(() => {
	fetchWithCache(url).then((data) => {
		console.log('Second call:', data.length);
	});
}, 2000);

/*********************************************
 * 4. Advanced: Cache with Query (Search)
 *********************************************/
function fetchUser(query) {
	let url = `https://jsonplaceholder.typicode.com/users?q=${query}`;
	return fetchWithCache(url);
}

// simulate search
fetchUser('Leanne');
fetchUser('Leanne'); // cached

/*******************************************************
 * FINAL NOTES
 *******************************************************

1. Cache stores Promise (not data)
2. Same request → same Promise reused
3. Prevents duplicate API calls
4. If API fails → remove from cache

*******************************************************/
