//map reduce filter
const numbers = [1, 2, 3, 4, 5];
// map
const squaredNumbers = numbers.map((num) => num * num);
console.log('Squared Numbers:', squaredNumbers); // Output: [1, 4, 9, 16, 25]

// filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // Output: [2, 4]

// reduce
const sum = numbers.reduce((total, num) => total + num, 0);
console.log('Sum of Numbers:', sum); // Output: 15

// Interview Questions:
// 1. What is the difference between map, filter, and reduce in JavaScript?
// 2. How do you use the map method to transform an array in JavaScript?
// 3. How do you use the filter method to create a new array based on a condition in JavaScript?
// 4. How do you use the reduce method to accumulate values in an array in JavaScript?
// 5. Can you give an example of using map, filter, and reduce together in JavaScript?
// 6. What are some common use cases for map, filter, and reduce in JavaScript?
// 7. How does the performance of map, filter, and reduce compare to traditional loops in JavaScript?
// 8. Can you explain how to handle asynchronous operations with map, filter, and reduce in JavaScript?
// 9. What are some potential pitfalls of using map, filter, and reduce in JavaScript, and how can they be avoided?
// 10. Can you give an example of a situation where you would use map instead of filter or reduce, and vice versa, in JavaScript?
