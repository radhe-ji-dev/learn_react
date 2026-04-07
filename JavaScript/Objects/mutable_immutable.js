//“Objects are mutable, primitives are immutable in JavaScript.”

// MUTABLE vs IMMUTABLE - SINGLE FILE PRACTICE

// -----------------------------
// 1. PRIMITIVES (IMMUTABLE)
// -----------------------------
let a = 10;
let b = a;

b = 20;

console.log(a); // 10 (original not changed)
console.log(b); // 20

// String example
let str = 'hello';
str[0] = 'H';

console.log(str); // "hello" (no change)

// -----------------------------
// 2. OBJECTS (MUTABLE)
// -----------------------------
let obj1 = { name: 'Rahul' };
let obj2 = obj1;

obj2.name = 'Amit';

console.log(obj1.name); // "Amit" (changed)

// -----------------------------
// 3. ARRAYS (MUTABLE)
// -----------------------------
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]

// -----------------------------
// 4. AVOID MUTATION (CREATE COPY)
// -----------------------------

// Object copy using spread
let user1 = { name: 'Rahul' };
let user2 = { ...user1 };

user2.name = 'Amit';

console.log(user1.name); // "Rahul" (safe)

// Array copy using spread
let nums1 = [1, 2, 3];
let nums2 = [...nums1];

nums2.push(4);

console.log(nums1); // [1, 2, 3]

// -----------------------------
// 5. SHALLOW COPY WARNING
// -----------------------------
let person1 = {
	name: 'Rahul',
	address: { city: 'Udaipur' },
};

let person2 = { ...person1 };

person2.address.city = 'Jaipur';

console.log(person1.address.city); // "Jaipur" (changed due to shallow copy)

// -----------------------------
// 6. DEEP COPY (SAFE)
// -----------------------------
let deep1 = {
	name: 'Rahul',
	address: { city: 'Udaipur' },
};

let deep2 = structuredClone(deep1);

deep2.address.city = 'Jaipur';

console.log(deep1.address.city); // "Udaipur" (safe)

// -----------------------------
// SUMMARY
// -----------------------------
// Primitives -> Immutable
// Objects/Arrays -> Mutable
// Spread -> Shallow copy
// structuredClone -> Deep copy

// -----------------------------
console.log(q2a.x); // ? => 5

// Q3
let q3a = { x: 1 };
let q3b = { ...q3a };
q3b.x = 9;
console.log(q3a.x); // ? => 1

// Q4
let q4a = { x: { y: 1 } };
let q4b = { ...q4a };
q4b.x.y = 7;
console.log(q4a.x.y); // ? => 7 (shallow)

// Q5
let q5a = [1, 2];
let q5b = q5a;
q5b.push(3);
console.log(q5a); // ? => [1,2,3]

// Q6
let q6a = [1, 2];
let q6b = [...q6a];
q6b.push(3);
console.log(q6a); // ? => [1,2]

// Q7
let q7a = [[1]];
let q7b = [...q7a];
q7b[0].push(2);
console.log(q7a); // ? => [[1,2]]

// Q8
let q8a = { a: 1 };
let q8b = { ...q8a, a: 5 };
console.log(q8b.a); // ? => 5

// Q9
let q9a = { a: 1 };
let q9b = { a: 5, ...q9a };
console.log(q9b.a); // ? => 1

// Q10
let q10a = "hello";
q10a[0] = "H";
console.log(q10a); // ? => "hello"

// Q11
let q11a = { arr: [1,2] };
let q11b = { ...q11a };
q11b.arr.push(3);
console.log(q11a.arr); // ? => [1,2,3]

// Q12
let q12a = structuredClone({ x: { y: 1 } });
let q12b = structuredClone(q12a);
q12b.x.y = 10;
console.log(q12a.x.y); // ? => 1

// Q13
function q13(obj) {
  obj.x = 2;
}
let q13a = { x: 1 };
q13(q13a);
console.log(q13a.x); // ? => 2

// Q14
function q14(obj) {
  obj = { x: 5 };
}
let q14a = { x: 1 };
q14(q14a);
console.log(q14a.x); // ? => 1

// Q15
let q15a = { a: { b: 1 } };
let q15b = JSON.parse(JSON.stringify(q15a));
q15b.a.b = 99;
console.log(q15a.a.b); // ? => 1



