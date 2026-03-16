// argumes and paramet alias in function and use of stict mode
// lets se problem of using arguments and parameters in function and how to solve it with aliasing

// without strict mode
function add(a, b) {
	return a + b;
}

// with strict mode
function subtract(a, b) {
	'use strict';
	return a - b;
}

// in the above example, we have two functions, add and subtract.
// The add function does not use strict mode, while the subtract function does. In strict mode,
//  we cannot use the arguments object to access the parameters of the function.
//  Instead, we can use parameter aliasing to achieve the same result.

// longer explanation of parameter aliasing
// Parameter aliasing is a technique where we create a new variable that references the same value as a parameter. This allows us to work with the parameter without directly using the arguments object, which is not allowed in strict mode.
function multiply(a, b) {
	'use strict';
	const x = a; // alias for parameter a
	const y = b; // alias for parameter b
	return x * y;
}
// In this example, we have a multiply function that uses parameter aliasing to access the parameters a and b. We create two new variables, x and y, that reference the same values as a and b, respectively. This allows us to perform the multiplication without using the arguments object, which is not allowed in strict mode.

// Parameter aliasing can be useful in situations where we need to manipulate the parameters in some way, such as when we want to modify the values before using them in the function. It also helps to improve code readability by giving more meaningful names to the parameters, making it easier to understand the purpose of each parameter in the function.
// In summary, parameter aliasing is a technique that allows us to work with function parameters in strict mode by creating new variables that reference the same values as the parameters. This helps us to avoid using the arguments object and can improve code readability.
// example usage
