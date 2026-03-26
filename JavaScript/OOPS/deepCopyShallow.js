//deep and shallow copy
let obj1 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
};

//shallow copy
let obj2 = Object.assign({}, obj1);
obj2.name = "Jane";
obj2.address.city = "Los Angeles";

console.log("Shallow Copy:");
console.log("obj1:", obj1);
console.log("obj2:", obj2);

//deep copy
let obj3 = JSON.parse(JSON.stringify(obj1));
obj3.name = "Alice";
obj3.address.city = "Chicago";
console.log("Deep Copy:");
console.log("obj1:", obj1);
console.log("obj3:", obj3);

// here we can see that in the shallow copy, changing the nested object (address) in obj2 also changes it in obj1,
// because they both reference the same nested object.
//  In contrast, in the deep copy, changing the nested object in obj3 does not affect obj1,
//  because it is a completely separate copy of the original object.


// Interview Questions:
// 1. What is the difference between a shallow copy and a deep copy in JavaScript?
// 2. How do you create a shallow copy of an object in JavaScript?
// 3. How do you create a deep copy of an object in JavaScript?
// 4. What are some common use cases for shallow copying and deep copying in JavaScript?
// 5. What are some potential pitfalls of using shallow copying and deep copying in JavaScript?
// 6. How does the spread operator (...) work in relation to shallow copying and deep copying in JavaScript?
// 7. Can you explain the concept of "reference types" in JavaScript and how it relates to shallow copying and deep copying?
// 8. How do you handle circular references when creating a deep copy of an object in JavaScript?
// 9. What are some performance considerations when using shallow copying and deep copying in JavaScript?
// 10. Can you give an example of a situation where you would use a shallow copy instead of a deep copy, and vice versa, in JavaScript?
