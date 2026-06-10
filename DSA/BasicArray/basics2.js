const table = () => {
	for (let i = 0; i < 50; i++) {
		if (i % 3 === 0) {
			console.log(i);
		}
	}
};

//table();

const divis = () => {
	for (let i = 1; i < 1000; i++) {
		if (i % 11 === 0 && i % 7 === 0) {
			console.log(i);
			break; // stops the loop after the first match
		}
	}
};

//divis();

let arr = [1, 2, 3, 4, 5, 6];
let t = 4;
let n = arr.length;
let count = 0;

for (let i = 0; i < n; i++) {
	if (arr[i] === t) {
		count++;
	}
	if (i == n - 1 && count == 0) {
		console.log(-1);
	}
}

console.log(count);
