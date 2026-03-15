// let creating a memoization function
// for prime numbers

function memoize(fn) {
	const cache = {};
	return function (...args) {
		const key = args.toString();
		if (cache[key]) {
			console.log('Fetching from cache');
			return cache[key];
		}
		console.log('Calculating result');
		const result = fn.apply(this, args);
		cache[key] = result;
		return result;
	};
}

function isPrime(num) {
	if (num <= 1) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

const memoizedIsPrime = memoize(isPrime);

console.log(memoizedIsPrime(11));
console.log(memoizedIsPrime(11)); // This will fetch from cache
console.log(memoizedIsPrime(15));
console.log(memoizedIsPrime(15)); // This will fetch from cache
