function createUser() {
	let password = '12345'; // private

	return {
		checkPassword(input) {
			return input === password;
		},
	};
}

const user = createUser();
console.log(user.checkPassword('12345')); // true

// here we cannot access password directly, it's encapsulated within the closure

// memory leak in closures can happen if we create a closure that holds onto large data structures or DOM elements,
//  preventing them from being garbage collected. For example:
function createLargeClosure() {
	const largeData = new Array(1000000).fill('data'); // large data structure
	return function () {
		console.log(largeData[0]); // closure holds reference to largeData
	};
}

const largeClosure = createLargeClosure();
// If we never call largeClosure, the largeData array will still be in memory, causing a memory leak. To prevent this, we can avoid creating closures that reference large data or ensure that we nullify references when they are no longer needed.
// To prevent memory leaks, we can set the closure's reference to null when it's no longer needed:
function createSafeClosure() {
	let largeData = new Array(1000000).fill('data'); // large data structure
	return function () {
		console.log(largeData[0]); // closure holds reference to largeData
	};
}

const safeClosure = createSafeClosure();
// When we're done with the closure, we can nullify the reference to allow garbage collection:
safeClosure = null; // Now largeData can be garbage collected when safeClosure is no longer referenced.
