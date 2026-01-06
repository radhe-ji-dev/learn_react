let arr = [3, 1, 0, 1, 2, 3];
let prefixsumarr = [];
let k = 6;
let range = [2, 8];

for (let i = 0; i < arr.length; i++) {
	prefixsumarr[i] = (prefixsumarr[i - 1] || 0) + arr[i];
	if (prefixsumarr[i] === k) {
	//	console.log('sub array found from index 0 to ', i);
	}
}
//console.log('prefix sum array is ', prefixsumarr);
//console.log('ranage sum is ', prefixsumarr[range[1]] - range[0]);

//question
// genrate prefix sum array from the given array
// genrate sum of a range from the given array using prefix sum array
// check if any sub array have lenghth or there exist sum k

// now max lenght of sub array equal to k

// before that just print has map of these
let map = new Map();
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	sum += arr[i];

	// store prefix sum and index
	map.set(sum, i);

	// print current state
	//console.log('Map:', map);
	//console.log('-----------');
}
console.log('Final Map:', map);
// now check for sub array with sum k
// If (currentPrefixSum - K) exists in map
// → subarray with sum K exist

    if (map.has(k)) {
    console.log("there exist sum k at ",map.get(k));
    }
// now we know k exist but we need to find the max length of sub array




function longestSubarraySumK(arr, K) {
	let map = new Map(); // prefixSum → earliest index
	let sum = 0; // running prefix sum
	let maxLen = 0; // maximum length found

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]; // update running sum

		// Case 1: subarray starts from index 0
		if (sum === K) {
			maxLen = i + 1; // length = i - 0 + 1
		}

		// Case 2: subarray ending at i (not from 0)
		if (map.has(sum - K)) {
			let startIndex = map.get(sum - K) + 1; // start of subarray
			let length = i - map.get(sum - K); // length of subarray
			maxLen = Math.max(maxLen, length); // update max
		}

		// Store earliest occurrence of this prefix sum
		if (!map.has(sum)) {
			map.set(sum, i);
		}

		// Optional: print map for debugging
		console.log('i:', i, 'sum:', sum, 'maxLen:', maxLen);
		console.log('Map state:', map);
		console.log('--------------------');
	}

	return maxLen;
}

