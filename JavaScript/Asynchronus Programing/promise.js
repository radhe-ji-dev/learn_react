// what actualy is promise
// promise is a object which is used to handle asynchronus operation in js
// it is a object which is used to handle the result of an asynchronus operation
// it is a object which is used to handle the error of an asynchronus operation

// promise has three states
// 1. pending
// 2. fulfilled
// 3. rejected

// =============================================================================
// SECTION 1: INTRODUCTION
// =============================================================================
console.log("PROMISES IN JAVASCRIPT");
// A Promise is a powerful tool in JavaScript for handling asynchronous operations. It represents a value that may be available now, in the future, or never. Promises allow you to write cleaner and more manageable asynchronous code, avoiding the infamous "callback hell" that can arise with nested callbacks.
// A Promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.
// Promises are created using the Promise constructor, which takes a function (executor) that has two parameters: resolve and reject. You can use these parameters to change the state of the promise based on the outcome of the asynchronous operation.
// Example:

const p1 = Promise.resolve("Success!");

const p2 = Promise.reject("Error!");

const p3- promise.race([p1, p2]);

p1.then((value) => console.log("p1:", value)).catch((error) => console.error("p1 error:", error));
p2.then((value) => console.log("p2:", value)).catch((error) => console.error("p2 error:", error));
p3.then((value) => console.log("p3:", value)).catch((error) => console.error("p3 error:", error));


// now learn about structures of promise and how to use them in real world application in next section
// =============================================================================
// SECTION 2: STRUCTURE OF A PROMISE
// =============================================================================

// A Promise has a specific structure that includes the executor function,
//  which is where you define the asynchronous operation.
// The executor function takes two parameters: resolve and reject.
// You can call resolve(value) when the operation is successful, and reject(reason) when it fails.

// Example of creating a Promise:

function fetchData() {
    return new Promise((resolve, reject) => {   
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);
    });
}
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// In this example, fetchData returns a Promise that simulates an asynchronous data fetching operation. After 2 seconds, it either resolves with a success message or rejects with an error message. The .then() method is used to handle the resolved value, while the .catch() method is used to handle any errors that may occur during the operation.

// =============================================================================
// SECTION 3: PROMISE METHODS
// =============================================================================

// Promises come with several built-in methods that allow you to handle asynchronous operations more effectively.
//  Some of the most commonly used methods include:

// 1. .then(): Used to handle the resolved value of a promise.
// 2. .catch(): Used to handle any errors that occur during the promise execution.
// 3. .finally(): Used to execute code after the promise is settled, regardless of its outcome.
// 4. Promise.all(): Used to wait for multiple promises to resolve and returns an array of their results.
// 5. Promise.race(): Used to return the result of the first promise that settles (either resolved or rejected).

// Example of using Promise.all():  
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then((values) => console.log("Promise.all results:", values))
    .catch((error) => console.error("Promise.all error:", error));

// In this example, Promise.all() waits for all three promises to resolve and then logs their results as an array. If any of the promises were to reject, the .catch() method would handle the error instead.

// Example of using Promise.race():
const promiseA = new Promise((resolve) => setTimeout(() => resolve("First!"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Second!"), 2000));

Promise.race([promiseA, promiseB])
    .then((value) => console.log("Promise.race result:", value))
    .catch((error) => console.error("Promise.race error:", error));

// In this example, Promise.race() returns the result of the first promise that settles.
//  Since promiseA resolves after 1 second and promiseB resolves after 2 seconds, the output will be "First!" from promiseA.
// If either of the promises were to reject, the .catch() method would handle the error instead.






