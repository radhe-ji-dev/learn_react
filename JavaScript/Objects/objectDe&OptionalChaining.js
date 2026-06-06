// let learn about object destructuring and optional chaining
// object destructuring
let person = {
	age: 30,
	name: 'John',
	city: 'New York',
};

const { age, name, city } = person;
console.log(age);
// optional chaining
let user = {
	name: 'Alice',
	address: {
		city: 'Los Angeles',
		zip: '90001',
	},
};

// ab optional chaining ke through hum directly access kar sakte hai nested properties ko
//  bina error ke agar wo exist nahi karti hai to

console.log(user.address?.city); // Output: "Los Angeles"
console.log(user.address?.street); // Output: undefined, bina error ke
console.log(user.contact?.email); // Output: undefined, bina error ke

// optional chaing ka main use case hai jab hum kisi nested property ko access karna chahte hai aur
//  hume pata nahi hota ki wo property exist karti hai ya nahi, to hum optional chaining ka use kar sakte hai taaki
//  agar wo property exist nahi karti hai to bhi humare code me error na aaye.

// real world project me optional chaining ka use bahut common hai,
// especially jab hum APIs se data fetch karte hai aur hume pata nahi hota ki response me
//  kaunse properties exist karti hai. Optional chaining ke through hum apne code ko zyada robust aur error-free bana sakte hai.
// optional chaining ke sath hum function calls me bhi use kar sakte hai, jaise ki:

let user2 = {
	name: 'Bob',
	getAddress: function () {
		return {
			city: 'Chicago',
			zip: '60601',
		};
	},
};

console.log(user2.getAddress?.().city); // Output: "Chicago"

// ab dekte deafult value ke sath optional chaining ka use karte hai
console.log(user2.getPhoneNumber?.().number ?? 'Phone number not available'); // Output: "Phone number not available"

// ab dekete rename karte hai destructuring me
const { name: userName, age: userAge } = person;
console.log(userName);

// Nullish coalescing operator (??) ka use karte hai jab hum kisi variable ki value ko check karna chahte hai
//  aur agar wo null ya undefined hai to hum ek default value assign karna chahte hai.

let score = null;
let finalScore = score ?? 100;
console.log(finalScore); // Output: 100

score = 85;
finalScore = score ?? 100;
console.log(finalScore); // Output: 85
