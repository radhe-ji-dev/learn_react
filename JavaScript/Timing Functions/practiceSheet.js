// Task Name

// firslt lets list done all timing functions in JavaScript
// setTimeout
// clearTimeout
// setInterval
// clearInterval

// Basic setTimeout

const timeoutId = setTimeout(() => {
	console.log('This message will be displayed after 2 seconds');
}, 2000); // 2000 is ka callback h delay in milliseconds (1000 ms = 1 second)

// Cancel Timeout

clearTimeout(timeoutId); // This will prevent the above message from being displayed

// Basic setInterval

const intervalId = setInterval(() => {
	console.log('This message will be displayed every 3 seconds');
}, 3000); // 3000 is the delay in milliseconds (1000 ms = 1 second)

// Cancel Interval

clearInterval(intervalId); // This will stop the above message from being displayed repeatedly

// Stop Interval

// Countdown Timer

const countdown = (seconds) => {
	let remainingSeconds = seconds;
	const intervalId = setInterval(() => {
		if (remainingSeconds > 0) {
			console.log(`Time remaining: ${remainingSeconds} seconds`);
			remainingSeconds--;
		} else {
			console.log('Time is up!');
			clearInterval(intervalId);
		}
	}, 1000); // Update every second
};

//countdown(10); // Start a countdown from 10 seconds

// Digital Clock
const digitalClock = () => {
	setInterval(() => {
		const now = new Date();
		const hours = String(now.getHours()).padStart(2, '0');
		const minutes = String(now.getMinutes()).padStart(2, '0');
		const seconds = String(now.getSeconds()).padStart(2, '0');
		console.log(`${hours}:${minutes}:${seconds}`);
	}, 1000); // Update every second
};

// Start the digital clock

// Auto Logout System

// Typing Effect Animation

// Image Slider

// Traffic Light Simulator

let trafficLightState = 'red';

const trafficLightSimulator = () => {
	setInterval(() => {
		if (trafficLightState === 'red') {
			console.log('Red Light - Stop');
			trafficLightState = 'green';
		} else if (trafficLightState === 'green') {
			console.log('Green Light - Go');
			trafficLightState = 'yellow';
		} else if (trafficLightState === 'yellow') {
			console.log('Yellow Light - Caution');
			trafficLightState = 'red';
		}
	}, 2000); // Change light every 2 seconds
};

// Quiz Timer

// OTP Expiry Timer

// Stopwatch App

const stopwatch = () => {
	let seconds = 0;
	const intervalId = setInterval(() => {
		seconds++;
		console.log(`Stopwatch: ${seconds} seconds`);
	}, 1000); // Update every second

	// To stop the stopwatch after 10 seconds for demonstration
	setTimeout(() => {
		clearInterval(intervalId);
		console.log('Stopwatch stopped');
	}, 10000); // Stop after 10 seconds
};

// Start the stopwatch
//stopwatch();

// Debounce Search Input

let debounceTimeoutId;

const debounceSearch = (query) => {
	clearTimeout(debounceTimeoutId);
	debounceTimeoutId = setTimeout(() => {
		console.log(`Searching for: ${query}`);
		// Here you would typically make an API call to search for the query
	}, 500); // Wait for 500 milliseconds after the last keystroke
};

// Simulating user typing in a search input
debounceSearch('J');
debounceSearch('Ja');
debounceSearch('Jav');
debounceSearch('Java');
debounceSearch('JavaS');
debounceSearch('JavaSc');

// Throttle Scroll Event

let lastScrollTime = 0;

const throttleScroll = () => {
	window.addEventListener('scroll', () => {
		const now = Date.now();
		if (now - lastScrollTime >= 200) {
			// Throttle to every 200 milliseconds
			console.log('Scroll event handled');
			lastScrollTime = now;
		}
	});
};

// Polling API Data

const pollApiData = () => {
	setInterval(() => {
		console.log('Polling API for new data...');
		// Here you would typically make an API call to fetch new data
	}, 5000);
};

// Start polling API data
//pollApiData();
