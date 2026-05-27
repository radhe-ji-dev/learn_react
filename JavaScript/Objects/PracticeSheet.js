//================================//

// 1. Create a user object with name, age, and city. Update age and add isAdmin key.

// 2. Create object using variable as key name dynamically.

const emp1 = {
	name: 'jay',
	mail: 'rktiwadi@gmailcom',
	addres: {
		city: 'jaipur',
		pin: '302021',
	},
};

const emp2 = {
	name: 'ram',
	mail: 'ram@mail.com',
	addres: {
		city: 'jaipur',
		pin: '302021',
	},
};

// 3. Print all keys and values of an object.

for (i of Object.entries(emp2)) {
	console.log(i);
}

// 4. Create function to count total keys in object.

c = 0;

for (i of Object.entries(emp2)) {
	c = c + 1;
}
console.log(c);

// 5. Merge two different objects into one object.

const emp3 = { ...emp1, ...emp2 };

console.log(emp3);

const emp4 = Object.assign(emp1, emp2);
console.log(emp4);
console.log(emp2?.addres);

// 6. Access deeply nested object values safely.

// 7. Convert object into array of key-value pairs.

let arrobj = [];

for (i of Object.entries(emp1)) {
	arrobj.push(i);
}

console.log(arrobj);

// 8. Convert array into object using reduce.

const arr = [
	['name', 'Rahul'],
	['age', 22],
	['city', 'Jaipur'],
];

const obj = arr.reduce((acc, curr) => {
	acc[curr[0]] = curr[1];
	return acc;
}, {});

console.log(obj);

// 9. Remove duplicate objects from array using unique id.

const dupeemp2 = {
	name: 'ram',
	mail: 'ram@mail.com',
	addres: {
		city: 'jaipur',
		pin: '302021',
	},
	name: 'jay',
};

const revdupe = {};

// 10. Group array data into object categories.

const birds = ['parrot', 'mayna', 'bat'];

// 11. Extract object properties into variables.

const empname = emp1.name;
const empmail = emp2.mail;
console.log(empname, empmail);

// 12. Extract nested object values directly.

const city = emp2?.addres?.city;

console.log(city);

// 13. Create shallow and deep copy and observe changes.

const copyobj = emp2;

console.log(copyobj);
emp2.addres.city = 'jodhpur';
console.log(copyobj);

// 14. Prevent object modification using Object.freeze().

//Object.freeze(emp2)

emp2.name = 'rk';
console.log(emp2);

// 15. Prevent adding/removing properties using Object.seal().

// Object.seal(emp1)

// 16. Check if key exists in object.

console.log(Object.hasOwn(emp1, 'name'));

// 17. Remove specific property from object.

delete emp3.mail;

console.log(emp3);

// 18. Sort array of objects by age or name.

let arrObj = [
	{ name: 'jay', age: 24 },
	{ name: 'ramesh', age: 40 },
];

arrObj.sort((a, b) => b.age - a.age);

console.log(arrObj);

// 19. Find object with highest salary/marks from array.

let oldestPerson = arrObj.reduce((max, person) => {
	return person.age > max.age ? person : max;
});
console.log(oldestPerson);

// 20. Convert all object keys to uppercase/lowercase.

// 21. Reverse object keys and values.
// Swap key/value pairs (value becomes key)

const reversedEmp2 = Object.fromEntries(
	Object.entries(emp2).map(([key, val]) => [val, key]),
);

console.log(reversedEmp2);

//console.log(emp1);

// 22. Check if two objects are equal.

console.log(emp1 === emp2);

// 23. Clone deeply nested object safely.

// 24. Create object dynamically from input fields.

// 25. Return object with only selected properties.

// 26. Convert object into URL query params.

// 27. Count repeated elements using object.

// 28. Convert nested object into single-level object.

function flattenObject(obj, parentKey = '', res = {}) {
	for (const [key, value] of Object.entries(obj)) {
		const newKey = parentKey ? `${parentKey}.${key}` : key;

		// Recurse only for plain nested objects (not arrays, not null)
		if (
			value &&
			typeof value === 'object' &&
			!Array.isArray(value) &&
			Object.getPrototypeOf(value) === Object.prototype
		) {
			flattenObject(value, newKey, res);
		} else {
			res[newKey] = value;
		}
	}
	return res;
}

const flatobj = flattenObject(emp1);
console.log(flatobj);

// 29. Add methods/functions inside object.
const emp5 = {
	name: 'jay',
	mail: 'rktiwadi@gmailcom',
	addres: {
		city: 'jaipur',
		pin: '302021',
	},
	greet() {
		console.log(`Hello, my name is ${this.name}`);
	},
};

emp5.greet();

// 30. Practice how this behaves in objects.

//now for this in object method, it will refer to the object itself
//but if we use arrow function, it will refer to the global object (window in browser)
const emp6 = {
	name: 'jay',
	mail: 'rktiwadi@gmailcom',
	addres: {
		city: 'jaipur',
		pin: '302021',
	},
	greet: () => {
		console.log(`Hello, my name is ${this.name}`);
	},
};
emp6.greet();

// 31. Create objects using constructor functions.

function Employee(name, mail, city) {
	this.name = name;
	this.mail = mail;
	this.city = city;
}

const emp7 = new Employee('jay', 'rktiwadi@gmailcom', 'jaipur');
console.log(emp7);

// 32. Add shared methods using prototype.

Employee.prototype.greet = function () {
	console.log(`Hello, my name is ${this.name}`);
};

emp7.greet();

// 33. Create objects using ES6 classes.

class EmployeeClass {
	constructor(name, mail, city) {
		this.name = name;
		this.mail = mail;
		this.city = city;
	}
	greet() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

const emp8 = new EmployeeClass('jay', 'rktiwadi@gmailcom', 'jaipur');
emp8.greet();

// 34. Loop and transform object using entries.

for (i of Object.entries(emp8)) {
	console.log(i);
}

// 35. Calculate sum from object values.
const salary = {
	emp1: 50000,
	emp2: 60000,
	emp3: 55000,
};
const totalSalary = Object.values(salary).reduce((acc, curr) => acc + curr, 0);
console.log(totalSalary);

// 36. Extract and manipulate object keys.
const keys = Object.keys(emp8);
const upperKeys = keys.map((key) => key.toUpperCase());
console.log(upperKeys);

// 37. Merge deeply nested objects.
const obj1 = {
	name: 'jay',
	details: {
		age: 24,
		city: 'jaipur',
	},
};

const obj2 = {
	mail: 'rktiwadi@gmailcom',
	details: {
		pin: '302021',
	},
};

const mergedObj = {
	...obj1,
	...obj2,
	details: {
		...obj1.details,
		...obj2.details,
	},
};
console.log(mergedObj);

// 38. Convert object to JSON and back.

const jsonString = JSON.stringify(emp8);
console.log(jsonString);
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj);

// 39. Build small inventory object system.
