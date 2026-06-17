// two pointer an Palindrom
//
let arr = [1, 2, 3, 5, 23, 4];

// let first = -Infinity;
// let second = -Infinity;

// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > first) {
// 		second = first; // old largest becomes second largest
// 		first = arr[i]; // new largest
// 	} else if (arr[i] > second && arr[i] !== first) {
// 		second = arr[i];
// 	}
// }

// console.log('Largest:', first);
// console.log('Second Largest:', second);

let arr2 = [1, 2, 3, 5, 23, 4];
console.log(arr2);

function rotate() {
	let temp = arr2[0];
	for (let i = 0; i < arr2.length - 1; i++) {
		arr2[i] = arr2[i + 1];
	}
	arr2[arr2.length - 1] = temp;
	return arr2;
}

console.log(rotate());

function rotateClock() {
    let temp = arr2[arr.length-1];
	for (let i = arr2.length-1; i > 0; i--) {
		arr2[i] = arr2[i - 1];
	}
	arr2[0] = temp;
	return arr2;
}

console.log(rotateClock());
