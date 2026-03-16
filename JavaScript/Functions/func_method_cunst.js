// function method and constructor

// function method
function add(a, b) {
	return a + b;
}

// invking functionas methogod of an object
const calculator = {
	add: function (a, b) {
		return a + b;
	},
	multi: function (a, b) {
		return a * b;
	},
};

// now simple invoking as a method
// undrasitanding the context of 'this' in a method
// 'this' refers to the object that is calling the method
// in this case, 'this' refers to the calculator object
// 'this' can also refer to the global object if the method is not called on an object

function person(name) {
	this.name = name;
}
//invoke as method
person.name = 'Alice';
console.log(person.name);

// using the calculator's add method
const result = calculator.add(3, 4);
console.log(result);

// using the calculator's multi method
const product = calculator.multi(3, 4);
console.log(product);

// lets learn about ivoking funcvtion as a constructor
function Person(name) {
	this.name = name;
	this.age = 30;
	this.greet = function () {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	};
}

// creating an instance of the Person constructor function
const person1 = new Person('Alice');
person1.age = 25; // updating the age property of person1
console.log(person1.name);
console.log(person1.age);
console.log(person1.greet());

//interview question:
// 1. what is the difference between a function and a method?
// 2. what is the context of 'this' in a method?
// 3. what is a constructor function?
// 4. what is the difference between a pure function and an impure function?
// 5. how do you create an instance of a constructor function?
// 6. what is the output of the following code?
// function test() {
// 	console.log(this);
// }
// test(); // in non-strict mode, this will log the global object (window in browsers)
// 7. what is the output of the following code?
// const obj = {
// 	name: 'Alice',
// 	getName: function() {
// 		return this.name;
// 	}
// };
// console.log(obj.getName()); // this will log 'Alice' because 'this' refers to the obj object
// 8. what is the output of the following code?
// function Person(name) {
// 	this.name = name;
// }
// const person1 = new Person('Alice');
// console.log(person1.name); // this will log 'Alice' because person1 is an instance of the Person constructor function
// 9. what is the output of the following code?
// let count = 0;
// function impureAdd(a) {
// 	count += a;
// 	return count;
// }
// console.log(impureAdd(5)); // this will log 5 because count is initially 0 and we add 5 to it
// console.log(impureAdd(10)); // this will log 15 because count is now 5 and we add 10 to it
