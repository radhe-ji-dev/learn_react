//========= Basic Call backs
// Got it—keeping it **very simple, real-life style situations** where callbacks naturally fit 👇

// ---

// 1. When a user clicks a button → run a function after click finishes

button.addEventListener('click', function () {
	console.log('Button clicked!');
}); // jab clcik hota h tb browser call back ko call krta user only click krta hai

// 2. After a timer ends (like 5 seconds) → execute something
console.log('Start');

setTimeout(function () {
	console.log('5 seconds completed');
}, 5000);

console.log('End');
// isme function ko broser 5000 time k baad call krega funcion ko khud se

// 3. When a file finishes loading → process the data

const input = document.getElementById('fileInput');

input.addEventListener('change', function (event) {
	const file = event.target.files[0];
	const reader = new FileReader();

	reader.onload = function () {
		console.log('File loaded!');
		console.log(reader.result); // file content
	};

	reader.readAsText(file);
});

// 4. After form validation completes → submit the form

const form = document.getElementById('myForm');

// here isvalid is the callback function

form.addEventListener('submit', function (e) {
	e.preventDefault(); // stop default submit

	validateForm(function (isValid) {
		if (isValid) {
			console.log('Form submitted!');
		} else {
			console.log('Validation failed!');
		}
	});
});

function validateForm(callback) {
	const name = document.getElementById('name').value;

	setTimeout(() => {
		if (name.trim() !== '') {
			callback(true);
		} else {
			callback(false);
		}
	}, 1000); // simulate async validation
}

// 5. When a game level finishes → load next level

// 6. After an animation ends → trigger next animation
// 7. When a download completes → show “Download Complete” message
// 8. After a calculation finishes → display result
// 9. When user stops typing → run search logic
// 10. After login success → redirect to dashboard
// 11. When an image finishes loading → display it on screen
// 12. After saving data locally → show confirmation
// 13. When a task in a queue finishes → start next task
// 14. After retry attempts finish → show final result (success/fail)
// 15. When multiple tasks finish → run a final summary function
// 16. After event occurs (scroll, click, hover) → trigger handler
// 17. When audio/video ends → play next media
// 18. After processing a large loop → return final output
// 19. When user cancels an action → stop current process
// 20. After progress reaches 100% → trigger completion callback

// ---

// These are the kinds of **simple mental models** interviewers expect when you talk about callbacks.

// If you want next step, I can convert these into:

// * real JS mini problems
// * or tricky interview questions based on them
