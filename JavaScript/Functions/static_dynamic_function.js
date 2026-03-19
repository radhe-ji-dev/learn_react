// does js have static and dynamic function
// js has both static and dynamic function
// static function is a function which is defined in a class and can be called without creating an instance of the class
// dynamic function is a function which is defined in a class and can be called only after creating an instance of the class
// can we this without class in js
// yes we can define static and dynamic functions without using class in js
// we can define static function using function declaration and dynamic function using function expression





//=============================================================================
// SECTION 5: STATIC AND DYNAMIC FUNCTIONS
//=============================================================================

// NEW keyword in js is used to create an instance of a function, 
// which can be used to create dynamic functions. When we use the new keyword,
//  it creates a new object and sets the this keyword to that object.
//  This allows us to create multiple instances of the same function, each with its own state. 

// static function
function staticFunction() {
    console.log('This is a static function');
}
staticFunction(); // This is a static function

// this is not a  dynamic function
const dynamicFunction =  new function() {
    console.log('dynamic ');
}


dynamicFunction(); // This is a dynamic function

// we can also define dynamic function using arrow function
const dynamicArrowFunction = () => {
    console.log('This is a dynamic arrow function');
}
dynamicArrowFunction(); // This is a dynamic arrow function

// what cunstructor function in js
// constructor function is a function which is used to create objects in js
// it is a function which is used to initialize the properties of an object
// it is a function which is used to create multiple instances of an object

//=============================================================================

// difference between static and dynamic function
// static function is defined using function declaration and can be called without creating an instance of the class
// dynamic function is defined using function expression and can be called only after creating an instance of the class
// conscept of heap and stack memmory in js
// stack memory is used to store primitive data types and function calls
// heap memory is used to store objects and functions