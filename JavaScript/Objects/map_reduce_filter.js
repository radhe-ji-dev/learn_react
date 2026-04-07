// MAP, FILTER, REDUCE - STRUCTURE + EXAMPLES + INTERVIEW QNA

// -----------------------------
// 1. MAP (transform each item)
// -----------------------------
let nums = [1, 2, 3];

let doubled = nums.map((n) => n * 2);
console.log(doubled); // [2,4,6]

// -----------------------------
// 2. FILTER (select items)
// -----------------------------
let even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2]

// -----------------------------
// 3. REDUCE (single value)
// -----------------------------
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

// -----------------------------
// REAL STRUCTURE
// -----------------------------
// map: arr.map(item => return newItem)
// filter: arr.filter(item => condition)
// reduce: arr.reduce((acc, item) => logic, initialValue)

// -----------------------------
// REAL USE CASE
// -----------------------------
let users = [
	{ name: 'Rahul', age: 25 },
	{ name: 'Amit', age: 30 },
	{ name: 'Ravi', age: 20 },
];

// get names
let names = users.map((u) => u.name);
console.log(names); // [Rahul, Amit, Ravi]

// filter age > 25
let filtered = users.filter((u) => u.age > 25);
console.log(filtered);

// total age
let totalAge = users.reduce((acc, u) => acc + u.age, 0);
console.log(totalAge);

// -----------------------------
// INTERVIEW QNA
// -----------------------------

// Q1
console.log([1, 2, 3].map((x) => x + 1)); // [2,3,4]

// Q2
console.log([1, 2, 3].filter((x) => x > 1)); // [2,3]

// Q3
console.log([1, 2, 3].reduce((a, b) => a + b, 0)); // 6

// Q4
console.log(
	[1, 2, 3].map((x) => {
		x * 2;
	}),
); // [undefined,undefined,undefined]

// Q5
console.log([1, 2, 3].map((x) => ({ val: x }))); // [{val:1},{val:2},{val:3}]

// Q6
console.log([1, 2, 3].filter((x) => x)); // [1,2,3]

// Q7
console.log([0, 1, 2].filter(Boolean)); // [1,2]

// Q8
console.log([1, 2, 3].reduce((a, b) => a * b)); // 6

// Q9
let arr9 = [1, 2, 3];
arr9.map((x) => x * 2);
console.log(arr9); // [1,2,3]

// Q10
console.log([1, 2, 3].map(parseInt)); // [1, NaN, NaN]

// Q11
console.log([1, 2, 3].reduce((a, b) => a + b)); // 6

// Q12
console.log([].reduce((a, b) => a + b, 0)); // 0

// Q13
console.log([].map((x) => x)); // []

// Q14
console.log([1, 2, 3].filter((x) => x > 5)); // []

// Q15
let data = [1, 2, 3, 4];
let res = data.filter((x) => x % 2 === 0).map((x) => x * 10);
console.log(res); // [20,40]

// SUMMARY
// map -> transform
// filter -> select
// reduce -> combine to one value
