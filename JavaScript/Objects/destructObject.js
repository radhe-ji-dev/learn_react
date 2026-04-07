//  learn about object destructuring

// basicall object me se values ko nikal and usko other var me assigne kr ke use krna

let a = {
	name: 'rahul',
	age: 23,
};

let { name, age, city } = a; // extra will be handled with undefiend

console.log(name, age, city);



// default values 

let user = { name: 'Rahul' };

let { name1, city1 = 'Udaipur' } = user;

console.log(city1); // Udaipur
