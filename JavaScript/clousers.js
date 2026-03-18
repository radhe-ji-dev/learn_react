//closures in js
// simple closure can be defined as a function that has access to its own scope
// the scope of the outer function, and the global scope.
// closures are created when a function is defined inside another 
// function and the inner function references variables from the outer function.


function outerFunction() {
    let count = 0; // This variable is enclosed by the inner function   
    function innerFunction() {
        count++;
        console.log(count);
    }
    return innerFunction; // Return the inner function to create a closure
}

// 🔹 What’s happening here?

// outer() runs → creates variable count

// inner() is returned

// Normally, outer() should be removed from memory after execution
// ❗ BUT because inner() still uses count, JavaScript keeps it alive

// 👉 This “keeping alive” of variables is called a closure


const myClosure = outerFunction(); // myClosure now has access to the count variable
myClosure(); // Output: 1
myClosure(); // Output: 2
myClosure(); // Output: 3



function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },
        getBalance() { // method
            return balance;
        }
    };
}

const account = createBankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100

// 🔹 Function vs Method
// Type	Definition
// Function	Independent (not inside object)
// Method	Function inside an object


// 🔹 Proper Definition (Interview Level)

// A closure is a function bundled together with its lexical environment, 
// allowing it to access variables from its outer scope even after the outer function has returned.

// 🔹 Key Points

// Closure = function + its remembered scope

// Created automatically in JavaScript (you don’t manually create it)

// Works because of lexical scoping

// Useful for:

// Data hiding (private variables)

// Function factories

// Callbacks & async code



// clouse is used to maintain state in a function, it
// allows us to create private variables and functions that can only be accessed by the inner function.
// This is useful for data encapsulation and creating modules in JavaScript.
// this make a powerfull tool for creating reusable code and managing state in a clean way.


//Interesting example of closure
function createCounter() {
    let count = 0; // This variable is enclosed by the inner function   
    return {
        increment: function() {
            count++;    
            console.log(count);
        }
    };
}
const counter = createCounter();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.increment(); // Output: 3

// In this example, the createCounter function returns an object with an increment method that has access to the count variable.
// Each time we call counter.increment(), it increments the count and logs the current value.
// The count variable is private and cannot be accessed directly from outside the createCounter function, demonstrating how closures can be used to encapsulate state.


//InterviewQ:
// 1. What is a closure in JavaScript?
// 2. How do closures work in JavaScript?
// 3. Can you give an example of a closure in JavaScript?
// 4. What are some common use cases for closures in JavaScript?
// 5. How do closures help with data encapsulation in JavaScript?
// 6. Can you explain the concept of lexical scoping in relation to closures?
// 7. How do closures affect memory management in JavaScript?
// 8. Can you create a closure that maintains state across multiple function calls?
// 9. What are some potential pitfalls of using closures in JavaScript?
// 10. How do closures interact with asynchronous code in JavaScript?
