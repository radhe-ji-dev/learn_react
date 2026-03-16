// lest learn about data types in java script

// there are 7 data types in java script

// 1. string
let name = 'John Doe';

// 2. number
let age = 30;
// 3. boolean
let isStudent = true;
// 4. null
let address = null;
// data type of null is object (this is a bug in java script, but it has been kept for backward compatibility)

// 5. undefined
let phoneNumber;
// 6. symbol
let id = Symbol('id');
// 7. object
let person = {
	name: 'John Doe',
	age: 30,
	isStudent: true,
};

//array is also an object in java script
let numbers = [1, 2, 3, 4, 5];

//map is also an object in java script
let map = new Map();
map.set('name', 'John Doe');
map.set('age', 30);
map.set('isStudent', true);

// nan
let result = 0 / 0; // this will return NaN (Not a Number)
//data type of NaN is number

// infinity
let infinity = 1 / 0; // this will return Infinity
// data type of Infinity is number

//undifined
let undifinedVariable; // this variable is declared but not assigned a value, so it is undefined
// data type of undifinedVariable is undefined

// we can also use typeof operator to check the data type of a variable
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof phoneNumber);
console.log(typeof id);
console.log(typeof person);

// what is let var and const in java script?
//its variables declaration keywords in java script
