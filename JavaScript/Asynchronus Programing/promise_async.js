// Promise-based asynchronous programming
// A Promise is an object that represents the eventual completion (or failure) of
//  an asynchronous operation and its resulting value.

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed.");
        }
    }, 1000);
});

// Consuming a Promise
myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// Async/Await syntax
async function asyncFunction() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

asyncFunction();


// Interviw Question:
// 1. What is the difference between a Promise and async/await in JavaScript?
// 2. How do you handle errors in a Promise-based asynchronous operation?
// 3. Can you explain the concept of "Promise chaining" and provide an example?
// 4. What is the purpose of the "catch" method in a Promise?
// 5. How does the "async" keyword affect the behavior of a function in JavaScript?
// 6. Can you explain the concept of "Promise.all" and provide an example of its usage?
// 7. What is the difference between "Promise.resolve" and "Promise.reject"?
// 8. How do you handle multiple asynchronous operations that depend on each other using Promises?
// 9. Can you explain the concept of "Promise.race" and provide an example of its usage?
// 10. What are some common pitfalls to avoid when working with Promises in JavaScript?