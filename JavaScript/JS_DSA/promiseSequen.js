// 1 simple parallel taks in promise and then

function task(name, delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(name, 'done');
			resolve(name);
		}, delay);
	});
}

task('Task 1', 1000)
	.then(() => task('Task 2', 1000)) // task ka name nad delay set krna h
	.then(() => task('Task 3', 1000))
	.then(() => console.log('All done'));

// now we need to create a dynamic array of tasks
// very important and complex concept

let tasks = [
	() => task('A', 1000),
	() => task('B', 1000),
	() => task('C', 1000),
];

tasks.reduce((prev, curr) => {
	return prev.then(() => curr());
}, Promise.resolve());

// promise .all
// isme sare promise one by one chlega

function task(name, delay) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(name, 'done');
			resolve(name);
		}, delay);
	});
}

Promise.all([task('A', 1000), task('B', 2000), task('C', 1500)]).then(
	(results) => {
		console.log('All done:', results);
	},
);

Promise.race([task('A', 1000), task('B', 2000), task('C', 500)]).then(
	(result) => {
		/// race me jo fist complete kia wo promise se return ho jayega
		console.log('Winner:', result);
	},
);

// sequence with conditions

function check(val) {
	return new Promise((resolve, reject) => {
		if (val > 10) resolve(val);
		else reject('Too small');
	});
}

Promise.resolve(5)
	.then((v) => v + 10)
	.then((v) => check(v)) // condition step
	.then(console.log)
	.catch(console.log);

// break the sequence and to do more

function check(val) {
	return new Promise((resolve, reject) => {
		if (val > 10) resolve(val);
		else reject('Too small');
	});
}

Promise.resolve(5)
	.then((v) => v + 10)
	.then((v) => check(v)) // condition step
	.then(console.log)
	.catch(console.log);

// runnign a dynamic array
let nums = [1, 2, 3];

nums.reduce((prev, curr) => {
	return prev.then(() => {
		console.log(curr);
		return Promise.resolve();
	});
}, Promise.resolve());

// sequence with delay

function wait(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

Promise.resolve()
	.then(() => wait(1000))
	.then(() => console.log('Step 1'))
	.then(() => wait(1000))
	.then(() => console.log('Step 2'));
