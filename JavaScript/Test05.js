/*Question  1 :

Sample Data:

const data = {
  India: {
    Rajasthan: ["Jaipur", "Udaipur", "Kota"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"]
  },

  USA: {
    California: ["Los Angeles", "San Diego", "San Francisco"],
    Texas: ["Houston", "Dallas", "Austin"],
    Florida: ["Miami", "Orlando", "Tampa"]
  },

  Canada: {
    Ontario: ["Toronto", "Ottawa", "Hamilton"],
    Alberta: ["Calgary", "Edmonton", "Red Deer"]
  }
};

Data should be stored in nested format.

Create 3 dropdown fields:
Country
State
City

When user selects:
Country → show related States
State → show related Cities

Reset dependent dropdowns:
If Country changes → reset State and City
If State changes → reset City
Show selected values below the form.


Task 1
Create all dropdowns dynamically using the given object.

Task 2
Initially:
Only Country dropdown should be enabled
State and City should be disabled

Task 3
After selecting Country:
Enable State dropdown
Populate related states

Task 4
After selecting State:
Enable City dropdown
Populate related cities

Task 5
Display selected:
Plain text
Country: India
State: Rajasthan
City: Jaipur



question 2 :

Write a program to count how many times each element appears in an array.
Input:
["apple", "banana", "apple", "orange", "banana", "apple"]




/*question 2 :

Write a program to count how many times each element appears in an array.
Input:
["apple", "banana", "apple", "orange", "banana", "apple"]
*/

let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const chkfrq = new Map();

for (let i of fruits) {
	if (chkfrq.has(i)) {
		chkfrq.set(i, chkfrq.get(i) + 1);
	} else {
		chkfrq.set(i, 1);
	}
}

console.log(chkfrq);

/*
question 3 :

Add multiple dynamic keys in same object.
Input:
[
  ["name", "Rahul"],
  ["age", 22],
  ["city", "Jaipur"]
]
*/

let emp = [
	['name', 'Rahul'],
	['age', 22],
	['city', 'Jaipur'],
];

let empObj = {}
let c = 0

while (c < emp.length) { 
    let key = emp[c][0]
    let val = emp[c][1]

    empObj[key] = val

    c++
}

console.log(empObj);
