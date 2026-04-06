// =====================================
// COUNTER USING CLOSURE (inc, dec, reset)
// =====================================

function createCounter(initialValue = 0) {
	let count = initialValue; // private variable (closure)

	return {
		inc() {
			count++;
			return count;
		},

		dec() {
			count--;
			return count;
		},

		reset() {
			count = initialValue;
			return count;
		},

		get() {
			return count;
		},
	};
}

// =====================================
// USAGE
// =====================================

let counter = createCounter(5);

console.log(counter.get()); // 5

console.log(counter.inc()); // 6
console.log(counter.inc()); // 7

console.log(counter.dec()); // 6

console.log(counter.reset()); // 5

console.log(counter.get()); // 5

// =====================================
// 🔥 TRICKY POINTS
// =====================================

// Q1: Can we access count directly?
console.log(counter.count); // undefined ❌ (private)

// Q2: Multiple instances?
let c1 = createCounter(0);
let c2 = createCounter(10);

console.log(c1.inc()); // 1
console.log(c2.inc()); // 11 (separate memory)

// Q3: Why closure?
// count is remembered even after function execution

// =====================================
// 🔥 INTERVIEW SUMMARY
// =====================================

// closure = private variable
// functions act like API (inc, dec, reset)
// each instance has separate state
