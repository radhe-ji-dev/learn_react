// ===============================================================
// JavaScript Objects - Complete Tutorial
// ===============================================================
 
// 1. Creating Objects using Object Literals (Most Common Way)
let person = {
    name: "John Doe",
    age: 30,
    city: "New York",
    greet: function() {
        console.log(`Hello, I'm ${this.name} from ${this.city}`);
    }
};

console.log("=== Object Literal ===");
console.log(person);
console.log("Person name:", person.name);
console.log("Person age:", person["age"]); // Bracket notation for dynamic keys
person.greet();

// 2. Adding/Modifying Properties
person.job = "Developer";
person["salary"] = 75000;
console.log("\n=== After Adding Properties ===");
console.log(person);

// 3. Deleting Properties
delete person.salary;
console.log("\n=== After Deleting Property ===");
console.log(person);

// 4. Nested Objects
person.address = {
    street: "123 Main St",
    zip: 10001
};
console.log("\n=== Nested Object ===");
console.log(person.address);
console.log(person["address"]["street"]);

// 5. Methods (Functions as Object Properties)
person.updateAge = function(newAge) {
    this.age = newAge;
    console.log(`Updated age to ${this.age}`);
};
person.updateAge(31);

// 6. 'this' keyword refers to the current object
console.log("\n=== 'this' keyword ===");
console.log(`Current age: ${person.age}`);

// 7. ES6 Shorthand Properties
let name = "Jane";
let age = 25;
let user = { name, age }; // Shorthand
console.log("\n=== ES6 Shorthand ===");
console.log(user);

// 8. Computed Property Names (ES6)
let propName = "dynamicKey";
let computedObj = {
    [`${propName}Value`]: "Dynamic Value",
    [2 * 2]: "Math Key"
};
console.log("\n=== Computed Properties ===");
console.log(computedObj);

// 9. Factory Function to Create Objects
function createPerson(name, age) {
    return {
        name,
        age,
        introduce: () => `Hi, I'm ${name}, ${age} years old`
    };
}

let factoryPerson = createPerson("Alice", 28);
console.log("\n=== Factory Function ===");
console.log(factoryPerson);
console.log(factoryPerson.introduce());

// 10. Constructor Function (for multiple similar objects)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello from ${this.name}`);
    };
}

let person1 = new Person("Bob", 35);
let person2 = new Person("Carol", 29);
console.log("\n=== Constructor Function ===");
console.log(person1);
person1.greet();
console.log(person2);

// 11. Object Prototype Basics
Person.prototype.getYearBorn = function() {
    return new Date().getFullYear() - this.age;
};

console.log("\n=== Prototype Method ===");
console.log(`Bob born in: ${person1.getYearBorn()}`);

// 12. Common Methods
console.log("\n=== Object Methods ===");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries({a:1, b:2}));

// Note: For deep/shallow copy, see deepCopyShallow.js
// For advanced OOP (classes), see static_dynamic_function.js

// Run this file: node learn_react/JavaScript/OOPS/basicObject.js

