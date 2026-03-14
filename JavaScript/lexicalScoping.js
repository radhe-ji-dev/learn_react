// lets leran about lexical scooping in javascript

// lexical scooping is the ability of a function to access variables that are defined in its parent scope.
//for every function GLOBAL SCOPE is created and for every function call a new LOCAL SCOPE is created.
// GEC stands for Global Execution Context and LEC stands for Local Execution Context.
// Every time a function is called, a new LEC is created and the variables defined in that function are stored in that LEC.
// Fror every function GEC is its outer scope and for every function call LEC is its inner scope.

function outerFunction() {
    let outerVariable = 'I am from outer function';
    function innerFunction() {
        console.log(outerVariable);
    }
    innerFunction();
}
outerFunction(); // Output: I am from outer function

// in the above example, the innerFunction is able to access the outerVariable which is defined in the outerFunction.
// This is because of lexical scooping.
// Lexical scooping also allows us to create closures in JavaScript. 
// A closure is a function that has access to its own scope, the outer function's scope, and the global scope.

function outerFunction2() { 
    let outerVariable2 = 'I am from outer function 2';
    function innerFunction2() {
        console.log(outerVariable2);
    }
    return innerFunction2;
}
const closureFunction = outerFunction2();
closureFunction(); // Output: I am from outer function 2


//inteview question:
// 1. What is lexical scooping in JavaScript?
// 2. How does lexical scooping work in JavaScript?
// 3. Can you give an example of lexical scooping in JavaScript?
// 4. What is the difference between global scope and local scope in JavaScript?
// 5. How does lexical scooping relate to closures in JavaScript?
// 6. Can you explain the concept of "scope chain" in JavaScript and how it relates to lexical scooping?
// 7. How does lexical scooping affect variable accessibility in JavaScript?
// 8. Can you explain how the "this" keyword works in relation to lexical scooping in JavaScript?
// 9. What are some common pitfalls or challenges associated with lexical scooping in JavaScript, and how can they be avoided?
// 10. How does lexical scooping impact the performance of JavaScript code, and what are some best practices for optimizing it?



    //prajjal.dhar@regexsoftware.com