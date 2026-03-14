// function method and constructor

// function method
function add(a, b) {
	return a + b;
}

// constructor
function Person(name, age) {
	this.name = name;
	this.age = age;
}
// creating an instance of Person
const person1 = new Person('Alice', 30);
console.log(person1.name);

// using the add functionconst sum = add(5, 10);
console.log(sum);

// pure function
function pureAdd(a, b) {
	return a + b;
}

// impure function
let count = 0;
function impureAdd(a) {
	count += a;
	return count;
}
