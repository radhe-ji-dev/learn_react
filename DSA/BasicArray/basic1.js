//count number  of digits in a number

let num = 12345;
let count = 0;

for (let i = num; i > 0; i = Math.floor(i / 10)) {
	count++;
}
console.log(count);

//print factorial of a number
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
	factorial *= i;
}
console.log(factorial);

//print multiplication table of a number
let number = 7;
for (let i = 1; i <= 10; i++) {
	console.log(`${number} x ${i} = ${number * i}`);
}

//find the largest element in an array
let arr = [3, 5, 7, 2, 8];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
	if (arr[i] > largest) {
		largest = arr[i];
	}
}
console.log(largest);

//find the smallest element in an array
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
	if (arr[i] < smallest) {
		smallest = arr[i];
	}
}
console.log(smallest);

// find reverse of a number
let numberToReverse = 12345;
let reversedNumber = 0;
while (numberToReverse > 0) {
	let digit = numberToReverse % 10;
	reversedNumber = reversedNumber * 10 + digit;
	numberToReverse = Math.floor(numberToReverse / 10);
}

// check if a number is palindrome
let palindromeNumber = 12321;
let originalNumber = palindromeNumber;
let reversedPalindrome = 0;
while (palindromeNumber > 0) {
	let digit = palindromeNumber % 10;
	reversedPalindrome = reversedPalindrome * 10 + digit;
	palindromeNumber = Math.floor(palindromeNumber / 10);
}
if (originalNumber === reversedPalindrome) {
	console.log(`${originalNumber} is a palindrome`);
} else {
	console.log(`${originalNumber} is not a palindrome`);
}

// sum of digits in a number
let numberForSum = 12345;
let sumOfDigits = 0;
while (numberForSum > 0) {
	let digit = numberForSum % 10;
	sumOfDigits += digit;
	numberForSum = Math.floor(numberForSum / 10);
}
console.log(sumOfDigits);

// sum of alternating digits in a number
let numberForAlternatingSum = 12345;
let sumOfAlternatingDigits = 0;
let isEvenPosition = true;
while (numberForAlternatingSum > 0) {
	let digit = numberForAlternatingSum % 10;
	if (isEvenPosition) {
		sumOfAlternatingDigits += digit;
	}
	isEvenPosition = !isEvenPosition;
	numberForAlternatingSum = Math.floor(numberForAlternatingSum / 10);
}
console.log(sumOfAlternatingDigits);


// sum of even and odd digits

