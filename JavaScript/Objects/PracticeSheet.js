// here we are addd qna for final practice

//Here are 10 progressively useful JavaScript object tasks focused on **real interview patterns**.
/*These cover: object creation, dynamic keys, nested objects, loops, destructuring, cloning, merging, transformations, and common tricky concepts.

---

# 1. Create a User Object

### Task

Create an object for a user with:

* name
* age
* city

Then:

* print all values
* update age
* add new key `isAdmin`

### Example

```js
{
  name: "Rahul",
  age: 22,
  city: "Udaipur"
}
```
*/

const emp = {
	name: 'ram',
	age: 23,
};

console.log(emp);
emp.age = 56;
console.log(emp.age);

/*



### Interview Concepts

* Object basics
* Dot notation
* Bracket notation
* Mutation

---

# 2. Dynamic Key Creation

### Task

Take values from variables and create object dynamically.

### Example

```js
const key = "email";
const value = "rk@gmail.com";
```

Expected:

```js
{
  email: "rk@gmail.com"
}
```

### Interview Concepts

* Computed properties
* Dynamic objects

---

*/

const key = 'name';
const value = 'ram';

const emp2 = {
	[key]: value,
};

console.log(emp2);

/*


# 3. Loop Through Object

### Task

Given an object:

```js
const student = {
  name: "RK",
  age: 21,
  course: "BCA"
};
```

Print:

```txt
name -> RK
age -> 21
course -> BCA
```

### Interview Concepts

* `for...in`
* `Object.keys()`
* `Object.values()`
* `Object.entries()`

---

*/
const student = {
	name: 'RK',
	age: 21,
	course: 'BCA',
};

for (i in Object.keys(student)) {
	console.log(Object.keys(student)[i]);
}

/*

# 4. Count Object Keys

### Task

Write function:

```js
countKeys(obj)
```

Return total keys.

### Example

```js
countKeys({a:1,b:2,c:3})
// 3
```

### Interview Concepts

* `Object.keys(obj).length`

---



*/

console.log('count key', Object.keys(student).length);

/*
# 5. Merge Two Objects

### Task

Merge:

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
```

Expected:

```js
{
  a:1,
  b:2,
  c:3,
  d:4
}
```

### Interview Concepts

* Spread operator

```js
{ ...obj1, ...obj2 }
```

* `Object.assign()`

---


*/
const merjobj = { ...student, ...emp };
console.log(merjobj);

/*
# 6. Deep Access Nested Object

### Task

Get user's city from:

*/
const user = {
	name: 'RK',
	address: {
		city: 'Jaipur',
		state: 'Rajasthan',
	},
};

console.log(user.address.city);
// for optional chaining
console.log(user?.address?.city);

/*
### Bonus

Handle safely if object missing.

### Interview Concepts

* Nested objects
* Optional chaining

```js
user?.address?.city
```

---

# 7. Convert Object to Array

### Task

Convert:

```js
{
  name: "RK",
  age: 22
}
```

Into:

```js
[
  ["name", "RK"],
  ["age", 22]
]
```

### Interview Concepts

* `Object.entries()`

---

*/
let arr = [];
arr.push(Object.entries(student));
console.log(arr);

/*

# 8. Remove Duplicate Objects from Array

### Task

Given:

```js
const users = [
  { id: 1, name: "RK" },
  { id: 2, name: "Sam" },
  { id: 1, name: "RK" }
];
```

Remove duplicates using `id`.

### Interview Concepts

* Objects + arrays
* `Map`
* `reduce`
* Interview favorite

---

*/
const userlist = [
	{ id: 1, name: 'RK' },
	{ id: 2, name: 'Sam' },
	{ id: 1, name: 'RK' },
];

const uniqueUsers = userlist.filter(
	// important
	(user, index, self) =>
		index === self.findIndex((u) => u.id === user.id && u.name === user.name),
);

console.log(uniqueUsers);

/*

# 9. Group Data Using Objects

### Task

Convert:

```js
const products = [
  { category: "electronics", name: "Phone" },
  { category: "clothes", name: "Shirt" },
  { category: "electronics", name: "Laptop" }
];
```

Into:

```js
{
  electronics: ["Phone", "Laptop"],
  clothes: ["Shirt"]
}
```

### Interview Concepts

* Object accumulation
* Reduce
* Dynamic keys

---

*/

const products = [
	{ category: 'electronics', name: 'Phone' },
	{ category: 'clothes', name: 'Shirt' },
	{ category: 'electronics', name: 'Laptop' },
];

const groupedData = products.reduce((acc, curr) => {
	// if category not present create empty array
	if (!acc[curr.category]) {
		acc[curr.category] = [];
	}

	// push product name into category array
	acc[curr.category].push(curr.name);

	return acc;
}, {});

console.log(groupedData);

/*

# 10. Shallow Copy vs Deep Copy

### Task

Create:

```js
const user = {
  name: "RK",
  address: {
    city: "Udaipur"
  }
};
```

Make:

* shallow copy
* deep copy

Then modify nested object and observe difference.

### Interview Concepts

Very important interview topic.

* Spread operator = shallow copy
* `structuredClone()`
* JSON methods limitations

---

*/
// shallow copy

const studentC = {
	name: 'RK',
	age: 22,
	address: {
		city: 'Jaipur',
		state: 'Rajasthan',
	},
	skills: ['JS', 'React'],
};

console.log('Original Student');
console.log(studentC);

// ---------------- SHALLOW COPY ----------------

const shallowCopy = { ...studentC };

console.log('\nShallow Copy');
console.log(shallowCopy);

// change primitive value
shallowCopy.name = 'Sam';

// change nested object value
shallowCopy.address.city = 'Delhi';

// change array value
shallowCopy.skills.push('NodeJS');

console.log('\nAfter Changing shallowCopy');
console.log('shallowCopy =>', shallowCopy);

console.log('\nOriginal student after shallow copy changes');
console.log(studentC);

// ---------------- DEEP COPY ----------------

const deepCopy = structuredClone(studentC);

console.log('\nDeep Copy');
console.log(deepCopy);

// change primitive
deepCopy.name = 'Rocky';

// change nested object
deepCopy.address.city = 'Mumbai';

// change array
deepCopy.skills.push('MongoDB');

console.log('\nAfter Changing deepCopy');
console.log('deepCopy =>', deepCopy);

console.log('\nOriginal student after deep copy changes');
console.log(studentC);

/*



# Bonus Interview-Level Tasks

## A. Object Destructuring

Extract:

```js
const user = {
  name: "RK",
  age: 22
};
```

Into variables.

---

*/

let a,
	b = [user.name, user.address];

console.log(a, b);

/*

## B. Freeze Object

Use:

```js
Object.freeze()
```

Understand immutability.

---

## C. Compare Two Objects

Why:

```js
{} === {}
```

*/

// why they are false bcz objet are compared by refrence
console.log(studentC === student);

