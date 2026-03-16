//synchronus programming
// in synchronus programming, the code is executed line by line, 
// and each line of code waits for the previous line to finish before executing.
// this can lead to blocking of the main thread, and can cause performance issues if there are long-running tasks.
// example of synchronus programming
function task1() {
	console.log('Task 1 started');
	// simulating a long-running task
	for (let i = 0; i < 1000000000; i++) {
		// do nothing
	}
	console.log('Task 1 completed');
}

function task2() {
	console.log('Task 2 started');
	console.log('Task 2 completed');
}



