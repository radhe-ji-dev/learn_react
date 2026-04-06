// object

let emp = {
	name: 'ravi',
	age: 23,
	designation: 'Product Manager',
	titile: function (name,designation) {
		return (name + 'The' + this.designation);
	},
};
console.log(emp.name, emp.titile);

// =====================================
// JAVASCRIPT OBJECTS — TRICKY Q&A
// =====================================

// 🔹 Q1: Get all keys
let obj1 = { a: 1, b: 2 };

console.log(Object.keys(obj1));
// ["a", "b"]

// 🔹 Q2: Get all values
console.log(Object.values(obj1));
// [1, 2]

// 🔹 Q3: Get key-value pairs
console.log(Object.entries(obj1));
// [["a",1], ["b",2]]

// 🔹 Q4: Convert object → array and double values
let obj4 = { a: 1, b: 2 };

let res4 = Object.entries(obj4).map(([key, val]) => {
	return [key, val * 2];
});

console.log(Object.fromEntries(res4));
// {a: 2, b: 4}

// 🔹 Q5: Loop over object
let obj5 = { a: 10, b: 20 };

for (let key in obj5) {
	console.log(key, obj5[key]);
}

// 🔹 Q6: Check if key exists
let obj6 = { name: 'RK' };

console.log('name' in obj6); // true

// 🔹 Q7: Merge objects
let o1 = { a: 1 };
let o2 = { b: 2 };

let merged = { ...o1, ...o2 };
// {a:1, b:2}

// 🔹 Q8: Shallow copy
let original = { a: 1 };

let copy = { ...original };
copy.a = 100;

console.log(original.a); // 1 (safe)

// 🔹 Q9: Deep copy (simple way)
let obj9 = { a: { b: 1 } };

let deep = JSON.parse(JSON.stringify(obj9));
deep.a.b = 100;

console.log(obj9.a.b); // 1

// 🔹 Q10: Count properties
let obj10 = { a: 1, b: 2, c: 3 };

let count = Object.keys(obj10).length;

console.log(count); // 3

// 🔹 Q11: Remove property
let obj11 = { a: 1, b: 2 };

delete obj11.b;

console.log(obj11); // {a:1}

// 🔹 Q12: Object → query string
let obj12 = { name: 'RK', age: 25 };

let query = Object.entries(obj12)
	.map(([k, v]) => `${k}=${v}`)
	.join('&');

console.log(query);
// name=RK&age=25

// 🔹 Q13: Sum all values
let obj13 = { a: 10, b: 20, c: 30 };

let sum = Object.values(obj13).reduce((a, b) => a + b, 0);

console.log(sum); // 60

// 🔹 Q14: Filter object
let obj14 = { a: 1, b: 2, c: 3 };

let filtered = Object.fromEntries(
	Object.entries(obj14).filter(([k, v]) => v > 1),
);

console.log(filtered);
// {b:2, c:3}

// 🔹 Q15: Rename keys
let obj15 = { a: 1, b: 2 };

let renamed = Object.fromEntries(
	Object.entries(obj15).map(([k, v]) => [`new_${k}`, v]),
);

console.log(renamed);
// {new_a:1, new_b:2}

// 🔹 Q16: Freeze object
let obj16 = { a: 1 };

Object.freeze(obj16);
obj16.a = 100;

console.log(obj16.a); // still 1

// 🔹 Q17: Seal object
let obj17 = { a: 1 };

Object.seal(obj17);
obj17.a = 2; // allowed
// obj17.b = 3;   ❌ not allowed

// 🔹 Q18: Optional chaining
let obj18 = { a: { b: 10 } };

console.log(obj18?.a?.b); // 10
console.log(obj18?.x?.y); // undefined

// 🔹 Q19: Destructuring
let user = { name: 'RK', age: 25 };

let { name, age } = user;

console.log(name); // RK

// 🔹 Q20: Default values
let { city = 'Udaipur' } = user;

console.log(city); // Udaipur

// =====================================
// 🔥 INTERVIEW SUMMARY
// =====================================

// Object.keys → keys
// Object.values → values
// Object.entries → key-value pairs

// Convert:
// object ↔ array → entries + fromEntries

// IMPORTANT:
// shallow copy vs deep copy
// destructuring
// optional chaining
