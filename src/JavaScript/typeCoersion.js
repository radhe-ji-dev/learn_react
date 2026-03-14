//type coersion is the process of converting a value from one type to another in JavaScript. It can be done implicitly by the JavaScript engine or explicitly by the programmer using built-in functions or operators.
//ofete it lead to errors and unexpected behavior in the code, so it is important to understand how type coersion works in JavaScript and how to avoid it when necessary.

// Implicit type coersion
console.log('5' + 10); // Output: '510' (string concatenation)
console.log('5' - 10); // Output: -5 (numeric subtraction)
console.log('5' * 10); // Output: 50 (numeric multiplication)
console.log('5' / 10); // Output: 0.5 (numeric division)
console.log('5' == 5); // Output: true (loose equality comparison)
console.log('5' === 5); // Output: false (strict equality comparison)

// Explicit type coersion
console.log(Number('5') + 10); // Output: 15 (string converted to number)
console.log(String(5) + '10'); // Output: '510' (number converted to string)
console.log(Boolean(0)); // Output: false (number converted to boolean)
console.log(Boolean(1)); // Output: true (number converted to boolean)  
console.log(Boolean('')); // Output: false (empty string converted to boolean)
console.log(Boolean('Hello')); // Output: true (non-empty string converted to boolean)
