// lest ealrn about loops and conditions in java script

// there are 3 types of loops in java script
// 1. for loop
for (let i = 0; i < 5; i++) {
	console.log(i);
}

// 2. while loop
let j = 0;
while (j < 5) {
	console.log(j);
	j++;
}

// 3. do while loop
let k = 0;
do {
	console.log(k);
	k++;
} while (k < 5);

// there are 3 types of conditions in java script
// 1. if statement
let age = 18;
if (age >= 18) {
	console.log('You are an adult');
}

// 2. if else statement
let age2 = 17;
if (age2 >= 18) {
	console.log('You are an adult');
} else {
	console.log('You are a minor');
}

// 3. if else if statement
let age3 = 65;
if (age3 < 18) {
	console.log('You are a minor');
} else if (age3 >= 18 && age3 < 65) {
	console.log('You are an adult');
} else {
	console.log('You are a senior citizen');
}

//switch statement
let day = 'Monday';
switch (day) {
	case 'Monday':
		console.log('Today is Monday');
		break;
	case 'Tuesday':
		console.log('Today is Tuesday');
		break;
	case 'Wednesday':
		console.log('Today is Wednesday');
		break;
	case 'Thursday':
		console.log('Today is Thursday');
		break;
	case 'Friday':
		console.log('Today is Friday');
		break;
	case 'Saturday':
		console.log('Today is Saturday');
		break;
	case 'Sunday':
		console.log('Today is Sunday');
		break;
	default:
		console.log('Invalid day');
}
        