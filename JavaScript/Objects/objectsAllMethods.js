// Here is the summary table of all JavaScript Object methods categorized by their primary use case:

// | Category | Method | Description |
// | --- | --- | --- |
// | **Data Extraction** | `Object.keys(obj)` | Returns an array of an object's own enumerable property names. |
// |  | `Object.values(obj)` | Returns an array of an object's own enumerable property values. |
// |  | `Object.entries(obj)` | Returns an array of an object's own `[key, value]` pairs. |
// | **Creation & Merging** | `Object.create(proto)` | Creates a new object with a specified prototype. |
// |  | `Object.assign(target, ...sources)` | Copies enumerable own properties from source objects to a target object. |
// |  | `Object.fromEntries(iterable)` | Transforms a list of key-value pairs into an object. |
// | **Locking & Security** | `Object.freeze(obj)` | Freezes an object (prevents adding, deleting, or changing properties). |
// |  | `Object.seal(obj)` | Seals an object (prevents adding/deleting, but allows editing existing properties). |
// |  | `Object.preventExtensions(obj)` | Prevents any new properties from being added to an object. |
// | **State Checking** | `Object.isFrozen(obj)` | Checks if an object is frozen. |
// |  | `Object.isSealed(obj)` | Checks if an object is sealed. |
// |  | `Object.isExtensible(obj)` | Checks if an object can have new properties added. |
// | **Prototypes & Meta** | `Object.getPrototypeOf(obj)` | Returns the prototype of the specified object. |
// |  | `Object.setPrototypeOf(obj, proto)` | Sets the prototype of an object (not recommended for performance). |
// |  | `Object.is(v1, v2)` | Determines whether two values are the exact same value. |
// |  | `Object.groupBy(items, callback)` | Groups elements of an iterable based on a callback function. |
// | **Property Descriptors** | `Object.defineProperty(obj, prop, desc)` | Defines or modifies a specific property with a configuration descriptor. |
// |  | `Object.defineProperties(obj, props)` | Defines or modifies multiple properties using descriptors. |
// |  | `Object.getOwnPropertyDescriptor(obj, prop)` | Returns the configuration descriptor of a specific property. |
// |  | `Object.getOwnPropertyDescriptors(obj)` | Returns all configuration descriptors for an object. |
// |  | `Object.getOwnPropertyNames(obj)` | Returns all own property names (enumerable or not, excludes Symbols). |
// |  | `Object.getOwnPropertySymbols(obj)` | Returns all own Symbol properties. |
// | **Instance Methods** *(Prototype)* | `obj.hasOwnProperty(prop)` | Checks if a property exists directly on the object (use `Object.hasOwn()` instead). |
// |  | `obj.isPrototypeOf(target)` | Checks if the object exists in another object's prototype chain. |
// |  | `obj.propertyIsEnumerable(prop)` | Checks if a property is enumerable and belongs to the object. |
// |  | `obj.toString()` | Returns a string representation of the object. |
// |  | `obj.toLocaleString()` | Returns a localized string representation of the object. |
// |  | `obj.valueOf()` | Returns the primitive value of the object. |

// lets see all the methods in action:

// 🔹 Q1: Get keys
let obj1 = { a: 1, b: 2 };

let obj11 = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj1)); // ["a", "b"]

// 🔹 Q2: Get values
console.log(Object.values(obj11)); // [1, 2, 3]
delete obj11.b;
console.log(obj11); // {a: 1, c: 3}

// 🔹 Q3: Get entries
console.log(Object.entries(obj11)); // [["a", 1], ["c", 3]] - that is key-value pairs in array form

// 🔹 Q4: Convert array → object
let arr = [
	['x', 10],
	['y', 20],
];

console.log(Object.fromEntries(arr)); // {x: 10, y: 20}

// 🔹 Q5: Merge objects
let o1 = { a: 1 };
let o2 = { b: 2 };

let merged = Object.assign({}, o1, o2);
console.log(merged); // {a: 1, b: 2}

// 🔹 Q6: Freeze object
let obj6 = { a: 1 };

Object.freeze(obj6);
obj6.a = 100;
console.log(obj6.a); // 1 (cannot change)

