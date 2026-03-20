// ===============================================================
// JavaScript Object Prototypes - Detailed Tutorial
// ===============================================================
//
// Every object in JS has a prototype. Prototypes enable inheritance.
// Each object inherits properties/methods from its prototype.
// [[Prototype]] is the internal link to prototype object.
// Use __proto__ (deprecated, for demo), Object.getPrototypeOf(), Object.setPrototypeOf()

console.log("=== 1. Understanding Object Prototype Chain ===");
// All objects inherit from Object.prototype
let obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
console.log(obj.toString()); // Inherited from Object.prototype

// Prototype Chain: obj -> Object.prototype -> null

// 2. Constructor Functions and Prototypes
function Animal(name) {
    this.name = name;
}

// Animal.prototype is shared by all Animal instances
Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

let dog = new Animal("Buddy");
let cat = new Animal("Whiskers");

console.log("=== 2. Constructor Prototype ===");
dog.speak(); // Buddy makes a sound.
cat.speak(); // Whiskers makes a sound.

console.log(dog.hasOwnProperty("speak")); // false (inherited)
console.log("speak" in dog); // true (in prototype chain)

// Modifying prototype affects all instances
Animal.prototype.eat = function() {
    console.log(`${this.name} is eating.`);
};
dog.eat(); // Works for existing instances too!

// 3. Prototype Chain in Action
function Mammal(name) {
    Animal.call(this, name); // Inherit constructor
}
Mammal.prototype = Object.create(Animal.prototype); // Inherit prototype
Mammal.prototype.constructor = Mammal;

let lion = new Mammal("Simba");
console.log("\n=== 3. Inheritance Chain ===");
console.log(Object.getPrototypeOf(lion) === Mammal.prototype); // true
console.log(Object.getPrototypeOf(Mammal.prototype) === Animal.prototype); // true
lion.speak(); // Inherited from Animal
lion.eat(); // Inherited

// 4. __proto__ (Avoid in production, demo only)
console.log("\n=== 4. __proto__ Demo ===");
console.log(lion.__proto__ === Mammal.prototype); // true
console.log(lion.__proto__.__proto__ === Animal.prototype); // true

// 5. Object.create() for Prototypes
let customProto = {
    greet() {
        console.log(`Hi from prototype!`);
    }
};
let myObj = Object.create(customProto);
myObj.greet(); // Inherited

// 6. hasOwnProperty, isPrototypeOf, propertyIsEnumerable
console.log("\n=== 6. Prototype Methods ===");
console.log(dog.hasOwnProperty("name")); // true (own property)
console.log(dog.hasOwnProperty("speak")); // false
console.log(Animal.prototype.isPrototypeOf(dog)); // true
console.log(Object.prototype.isPrototypeOf(dog)); // true

// 7. Overriding Prototype Methods
Mammal.prototype.speak = function() {
    console.log(`${this.name} roars!`);
};
lion.speak(); // Overridden: Simba roars!

// 8. Don't Enumerate Inherited Properties
for (let prop in lion) {
    console.log(prop); // Only own properties: name
}
// Use hasOwnProperty to filter
for (let prop in lion) {
    if (lion.hasOwnProperty(prop)) {
        console.log(`Own: ${prop}`);
    }
}

// 9. Object.getPrototypeOf / setPrototypeOf (Modern)
let newObj = Object.create(null); // No prototype
console.log(Object.getPrototypeOf(newObj)); // null

let proto = {};
let obj2 = Object.create(proto);
Object.setPrototypeOf(obj2, null); // Change prototype
console.log(Object.getPrototypeOf(obj2)); // null

// 10. Practical Example: Extending Built-ins (Careful!)
Array.prototype.first = function() {
    return this[0];
};
console.log("\n=== 10. Extending Array ===");
console.log([1,2,3].first()); // 1 (shared by all arrays)

// WARNING: Don't extend built-ins in production (pollutes global scope)

// 11. Classes (ES6 Sugar over Prototypes)
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} flies!`);
    }
}
Bird.prototype.swim = function() { // Still accessible
    console.log(`${this.name} swims.`);
};

let eagle = new Bird("Eagle");
console.log("\n=== 11. ES6 Classes ===");
eagle.fly();
eagle.swim();

console.log("\nPrototype Chain Summary:");
console.log("eagle -> Bird.prototype -> Object.prototype -> null");

// Run: node learn_react/JavaScript/OOPS/object_and_prootoypes.js

