// Reverse the words in a given string

let str = 'Hello, welcome to the world of React!';
let n = str.length;
//console.log(n);

let ans = '';
let i = n;
let j = n;

while (j >= 0) {
	if (str[j] === ' ') {
		ans = ans + str.slice(j, i + 1);
		i = j - 1;
		j--;
	}
	if (j === 0) {
		ans = ans + ' ' + str.slice(j, i + 1);
		j--;
	} else {
		// console.log(j,"  ",str[j]);
		j--;
	}
}

console.log(ans);

//lets have more strings DSA problems here in future
// 1. Palindrome check
// 2. Anagram check
// 3. Longest substring without repeating characters
// 4. Count vowels and consonants
// 5. String compression
// 6. Find first non-repeating character
// 7. Check if two strings are rotations of each other
// 8. Find all permutations of a string
// 9. Convert string to integer (atoi)
// 10 .Longest palindromic substring
// 11. Count occurrences of each character
// 12. Check if a string is a valid palindrome (ignoring spaces and punctuation)
