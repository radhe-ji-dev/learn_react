// lets explore optional chaining in js
// 👉 ?. = “if exists then access, else return undefined


// OPTIONAL CHAINING (?.) - PRACTICAL USE CASES

// 1. API RESPONSE HANDLING
let apiResponse = {
  user: {
    name: "Rahul"
  }
};

// Without optional chaining -> may crash
// console.log(apiResponse.user.address.city);

// With optional chaining
console.log(apiResponse.user?.address?.city); // undefined


// 2. SAFE FUNCTION CALL
let obj = {};

// If function exists, call it
obj.sayHello?.(); // no error


// 3. ARRAY ACCESS
let arr = [10, 20, 30];

console.log(arr?.[1]); // 20
console.log(arr?.[5]); // undefined


// 4. OPTIONAL CONFIG OBJECT
function printUser(user) {
  console.log("Name:", user?.name);
  console.log("City:", user?.address?.city);
}

printUser({ name: "Amit" });


// 5. REAL WORLD: FORM DATA
let formData = {
  personal: {
    name: "Ravi"
  }
};

console.log(formData.personal?.name); // Ravi
console.log(formData.contact?.phone); // undefined


// 6. CHAINING MULTIPLE LEVELS
let company = {
  employee: {
    details: {
      salary: 50000
    }
  }
};

console.log(company.employee?.details?.salary); // 50000
console.log(company.employee?.info?.salary); // undefined


// 7. COMBINING WITH DEFAULT VALUE (IMPORTANT)
let user = {};

let city = user.address?.city || "Not Available";
console.log(city); // Not Available


// 8. OPTIONAL METHOD + RETURN VALUE
let calculator = {
  add: (a, b) => a + b
};

console.log(calculator.add?.(2, 3)); // 5
console.log(calculator.sub?.(2, 3)); // undefined


// SUMMARY:
// ?. prevents errors when accessing missing data
// returns undefined instead of crashing
