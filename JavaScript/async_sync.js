//Never Call Asynchronous Callbacks
//Synchronously

//lets see an example of synchronous code using recursion


function getData() {
    return "Data";
}


function processData() {
    const data = getData();
    console.log("Processing: " + data);
}

processData(); // Output: Processing: Data
// In this example, the getData function is called synchronously within the processData function.
// The main thread is blocked until the getData function returns its result, which is then processed and logged to the console.
// This is a typical example of synchronous code, where each operation waits for the previous one to complete before proceeding.
// In contrast, asynchronous code would allow other operations to run while waiting for a response, preventing the main thread from being blocked.
// In asynchronous programming, it's important to avoid calling asynchronous callbacks synchronously,
//  as this can lead to unexpected behavior and potential issues with the event loop.
//  Instead, you should use asynchronous patterns such as promises or async/await to handle asynchronous operations without blocking the main thread.
//  This allows for better performance and responsiveness in your applications.

// Interview question:
// 1. Why should you never call asynchronous callbacks synchronously in JavaScript?
// 2. What are the potential issues that can arise from calling asynchronous callbacks synchronously?
// 3. How can you handle asynchronous operations in JavaScript without blocking the main thread?
// 4. Can you provide an example of using promises or async/await to handle asynchronous operations in JavaScript?
//5. What is the event loop in JavaScript, and how does it relate to asynchronous programming?
// 6. How can you ensure that your asynchronous code is executed in the correct order without blocking the main thread?
// 7. What are some common pitfalls to avoid when working with asynchronous callbacks in JavaScript?
// 8. How can you handle errors in asynchronous callbacks without blocking the main thread?
// 9. Can you explain the difference between synchronous and asynchronous code in JavaScript, and when to use each approach?
// 10. How does JavaScript's single-threaded nature affect the way asynchronous code is executed, and how can you work around it to achieve better performance?
