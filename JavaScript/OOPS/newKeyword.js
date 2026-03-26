/* 
===============================================================
NEW KEYWORD IN JAVASCRIPT - COMPLETE TUTORIAL WITH USE CASES
===============================================================

The 'new' keyword is fundamental for Object-Oriented Programming (OOP) in JS. 
It creates an instance of a constructor function, simulating classes pre-ES6.

=== WHAT HAPPENS WHEN YOU USE 'new'? (Step-by-step) ===
1. Creates an EMPTY object {}
2. Sets 'this' to point to this new object
3. Links the prototype: obj.__proto__ = Constructor.prototype
4. Executes the constructor body (with 'this' bound)
5. If constructor returns an OBJECT, returns that; else returns the new obj

Use 'new' for REUSABLE object blueprints (constructors).

*/

// SECTION 1: BASIC EXAMPLE - Person Constructor
function Person(name, age) {
	// 'this' refers to the new object created by 'new'
	this.name = name;
	this.age = age;
	this.sayHello = function () {
		console.log(`Hi, I'm ${this.name}, ${this.age} years old`);
	};
}

// Creating instances
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

person1.sayHello(); // Hi, I'm Alice, 30 years old
person2.sayHello(); // Hi, I'm Bob, 25 years old
console.log(person1.name); // Alice (unique instance property)

// Each instance has its own 'this' context - independent state!

/* 
USE CASE 1: Creating Multiple Similar Objects
- Perfect for entities like Users, Products, Employees.
- Avoids code duplication vs copy-pasting objects.
*/

// SECTION 2: PROTOTYPES - Shared Methods (Memory Efficient)
Person.prototype.greet = function () {
	console.log(`Hello from prototype: ${this.name}`);
};

Person.prototype.getAgeGroup = function () {
	return this.age > 25 ? 'Adult' : 'Young';
};

person1.greet(); // Hello from prototype: Alice (shared method)
person2.getAgeGroup(); // Young

console.log(person1.__proto__ === Person.prototype); // true

/*
EXPLANATION:
- Methods on prototype are SHARED across instances.
- Saves memory (no duplication per instance).
- Use prototype for METHODS/BEHAVIORS, 'this' properties for unique DATA.
*/

// SECTION 3: ADVANCED - Constructor Returning Objects
function WeirdConstructor(name) {
	this.name = name;
	// If return plain object, it overrides 'this'!
	return { special: true, name: 'Overridden!' };
}

const weird = new WeirdConstructor('Test');
console.log(weird); // {special: true, name: 'Overridden!'} (ignores 'this')

/*
RULE:
- Constructors should return PRIMITIVES or NOTHING (default to 'this').
- Explicit object return hijacks the result.
*/

// SECTION 4: Common Pitfalls & Mistakes
// ❌ FORGETTING 'new' - 'this' becomes global/undefined (strict mode)
function BadPerson(name) {
	// No 'new'
	this.name = name; // Pollutes global!
}
BadPerson('Victim');
console.log(typeof window !== 'undefined' ? window.name : 'undefined'); // 'Victim' (bad!)

// ✅ Always use 'new'
const good = new Person('Safe', 28);

// ❌ Arrow functions CANNOT be constructors (no 'this' binding)
const ArrowPerson = (name) => {
	// this.name = name; // 'this' is lexical, won't work!
};
new ArrowPerson('Nope'); // Throws error

/*
BEST PRACTICE:
- Name constructors with Capital letter (Person vs helper).
- Validate inputs: if (!name) throw new Error('Name required');
*/

// SECTION 5: Polyfill - Implement 'new' Yourself!
function myNew(Constructor, ...args) {
	// Step 1: Create empty obj
	const obj = {};
	// Step 2: Set prototype
	obj.__proto__ = Constructor.prototype;
	// Step 3: Apply constructor with 'this' = obj
	const result = Constructor.apply(obj, args);
	// Step 4: Return object if returned
	return typeof result === 'object' && result !== null ? result : obj;
}

// Test
const polyPerson = myNew(Person, 'Poly', 40);
polyPerson.sayHello(); // Works!

/*
CUSTOM 'new' UNDERSTANDING:
- Reveals internal magic.
- Useful for interviews/custom factories.
*/

// SECTION 6: USE CASES IN REAL APPS
/*
1. DOM Elements: new Date(), new Array(), new Map()
2. Custom Models: User, TodoItem in apps
3. Plugins: new Chart(config)
4. Games: new Player(x, y), new Enemy()
5. Pre-ES6 Classes: Mimics class instances
*/

// SECTION 7: EXERCISES - Try These!
/*
1. Create Car constructor: make, model, drive() method on prototype.
2. Fix BadPerson to auto-use 'new' (bind or wrapper).
3. Create Counter constructor where instances share increment method but private count.
*/

// Run in console/browser devtools to test!
// Next: Check object_proto.js for deeper prototype chain.
