// lets show case all methods on array in js

// ======================
// JAVASCRIPT ARRAY METHODS (CHEAT SHEET)
// ======================

// Basic Add/Remove
let arr = [1, 2, 3];

arr.push(4); // [1,2,3,4] (add end)
arr.pop(); // [1,2,3]   (remove end)
arr.shift(); // [2,3]     (remove start)
arr.unshift(1); // [1,2,3]   (add start)

// ======================
// LOOPING & TRANSFORM
// ======================

[1, 2, 3].forEach((x) => console.log(x)); // loop

let mapped = [1, 2, 3].map((x) => x * 2);
// [2,4,6]

let filtered = [1, 2, 3, 4].filter((x) => x > 2);
// [3,4]

let reduced = [1, 2, 3].reduce((a, b) => a + b, 0);
// 6

// ======================
// SEARCHING
// ======================

[1, 2, 3].find((x) => x > 1); // 2
[1, 2, 3].findIndex((x) => x === 2); // 1

[1, 2, 3].includes(2); // true
[1, 2, 3].indexOf(2); // 1
[1, 2, 2].lastIndexOf(2); // 2

// ======================
// ARRAY COPY & MODIFY
// ======================

let a = [1, 2, 3];

a.slice(1); // [2,3] (non-mutating)

a.splice(1, 1); // removes element at index 1 → [1,3]

[1, 2].concat([3, 4]); // [1,2,3,4]

// ======================
// STRING & ORDER
// ======================

[1, 2, 3].join('-'); // "1-2-3"

[1, 2, 3].reverse(); // [3,2,1]

[3, 1, 2].sort(); // [1,2,3] (string sort by default)

// ======================
// FLATTENING
// ======================

[1, [2, 3]].flat(); // [1,2,3]

[1, 2].flatMap((x) => [x, x * 2]); // [1,2,2,4]

// ======================
// CONDITIONS
// ======================

[2, 4, 6].every((x) => x % 2 === 0); // true

[1, 3, 4].some((x) => x % 2 === 0); // true

// ======================
// CREATE & FILL
// ======================

new Array(3).fill(0); // [0,0,0]

Array.from('abc'); // ['a','b','c']

Array.isArray([1, 2]); // true

// ======================
// CONVERSION
// ======================

[1, 2, 3].toString(); // "1,2,3"

// ======================
// BONUS (VERY IMPORTANT)
// ======================

// Slice vs Splice
let x = [1, 2, 3, 4];

x.slice(1, 3); // [2,3] (does NOT change original)

x.splice(1, 2); // removes [2,3] (changes original)

// map vs forEach
// map → returns new array
// forEach → does not return anything

// find vs filter
// find → first match
// filter → all matches


// now map reduce filter


// =====================================
// MAP | FILTER | REDUCE — TRICKY Q&A
// =====================================


// 🔹 Q1: Double only even numbers
let arr1 = [1,2,3,4,5];

let res1 = arr1
  .filter(x => x % 2 === 0)
  .map(x => x * 2);

console.log(res1); // [4, 8]


// 🔹 Q2: Sum of all numbers
let arr2 = [1,2,3,4];

let sum = arr2.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 10


// 🔹 Q3: Count occurrences
let arr3 = ["a","b","a","c","b","a"];

let count = arr3.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(count); 
// { a: 3, b: 2, c: 1 }


// 🔹 Q4: Flatten array
let arr4 = [[1,2], [3,4], [5]];

let flat = arr4.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1,2,3,4,5]


// 🔹 Q5: Get names of adults
let users = [
  {name: "A", age: 17},
  {name: "B", age: 22},
  {name: "C", age: 30}
];

let adults = users
  .filter(u => u.age >= 18)
  .map(u => u.name);

console.log(adults); // ["B", "C"]


// 🔹 Q6: Find max number
let arr6 = [5, 10, 2, 8];

let max = arr6.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
}, arr6[0]);

console.log(max); // 10


// 🔹 Q7: Remove duplicates
let arr7 = [1,2,2,3,4,4];

let unique = arr7.reduce((acc, curr) => {
  if(!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);

console.log(unique); // [1,2,3,4]


// 🔹 Q8: Group by property
let people = [
  {name: "A", age: 20},
  {name: "B", age: 20},
  {name: "C", age: 25}
];

let grouped = people.reduce((acc, person) => {
  let key = person.age;
  if(!acc[key]) acc[key] = [];
  acc[key].push(person);
  return acc;
}, {});

console.log(grouped);
// {20: [...], 25: [...]}


// 🔹 Q9: Total price of cart
let cart = [
  {price: 100, qty: 2},
  {price: 200, qty: 1}
];

let total = cart.reduce((acc, item) => {
  return acc + item.price * item.qty;
}, 0);

console.log(total); // 400


// 🔹 Q10: Chain all 3 (important)
let arr10 = [1,2,3,4,5,6];

// sum of squares of odd numbers
let result = arr10
  .filter(x => x % 2 !== 0) // [1,3,5]
  .map(x => x * x)          // [1,9,25]
  .reduce((a,b) => a + b, 0); // 35

console.log(result);


// 🔹 Q11: Why map returns undefined?
let wrong = [1,2,3].map(x => { x * 2 });
console.log(wrong); // [undefined, undefined, undefined]

// ✅ Fix:
let correct = [1,2,3].map(x => x * 2);


// 🔹 Q12: Reduce without initial value
let arr12 = [1,2,3];

let res12 = arr12.reduce((acc, curr) => acc + curr);

console.log(res12); // 6
// acc starts from first element


// 🔹 Q13: Convert array to object
let arr13 = ["a","b","c"];

let obj = arr13.reduce((acc, curr, index) => {
  acc[curr] = index;
  return acc;
}, {});

console.log(obj); 
// { a:0, b:1, c:2 }


// 🔹 Q14: Filter falsy values
let arr14 = [0, 1, false, 2, "", 3];

let clean = arr14.filter(Boolean);

console.log(clean); // [1,2,3]


// 🔹 Q15: Sum of nested array
let arr15 = [[1,2], [3,4]];

let sum15 = arr15
  .flat()
  .reduce((a,b) => a + b, 0);

console.log(sum15); // 10



// =====================================
// 🔥 INTERVIEW SUMMARY
// =====================================

// map → transform (same length)
// filter → select (subset)
// reduce → single value (powerful)

// MOST IMPORTANT:
// chaining + reduce patterns