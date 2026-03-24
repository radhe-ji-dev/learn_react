// ===============================================================
// OOP Concepts in JavaScript (Prototypal, Modern ES6+ WITHOUT CLASSES)
// ===============================================================
// Run: node learn_react/JavaScript/OOPS/oopsConcept.js
// All examples are watchable via console outputs ✅
//
// JS OOP uses: Closures (Encapsulation), Prototypes/Object.create (Inheritance),
// Method overriding (Polymorphism), Factories (Abstraction).

console.log('🟢 OOP in JS (No Classes) Tutorial Starting...\\n');

// ===============================================================
// 1. ENCAPSULATION: Private data via Closures
// ===============================================================
// Hide internal state, expose only methods (improved from clouser_encapulations.js)
console.log('\\n=== 1. ENCAPSULATION ===');

function createUser(name, initialPassword) {
	let _password = initialPassword; // Private (convention: _prefix)
	let _loginCount = 0; // Private counter

	return {
		getName: () => name, // Public getter (arrow fn preserves no 'this')

		checkPassword: (input) => input === _password, // Public method

		login: (input) => {
			if (this.checkPassword(input)) {
				// Can't access _password directly
				_loginCount++;
				console.log(
					`✅ Login successful for ${name} (attempts: ${_loginCount})`,
				);
				return true;
			}
			console.log('❌ Invalid password');
			return false;
		},

		changePassword: (oldPass, newPass) => {
			if (_password === oldPass) {
				_password = newPass;
				console.log(`🔑 Password changed for ${name}`);
				return true;
			}
			return false;
		},

		// Public info about private state (no direct access)
		getLoginCount: () => _loginCount,
	};
}

const user1 = createUser('Alice', 'secret123');
console.log(`Name: ${user1.getName()}`);
console.log(
	`Login: ${user1.login('secret123')} | Count: ${user1.getLoginCount()}`,
);
console.log(`Wrong login: ${user1.login('wrong')}`);
console.log(`Change PW: ${user1.changePassword('secret123', 'newpass456')}`);
console.log(`New login: ${user1.login('newpass456')}`);
// console.log(user1._password); // ❌ undefined (encapsulated!)

console.log('\\n' + '='.repeat(60));

// ===============================================================
// 2. INHERITANCE: Prototypal via Object.create()
// ===============================================================
// Child inherits parent's methods/properties (adapted from object_and_prootoypes.js)
console.log('\\n=== 2. INHERITANCE ===');

const animalProto = {
	speak() {
		console.log(`${this.name} makes a sound.`);
	},
	eat() {
		console.log(`${this.name} is eating.`);
	},
	getBirthYear() {
		return new Date().getFullYear() - this.age;
	},
};

function createAnimal(name, age) {
	// Create object with animalProto as prototype
	const animal = Object.create(animalProto);

	// Instance properties
	animal.name = name;
	animal.age = age;

	return animal;
}

const dog = createAnimal('Buddy', 5);
console.log(`Dog: ${dog.name}, Age: ${dog.age}, Born: ${dog.getBirthYear()}`);
dog.speak(); // Inherited
dog.eat(); // Inherited

console.log('\\nInheritance Chain:');
console.log(`dog.__proto__ === animalProto: ${dog.__proto__ === animalProto}`);
console.log(
	`animalProto.__proto__ === Object.prototype: ${animalProto.__proto__ === Object.prototype}`,
);

console.log('\\n' + '='.repeat(60));

// ===============================================================
// 3. POLYMORPHISM: Method Overriding in Prototype Chain
// ===============================================================
// Same method name, different behavior per 'type'
console.log('\\n=== 3. POLYMORPHISM ===');

const mammalProto = Object.create(animalProto); // mammal inherits animal

mammalProto.speak = function () {
	// Override
	console.log(`${this.name} makes a mammal sound.`);
};
mammalProto.nurse = function () {
	console.log(`${this.name} nurses young.`);
};

function createMammal(name, age) {
	const mammal = Object.create(mammalProto);
	mammal.name = name;
	mammal.age = age;
	return mammal;
}

const lion = createMammal('Simba', 8);
lion.speak(); // Polymorphic: mammal version
lion.eat(); // Inherited from animalProto
lion.nurse(); // Mammal-specific

const bird = createAnimal('Tweety', 2); // No override
bird.speak(); // Original animal version

console.log('\\nPolymorphism verified!');

console.log('\\n' + '='.repeat(60));

// ===============================================================
// 4. ABSTRACTION: Hide complexity with Factories
// ===============================================================
// User doesn't see internal details (higher-order functions)
console.log('\\n=== 4. ABSTRACTION ===');

function createCounter() {
	let count = 0; // Abstracted away

	return {
		increment: () => ++count,
		decrement: () => --count,
		getCount: () => count,
		reset: () => {
			count = 0;
			return 0;
		},
	};
}

const counter = createCounter();
console.log(`Start: ${counter.getCount()}`);
counter.increment();
counter.increment();
console.log(`After ++: ${counter.getCount()}`);
counter.decrement();
console.log(`After --: ${counter.getCount()}`);
counter.reset();
console.log(`Reset: ${counter.getCount()}`);
// counter.count // ❌ undefined (abstracted!)

console.log('\\n' + '='.repeat(60));

// ===============================================================
// 5. FULL EXAMPLE: Shape Hierarchy (All Concepts)
// ===============================================================
// Encapsulation (private area), Inheritance, Polymorphism, Abstraction
console.log('\\n=== 5. FULL EXAMPLE: Shapes ===');

const shapeProto = {
	calculateArea() {
		throw new Error('Must implement calculateArea()'); // Abstract
	},
	describe() {
		return `${this.type}: area=${this.calculateArea().toFixed(2)}`;
	},
};

function createRectangle(width, height) {
	const rect = Object.create(shapeProto);
	rect.type = 'Rectangle';

	let _width = width; // Encapsulated
	let _height = height;

	rect.setDimensions = (w, h) => {
		_width = w;
		_height = h;
	};
	rect.calculateArea = () => _width * _height; // Polymorphic

	return rect;
}

function createCircle(radius) {
	const circle = Object.create(shapeProto);
	circle.type = 'Circle';

	let _radius = radius;

	circle.setRadius = (r) => {
		_radius = r;
	};
	circle.calculateArea = () => Math.PI * _radius ** 2; // Override

	return circle;
}

const rect = createRectangle(5, 3);
const circle = createCircle(4);

console.log(rect.describe()); // Rectangle: area=15.00
console.log(circle.describe()); // Circle: area=50.27
circle.setRadius(5);
console.log(circle.describe()); // Updated: area=78.54

console.log('\\n✅ Full OOP Demo Complete!');

// ===============================================================
// SUMMARY & BEST PRACTICES
// ===============================================================
// - Encapsulation: Closures > symbols/weakmaps (simpler)
// - Inheritance: Object.create() > constructors (cleaner prototypal)
// - Polymorphism: Override on specific protos
// - Abstraction: Factory fns for APIs
// - Modern: Arrow fns, const/let, Object.assign if needed
// - Memory: Nullify closures with large data to avoid leaks
// - Test all in console for watchability ✅

console.log('\\n🎉 OOP Tutorial Complete! Check outputs above.');
