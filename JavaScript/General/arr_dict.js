// array and dictionary in js
// array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);

// array methods
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(0);
console.log(arr);

//enumerate array
for (let i = 0; i < arr.length; i++) {
	console.log(i + ': ' + arr[i]);
}

// alway use classic for loop to enumerate array, because it is faster than for...of and forEach and it is more flexible,
//  you can break the loop or continue to next iteration, and you can also access the index of the current element.

//array literals
let arr2 = ['apple', 'banana', 'cherry'];
console.log(arr2[1]);

// avoid using array costructor, because it can lead to unexpected results

// dictionary
let dict = {
	name: 'John',
	age: 30,
	city: 'New York',
};
console.log(dict.name);

for (let key in dict) {
	console.log(key + ': ' + dict[key]);
}
