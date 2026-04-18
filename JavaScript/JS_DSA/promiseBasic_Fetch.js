let p1 = Promise.reject('promise is resolved');

console.log(p1);

function success() {
	return 'promise passed';
}

function failure() {
	return 'failure';
}

p1.then(success, failure);

// then takes functions or values like this
//.then(success, failure)
//.then((value) => ...)
// resolve or reject do deta ha vo value bn jata hai

//==============================//
// so basicall promise reject and resolve as args leta hai to hum batayen usko rejct ya resolve chlana hai
// so we can even write function for resolve and reject outside of promise

function resolved() {
	return 'resolved used';
}

function rejected() {
	return 'rejected used';
}

let p4 = new Promise((resolve, reject) => {
	let done = true;
	if (done) {
		resolve(resolved()); // call your function
	} else {
		reject(rejected()); // resolve and rejct bhi param lega jo ki funcion ho skta hai
	}
});

console.log(p4);

//IMP= production me esa code nhi likhna hai , most of the logi ko promise k andr hi likhna hai

//=======Set time out=========
// ek function and ek callback leta h , iska callback time hoga jo ki function ko late krega

// function myname() {
// 	return 'rk';
// }

// setTimeout(() => {
// 	console.log(myname());
// }, 5000);

//======= now Fetch API =========

// fetch url = then it return a response
// thenable
// structure of Fetch()

// fetch(url, options)
// 	.then((response) => {
// 		// check response
// 		return response.json();
// 	})
// 	.then((data) => {
// 		// use data
// 	})
// 	.catch((error) => {
// 		// handle error
// 	});

fetch('https://jsonplaceholder.typicode.com/users')
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	});
console.log(data); // ese data out nhi hoga that why we need to use async await for this

//=======BASIC========//

// Fetch user data from API and print name

fetch('https://jsonplaceholder.typicode.com/users')
	.then((res) => res.json())
	.then((data) => {
		let usernames = data.map((user) => user.username); // usernames h wo khud se hi array bn jayega
		console.log(usernames);
	});

// Fetch posts and handle loading + error states

let loading = true;
let error = null;
let data = null;

console.log('Loading...');

fetch('https://jsonplaceholder.typicode.com/posts')
	.then((res) => {
		if (!res.ok) {
			throw new Error('API Error');
		}
		return res.json();
	})
	.then((result) => {
		loading = false;
		data = result;

		console.log('Data received:', data.slice(0, 3)); // first 3 posts
	})
	.catch((err) => {
		loading = false;
		error = err;

		console.log('Error:', error.message);
	});

// Call API and retry once if it fails

function fetchData() {
	return new Promise((resolve, reject) => {
		let success = Math.random() > 0.5; // simulate success/failure

		if (success) {
			resolve('Data received');
		} else {
			reject('Failed');
		}
	});
}

// Fetch data and show fallback if API fails

setTimeout(() => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => {
			let usernames = data.map((user) => user.username); // usernames h wo khud se hi array bn jayega
			console.log(usernames);
		});
}, 5000);

// Simulate API with Promise (setTimeout)

function fakeAPI() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let success = Math.random() > 0.5;

			if (success) {
				resolve('Data received');
			} else {
				reject('API failed');
			}
		}, 2000);
	});
}
