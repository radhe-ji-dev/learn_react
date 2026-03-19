// =============================================================================
// SECTION 1: WHAT IS A CLOSURE? (Core Definition)
// =============================================================================

// A closure is a function bundled with its lexical environment (outer scope variables),
// allowing access even after outer function returns.

// simple definition of closure
// A closure is a function that has access to its own scope,
//  the outer function's scope, and the global scope. 
// It allows the inner function to access variables from the outer function even after the outer function has finished executing.

// ASCII Diagram:
console.log(`
Global Scope
  ↓
Outer Function { count: alive }
  ↓
Inner Function
`);

// =============================================================================
// SECTION 2: BASIC EXAMPLES
// =============================================================================

function createCounter() {
	let count = 0;
	return function () {
		count++;
		console.log('Counter:', count);
		return count;
	};
}

const counter = createCounter();
counter(); // 1
counter(); // 2

// Bank Account Module
function createBankAccount(initial = 0) {
	let balance = initial;
	return {
		deposit: (amount) => {
			balance += amount;
			console.log('Balance:', balance);
			return balance;
		},
		withdraw: (amount) => {
			if (amount <= balance) {
				balance -= amount;
				console.log('Balance after withdraw:', balance);
				return balance;
			}
			console.log('Insufficient funds');
			return null;
		},
		getBalance: () => balance,
	};
}

const account = createBankAccount(100);
account.deposit(50); // 150
account.withdraw(30); // 120
console.log('Final balance:', account.getBalance()); // 120

// =============================================================================
// SECTION 3: ADVANCED EXAMPLES
// =============================================================================

// Loop Pitfall (var vs let + closure)
console.log('\n🔥 LOOP CLOSURE:');
for (var i = 0; i < 3; i++) {
	// Wrong: all 3
	setTimeout(() => console.log('var i:', i), 0);
}

for (let j = 0; j < 3; j++) {
	// Fix: IIFE closure
	(function (k) {
		setTimeout(() => console.log('let closure j:', k), 0);
	})(j);
}

// Async Closure OK with let
for (let k = 0; k < 3; k++) {
	setTimeout(() => console.log('Async let k:', k), k * 100);
}

// Multiplier Factory
function multiplierFactory(factor) {
	return (num) => num * factor;
}
const double = multiplierFactory(2);
console.log('Double 5:', double(5)); // 10

// =============================================================================
// SECTION 4: INTERVIEW Q&A WITH CODE
// =============================================================================

console.log('\n📝 INTERVIEW Qs:');

// Q1-10 answers in comments above examples.

// Pitfall: Memory (demo large loop commented)

// =============================================================================
// EXERCISES
// =============================================================================

function createCache() {
	const cache = new Map();
	return function (key, value) {
		if (value !== undefined) {
			cache.set(key, value);
		}
		return cache.get(key);
	};
}

const cache = createCache();
cache('key1', 'value1');
console.log('Cache test:', cache('key1')); // value1

console.log('\n✅ Closures Guide Complete! Check console for outputs.');




// Run setTimeouts will log later.
// =========================================

// Interview Qs:

// 1. What is a closure in JavaScript?
// 2. How does a closure work?
// 3. Can you give an example of a closure in JavaScript?
// 4. What are some common use cases for closures in JavaScript?
// 5. How do closures help with data encapsulation in JavaScript?
// 6. What is the difference between a closure and a regular function?
// 7. Can closures cause memory leaks? If so, how can you prevent them?
// 8. How do closures interact with asynchronous code in JavaScript?
// 9. Can you create a closure that maintains state across multiple function calls?
// 10. What are some potential pitfalls of using closures in JavaScript?
