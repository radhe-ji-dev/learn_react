// explore deep copy and shallow copy and call by reference and values

let a = 10;

function change(x) {
	x = 20;
}

change(a);

console.log(a); // 10 (no change)

let obj = { name: 'Rahul' };

function change(o) {
	o.name = 'Amit';
}

change(obj);

console.log(obj.name); // Amit (changed)

// here we can no change bcz Reference copy changed, not original

function change(o) {
	o = { name: 'New' };
}

change(obj);

console.log(obj.name); // Rahul (no change)d

// deep copy and shallow copy

let emp1 = {
	name: 'rahul',
	city: 'udaipur',
	address: {
		area: 'sector 14',
	},
};

console.log(emp1);

let emp2 = { ...emp1 };

console.log(emp2);

// lets make chages in copied obj

emp2.name = 'amit';
emp2.city = 'jaipur';
emp2.address.area = 'vaishali';

console.log('copied adn modified obj', emp2);
console.log('lets check origal obj', emp1);
// so thats wiered area is changed in original

// maually create a deep copy
function deepCopy(obj) {
	let copy = {};

	for (let key in obj) {
		if (typeof obj[key] === 'object' && obj[key] !== null) {
			copy[key] = deepCopy(obj[key]);
		} else {
			copy[key] = obj[key];
		}
	}

	return copy;
}

// using library functions

let copy = structuredClone(emp1);
console.log(copy);
