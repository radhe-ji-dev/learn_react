//================================//

// Create a user object with name, age, and city. Update age and add isAdmin key.

// Create object using variable as key name dynamically.

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

// Print all keys and values of an object.

for (i of Object.entries(emp2)) {
	console.log(i);
}

// Create function to count total keys in object.

c = 0;
for (i of Object.entries(emp2)) {
	c = c + 1;
}
console.log(c);

// Merge two different objects into one object.

const emp3 = { ...emp1, ...emp2 };
console.log(emp3);

const emp4 = Object.assign(emp1, emp2);
console.log(emp4);
console.log(emp2?.addres);

// Access deeply nested object values safely.

// Convert object into array of key-value pairs.

let arrobj = [];

for (i of Object.entries(emp1)) {
	arrobj.push(i);
}

console.log(arrobj);

// Convert array into object using reduce.

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

// Remove duplicate objects from array using unique id.

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

// Group array data into object categories.
const birds = ['parrot', 'mayna', 'bat'];

// Extract object properties into variables.

const empname = emp1.name;
const empmail = emp2.mail;
console.log(empname, empmail);

// Extract nested object values directly.

const city = emp2?.addres?.city;
console.log(city);

// Create shallow and deep copy and observe changes.

const copyobj = emp2;
console.log(copyobj);
emp2.addres.city = 'jodhpur';
console.log(copyobj);

// Prevent object modification using Object.freeze().

//Object.freeze(emp2)
emp2.name = 'rk';
console.log(emp2);

// Prevent adding/removing properties using Object.seal().

//Object.seal(emp1)

// Check if key exists in object.

console.log(Object.hasOwn(emp1, 'name'));

// Remove specific property from object.

delete emp3.mail;
console.log(emp3);

// Sort array of objects by age or name.
let arrObj = [
	{ name: 'jay', age: 24 },
	{ name: 'ramesh', age: 40 },
];

arrObj.sort((a, b) => b.age - a.age);

console.log(arrObj);

// Find object with highest salary/marks from array.

let oldestPerson = arrObj.reduce((max, person) => {
	return person.age > max.age ? person : max;
});
console.log(oldestPerson);

// Convert all object keys to uppercase/lowercase.



// Reverse object keys and values.

// Check if two objects are equal.

// Clone deeply nested object safely.

// Create object dynamically from input fields.

// Return object with only selected properties.

// Convert object into URL query params.

// Count repeated elements using object.

// Convert nested object into single-level object.

// Add methods/functions inside object.

// Practice how this behaves in objects.

// Create objects using constructor functions.

// Add shared methods using prototype.

// Create objects using ES6 classes.

// Loop and transform object using entries.

// Calculate sum from object values.

// Extract and manipulate object keys.

// Merge deeply nested objects.

// Convert object to JSON and back.

// Build small inventory object system.