// 🔹 Q7: Check if object is frozen
console.log(Object.isFrozen(obj6)); // true

// 🔹 Q8: Create object with prototype
let proto = {
	greet() {
		return 'Hello';
	},
};

let obj8 = Object.create(proto);
console.log(obj8.greet()); // "Hello" (inherited from prototype)

// 🔹 Q9: Define property with descriptor
let obj9 = {};

Object.defineProperty(obj9, 'a', {
	value: 1,
	writable: false, // cannot change value
	enumerable: true, // shows up in keys/values
	configurable: false, // cannot delete or reconfigure
});
console.log(obj9.a); // 1
obj9.a = 100;
console.log(obj9.a); // 1 (cannot change)
delete obj9.a;
console.log(obj9.a); // 1 (cannot delete)

// 🔹 Q10: Get property descriptor
let desc = Object.getOwnPropertyDescriptor(obj9, 'a');
console.log(desc);
// {
//   value: 1,
//   writable: false,
//   enumerable: true,
//   configurable: false
// }

// 🔹 Q11: Get all property descriptors
let allDesc = Object.getOwnPropertyDescriptors(obj9);
console.log(allDesc);
// {
//   a: {
//     value: 1,
//     writable: false,
//     enumerable: true,
//     configurable: false
//   }
// }

// 🔹 Q12: Get own property names (including non-enumerable
let obj12 = {};

Object.defineProperty(obj12, 'hidden', {
	value: 'secret',
	enumerable: false,
});
console.log(Object.getOwnPropertyNames(obj12)); // ["hidden"]

// 🔹 Q13: Get own Symbol properties
let sym1 = Symbol('sym1');
let sym2 = Symbol('sym2');

let obj13 = {};
obj13[sym1] = 'value1';
obj13[sym2] = 'value2';

console.log(Object.getOwnPropertySymbols(obj13)); // [Symbol(sym1), Symbol(sym2)]
// is kya use hai
// Symbol properties are often used for internal/private data that shouldn't be accessed or modified directly.
//  They won't show up in normal enumeration (like `for...in` or `Object.keys()`), providing a way to hide implementation details.

// 🔹 Q14: Check if property exists (hasOwnProperty
let obj14 = { a: 1 };

console.log(obj14.hasOwnProperty('a')); // true
console.log(obj14.hasOwnProperty('toString')); // false (inherited from prototype)

// 🔹 Q15: Check if object is prototype of another
let parent = {};
let child = Object.create(parent);
console.log(parent.isPrototypeOf(child)); // true
console.log(child.isPrototypeOf(parent)); // false

// 🔹 Q16: Check if property is enumerable
let obj16 = { a: 1 };

Object.defineProperty(obj16, 'hidden', {
	value: 'secret',
	enumerable: false,
});
console.log(obj16.propertyIsEnumerable('a')); // true
console.log(obj16.propertyIsEnumerable('hidden')); // false

// 🔹 Q17: Object to string
let obj17 = { a: 1, b: 2 };

console.log(obj17.toString()); // "[object Object]"
// default toString() method returns a string in the format "[object Type]", where "Type" is the internal [[Class]] property of the object.
//  For plain objects, it will always return "[object Object]".

// 🔹 Q18: Object to localized string
let obj18 = { a: 1, b: 2 };

console.log(obj18.toLocaleString()); // "{a: 1, b: 2}"
// The default implementation of `toLocaleString()` for plain objects does not provide a meaningful localized string representation.
//  It typically returns the same result as `toString()`, which is "[object Object]".
//  To get a more useful localized string, you would need to override the `toLocaleString()`
//  method in your object or use a custom formatting function.

// 🔹 Q19: Get primitive value of object
let obj19 = { a: 1 };

console.log(obj19.valueOf()); // {a: 1}
// The default implementation of `valueOf()` for plain objects returns the object itself.
//  It does not return a primitive value. To get a primitive value, you would need to override the `valueOf()` method in your object.

// 🔹 Q20: Group by using Object.groupBy
let items = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
];

let grouped = Object.groupBy(items, item => item.age);
console.log(grouped);
// {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }]
// }

