// Rest and Spread Operator in JavaScript

// Rest Operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]

// Interview Questions:
// 1. What is the difference between the rest operator and the spread operator in JavaScript?
// 2. How do you use the rest operator in a function definition?
// 3. How do you use the spread operator to concatenate arrays?
// 4. Can you explain the concept of "rest parameters" in JavaScript?
// 5. What are some common use cases for the rest and spread operators in JavaScript?
// 6. How does the rest operator work with destructuring in JavaScript?
// 7. Can you give an example of using the spread operator with objects in JavaScript?
// 8. What are some potential pitfalls of using the rest and spread operators in JavaScript?
// 9. How does the performance of the rest and spread operators compare to traditional methods in JavaScript?
// 10. Can you explain how to handle default values with the rest operator in JavaScript?