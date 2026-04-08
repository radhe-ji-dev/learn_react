1;
// employee
// id=null, empname=xyz, empSal=0, empDoj=undefined,
// getName => function Named =>console=>name
// getEmpSal => arrow function=>console=>salary
// getDateOfJoning()=>lamdba function auto return
// TotalSalary(empBonus as percentage)=> empSal = empSal + (empBounus) return lambda
const Employee = (empid = null, empname = 'xyz') => {
	return {
		empid,
		empname,
		getData: () => {
			console.log(`${empid},${empname}`);
		},
	};
};
let emp = Employee('1', 'prajjal');
console.log(emp);
emp.getData();

// 2. Product
// productid=null
// productname=undefined
// productPrice =0
// getProductName: function named => product name console.log
// getPrice : product price console => ()=>{}
// getTotalPrice:(quantity)=>ProductPrice*qty

// Product factory function
let product = (productId = null, productName = undefined, productPrice = 0) => {
	return {
		productId,
		productName,
		productPrice,

		getProductName: function () {
			console.log(this.productName);
		},

		getPrice: () => {
			console.log(productPrice);
		},
		getTotalPrice: (quantity) => {
			return productPrice * quantity;
		},
	};
};

let p1 = product(1, 'Laptop', 50000);

p1.getProductName();
p1.getPrice();
console.log(p1.getTotalPrice(2));

// 3. Student
// id,ek array lena hai skills: ["Html","CSS","Js"],Stdname,StdRoll
// getStudentInfo: function named => all details
// getTotalSkills: function ()=> return skills.length
// getName: name return karega lambda

// Student factory function
let student = (
	id = null,
	skills = ['Html', 'CSS', 'Js'],
	stdName = '',
	stdRoll = null,
) => {
	return {
		id,
		skills,
		stdName,
		stdRoll,

		// named function → print all details
		getStudentInfo: function () {
			console.log('ID:', this.id);
			console.log('Name:', this.stdName);
			console.log('Roll:', this.stdRoll);
			console.log('Skills:', this.skills);
		},

		// arrow function → return total skills
		getTotalSkills: () => {
			return skills.length; // closure use
		},

		getName: () => stdName,
	};
};

let s1 = student(1, ['HTML', 'CSS', 'JS', 'React'], 'Rahul', 101);

s1.getStudentInfo();
console.log(s1.getTotalSkills()); // 4
console.log(s1.getName()); // Rahul

// 4.Calculator
// areaofCircle:argument mai radius return area using lamda function
// areaofTriangle: argument mai length aur breadth using lambda return
// areaofSquare:argument mai side lena hai aur isko return karna hai.

// Calculator object
let calculator = {
	// area of circle → πr²
	areaOfCircle: (radius) => {
		return Math.PI * radius * radius;
	},

	// area of triangle → 1/2 * l * b
	areaOfTriangle: (length, breadth) => {
		return 0.5 * length * breadth;
	},

	// area of square → side * side
	areaOfSquare: (side) => {
		return side * side;
	},
};

// Example usage
console.log(calculator.areaOfCircle(5)); // ~78.54
console.log(calculator.areaOfTriangle(10, 5)); // 25
console.log(calculator.areaOfSquare(4)); // 16
