// variable shadowing occurs when a variable declared within a certain scope (e.g., a function or block) has the same name as a variable declared in an outer scope. The inner variable "shadows" the outer variable, meaning that within the inner scope, references to that variable name will refer to the inner variable rather than the outer one.

let x = 10; // outer variable   
function example() {
    let x = 20; // inner variable that shadows the outer variable
    console.log(x); // Output: 20 (refers to the inner variable)
}
example();
console.log(x); // Output: 10 (refers to the outer variable)
// variable shadowing can lead to confusion and bugs if not used carefully, as it can make it difficult to understand which variable is being referenced at any given point in the code. It is generally recommended to avoid variable shadowing when possible, or to use different variable names to prevent confusion.

//interview question:
// 1. What is variable shadowing in JavaScript?
// 2. How does variable shadowing work in JavaScript?
// 3. Can you give an example of variable shadowing in JavaScript?
// 4. What are the potential issues or pitfalls of variable shadowing in JavaScript?
// 5. How can you avoid variable shadowing in JavaScript?
// 6. What is the difference between variable shadowing and variable hoisting in JavaScript?
// 7. How does variable shadowing affect the scope of variables in JavaScript?
// 8. Can you explain how variable shadowing interacts with closures in JavaScript?
// 9. What are some best practices for managing variable scope and avoiding variable shadowing in JavaScript?
// 10. How does variable shadowing impact the readability and maintainability of JavaScript code, and 
// what strategies can be used to mitigate these issues?