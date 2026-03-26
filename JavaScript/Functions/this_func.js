let employee = function (name, age) {
	return {
		name: name,
		age: age,
		printname: function () {
			return this.name;
		},
	};
};

let e1 = employee('jay', 27);

console.log(e1.printname()); // jay

// Same code using rest operator:
let employeeRest = function (...args) {
	const [name, age] = args;
	return {
		name: name,
		age: age,
		printname: function () {
			return this.name;
		},
	};
};

let e2 = employeeRest('jay', 27);

console.log(e2.printname()); // jay
