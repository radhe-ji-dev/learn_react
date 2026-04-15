let arr1 = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6];
let arr2 = [7, 8, 9, 10, -11, -5];

let products = [
	{ id: 1, name: 'Shirt', category: 'Clothing', price: 1200 },
	{ id: 2, name: 'Jeans', category: 'Clothing', price: 2000 },
	{ id: 3, name: 'iPhone', category: 'Electronics', price: 80000 },
	{ id: 4, name: 'Laptop', category: 'Electronics', price: 120000 },
	{ id: 5, name: 'Soap', category: 'Grocery', price: 40 },
	{ id: 6, name: 'Rice', category: 'Grocery', price: 60 },
];

let nested = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

let arr3 = [];
// 1 merge two arrays
arr3 = [...arr1, ...arr2];

console.log(arr3);
// 2 unique values
let arr4 = new Set(arr3);

console.log(arr4);

//Got it 👍 you want to **force usage of JS built-in methods (map, reduce, filter, etc.)** — good for interviews.

// ---

// ### 🔹 Using `map()`

// * Convert array of numbers into their cubes

let cubes = arr2.map((num) => num * num * num);
console.log(cubes);

// * Add “₹” prefix to each price in array

let ruppeStr = arr2.map((num) => num.toString());
console.log(ruppeStr);

let rupees = ruppeStr.map((rupee) => rupee + '$');
console.log(rupees);

// * Extract names from array of user objects

// * Convert array of strings to their lengths

let names = ['ramesh', 'jay', 'preet', 'kiyan'];

let namelen = names.map((name) => name.length);
console.log(namelen);

// * Convert array of dates to readable format

// ---

// ### 🔹 Using `filter()`

// * Get all even numbers from array

let even = arr2.filter((a) => a % 2 == 0);
console.log(even);

// * Remove negative numbers

let noNeg = arr2.filter((a) => a > 2);
console.log(noNeg);

// ---

// ### 🔹 Using `reduce()`

// * Find sum of all numbers

let sum = arr2.reduce((a) => a + a);
console.log(sum);

// * Find product of all numbers

let product = arr2.reduce((a) => a * a);
console.log(product);

// * Count occurrences of each element

// * Flatten an array (multi-level)

// * Find maximum value in array

let max = arr2.reduce((acc, curr) => {
	// (a,b)=>if a>b?a:b kind of
	return curr > acc ? curr : acc;
}, -Infinity);

console.log(max);

// * Group objects by category

// Find minimum number
let min = arr2.reduce((acc, curr) => {
	// (a,b)=>if a>b?a:b kind of
	return curr < acc ? curr : acc;
});

console.log(min);

// Find second largest number

// Find max from array of objects (by price)

// Find longest string
let largeStr = names.reduce((a, b) => {
	return a.length > b.length ? a : b;
});

console.log(largeStr);

// Find object with highest value

// ---

// ### 🔹 Using `find()` / `findIndex()`
// find will give us fisrt Found according to conditions
// findindex give first index

// * Find first number greater than 50

let bignum = arr2.find((num) => num > 4);
console.log(bignum);

// * Find first user with age > 25

// * Find index of first negative number

let negnum = arr2.find((num) => num < 0);
console.log(negnum);

// * Find object with specific id

// ---

// ### 🔹 Using `some()` / `every()`

// * Check if everry number is negative

let negnum2 = arr2.every((num) => num < 0);
console.log(negnum2);

// * Check if some number is negative

let negnum3 = arr2.some((num) => num < 0);
console.log(negnum3);

// * Check if all numbers are positive

// * Check if any user is admin

// * Check if all strings are non-empty

// ---

// ### 🔹 Using `sort()`

// * Sort numbers ascending
let sortace = arr1.sort((a, b) => a - b);
console.log(sortace);

// * Sort numbers descending

let sortdce = arr1.sort((a, b) => b - a);
console.log(sortace);

// * Sort strings alphabetically

let sortalp = names.sort((a, b) => a - b);
console.log(sortalp);

// * Sort objects by price

let sortobj = products.sort((a, b) => a.price - b.price);

console.log(sortobj);

// * Sort users by age

// ---

// ### 🔹 Using `flat()` / `flatMap()`

// * Flatten nested array

let flatarr = nested.flat();
console.log(flatarr);

// * Convert sentences into words array

// * Split array of strings into characters

names.forEach((name) => {
	let splitnames = name.split('');
	console.log(splitnames);
});

// ---

// ### 🔹 Using `Set` / `Map`

// * Remove duplicate values

let arrset = new Set(arr3);
console.log(arrset);

// * Count frequency using Map

let freqMap = new Map();

arr2.forEach((num) => {
	freqMap.set(num, (freqMap.get(num) || 0) + 1);
});

console.log(freqMap);
// * Find unique elements between two arrays

// * Store and retrieve key-value pairs

let kvarr = [];

freqMap.forEach((value, key) => {
	kvarr.push({ key: key, value: value });
});
console.log(kvarr);

// ---

// ### 🔹 Mixed (real interview style)

// * Get unique values after merging two arrays
// * Find duplicates in array
// * Get top 3 highest numbers
// * Remove duplicate objects based on id
// * Find missing number in sequence
// * Convert array into grouped object by property
// * Calculate total cart value from array of items
// * Get average of numbers
// * Find longest string in array
// * Chain map + filter + reduce to process data

let result = arr1
	.filter((num) => num % 2 === 0) // keep even
	.map((num) => num * 2) // double
	.reduce((acc, curr) => acc + curr, 0); // sum

console.log(result);

// ---

// //
