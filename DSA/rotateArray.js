// let rotate array k time to right
let n = arr.length;
let rotated = new Array(n);
for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = arr[i]; //we will get same array after n rotation so use mod n to optimize
}

//this simple but new array is rotated array
function rotate(arr, k) {
	const n = arr.length;
	k %= n; // handle k > n

	reverse(arr, 0, n - 1); // Step 1
	reverse(arr, 0, k - 1); // Step 2
	reverse(arr, k, n - 1); // Step 3
}

function reverse(arr, start, end) {
	while (start < end) {
		[arr[start], arr[end]] = [arr[end], arr[start]];
		start++;
		end--;
	}
}