//lets creta a callback hell
// a callback hell occurs when you have multiple nested callback functions,
//  making the code difficult to read and maintain. It often happens when dealing with asynchronous operations,
// such as fetching data from an API or handling user interactions.



function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data);
    }
    , 2000);
}

fetchData((data) => {
    console.log('Data fetched:', data);
    fetchData((data2) => {
        console.log('Data fetched again:', data2);
        fetchData((data3) => {
            console.log('Data fetched third time:', data3);
            // This nesting can continue indefinitely, leading to callback hell
        });
    });
});

// To avoid callback hell, you can use Promises or async/await syntax, which allows you to write asynchronous code in a more readable and maintainable way.

// lets handle using promises

function fetchDataPromise() {   
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = { id: 1, name: 'John Doe' };
            resolve(data);
        }, 2000);
    });
}

fetchDataPromise()
    .then((data) => {
        console.log('Data fetched:', data);
        return fetchDataPromise();
    })
    .then((data2) => {
        console.log('Data fetched again:', data2);
        return fetchDataPromise();
    })
    .then((data3) => {
        console.log('Data fetched third time:', data3);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });

// now simply see the sctructure of the code and you can see how much more readable it is compared to the callback hell example.
// Each asynchronous operation is handled in a separate .then() block,
//  making it easier to follow the flow of data and handle errors with a single .catch() block.
//simple promise and then structure is much more readable and maintainable than nested callbacks, which can quickly become difficult to manage as the number of asynchronous operations increases.
// prmises for data fetching we will use real api endpoints
    
fetchDataPromise()
    .then((data) => {
        console.log('Data fetched:', data);
        return fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());
    })
    .then((post) => {
        console.log('Post fetched:', post);
        return fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json());
    })
    .then((user) => {
        console.log('User fetched:', user);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
