let test = function () {
	return {
		name: 'rahul',
		age: 34,
	};
};

console.log(test);
console.log(test.age); // now this is not working

// correct way to call the function

console.log(test().age);
// here test is a function and for we need to use . oprator to acess object inside a function
