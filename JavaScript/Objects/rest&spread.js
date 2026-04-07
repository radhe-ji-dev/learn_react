let a = [1, 2];
let b = [...a, 3];

console.log(b); // [1, 2, 3]
// expans

function sum(...nums) {
  console.log(nums);
}

sum(1, 2, 3); // [1, 2, 3]

// collects


// ADVANCED REST & SPREAD - INTERVIEW QNA

// Q1
let a1 = { x: 1 };
let b1 = { ...a1 };
b1.x = 5;
console.log(a1.x); // ? => 1

// Q2
let a2 = { x: { y: 1 } };
let b2 = { ...a2 };
b2.x.y = 5;
console.log(a2.x.y); // ? => 5 (shallow copy)

// Q3
let arr3 = [1, 2, 3];
let copy3 = [...arr3];
copy3[0] = 10;
console.log(arr3[0]); // ? => 1

// Q4
let arr4 = [[1], [2]];
let copy4 = [...arr4];
copy4[0].push(99);
console.log(arr4[0]); // ? => [1, 99]

// Q5
function test5(a, b, ...rest) {
  return rest;
}
console.log(test5(1, 2, 3, 4)); // ? => [3, 4]

// Q6
let obj6 = { a: 1, b: 2 };
let newObj6 = { ...obj6, a: 10 };
console.log(newObj6.a); // ? => 10

// Q7
let obj7 = { a: 1, b: 2 };
let newObj7 = { a: 10, ...obj7 };
console.log(newObj7.a); // ? => 1

// Q8
function sum8(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sum8(1, 2, 3)); // ? => 6

// Q9
let [a9, ...rest9] = [10, 20, 30, 40];
console.log(rest9); // ? => [20, 30, 40]

// Q10
let obj10 = { a: 1, b: 2, c: 3 };
let { a: x10, ...rest10 } = obj10;
console.log(rest10); // ? => { b: 2, c: 3 }

// Q11
let obj11 = { a: 1 };
let obj12 = { b: 2 };
let merged11 = { ...obj11, ...obj12 };
console.log(merged11); // ? => { a: 1, b: 2 }

// Q12
let obj13 = { a: 1, b: 2 };
let obj14 = { b: 5, c: 6 };
let merged12 = { ...obj13, ...obj14 };
console.log(merged12); // ? => { a: 1, b: 5, c: 6 }

// Q13
let arr13 = [1, 2];
let arr14 = [3, 4];
let mergedArr13 = [...arr13, ...arr14];
console.log(mergedArr13); // ? => [1, 2, 3, 4]

// Q14
let obj15 = { a: 1 };
let newObj15 = { ...obj15, b: 2, a: 5 };
console.log(newObj15); // ? => { a: 5, b: 2 }

// Q15
function test15(...args) {
  return args[0];
}

let values15 = [100, 200, 300];
console.log(test15(...values15)); // ? => 100

// SUMMARY:
// Spread = expand / copy (shallow)
// Rest = collect into array
// Order matters in objects
// Nested objects are shared in spread
