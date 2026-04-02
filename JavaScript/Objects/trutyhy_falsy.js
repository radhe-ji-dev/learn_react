// Truthy and Falsy Values in JavaScript - Comprehensive Guide with Tricky Examples

// In JS, values are truthy (true in if(Boolean(val))) or falsy (false).
// Falsy values (only 8 total):
const falsyValues = [
  false,
  0,
  -0,
  0n,     // BigInt(0)
  "",
  null,
  undefined,
  NaN
];

// Truthy: everything else!

// Examples (minimal logs)
console.group(&#x27;Falsy Examples&#x27;);
console.log(&#x27;Boolean(false):&#x27;, Boolean(false));
console.log(&#x27;Boolean(0):&#x27;, Boolean(0));
console.log(&#x27;Boolean(null):&#x27;, Boolean(null));
console.log(&#x27;Boolean(undefined):&#x27;, Boolean(undefined));
console.log(&#x27;Boolean(NaN):&#x27;, Boolean(NaN));
console.groupEnd();

console.group(&#x27;Tricky Truthy&#x27;);
console.log(&#x27;!![] :&#x27;, !![]);              // true (empty array)
console.log(&#x27;!!{} :&#x27;, !!{});              // true (empty object)
console.log(&#x27;!!" ":&#x27;, !!" ");         // true (space string)
console.groupEnd();

// Operators
// || returns first TRUTHY (or last)
console.log(&#x27;"" || "default":&#x27;, "" || "default");  // "default"
console.log(&#x27;0 || "default":&#x27;, 0 || "default");   // "default"
console.log(&#x27;[] || "default":&#x27;, [] || "default"); // "default" (!!!)

// && returns first FALSY (or last)
console.log(&#x27;true && "win":&#x27;, true && "win");  // "win"
console.log(&#x27;"" && "win":&#x27;, "" && "win"); // ""

// ?? nullish coalescing (null/undefined only)
console.log(&#x27;0 ?? "default":&#x27;, 0 ?? "default");     // 0 (falsy but not nullish)
console.log(&#x27;null ?? "default":&#x27;, null ?? "default"); // "default"

// Logical assignments (ES2021)
let a = null;
a ??= "default";  // a = "default" (if null/undefined)
let b = 0;
b ||= 42;         // b = 42 (if falsy)
b &&= 100;        // b = 100 (if truthy)

// Tricky QA Examples (Interview-style)
console.group(&#x27;Tricky QA&#x27;);
console.log(&#x27;Q1: [] == false ?&#x27;, [] == false);     // true (toString "" == false)
console.log(&#x27;Q2: [] === false ?&#x27;, [] === false);  // false
console.log(&#x27;Q3: ![] ?&#x27;, ![]);                     // false
console.log(&#x27;Q4: NaN == NaN ?&#x27;, NaN == NaN);      // false (NaN != NaN)
console.log(&#x27;Q5: [20,-10].reduce((a,b) => a) ?&#x27;, [20,-10].reduce((a,b) => a)); // NaN!
console.log(&#x27;Q6: "false" == false ?&#x27;, "false" == false); // false
console.log(&#x27;Q7: +[] + [] + "4" ?&#x27;, +[] + [] + "4"); // "04"
console.log(`Q8: 3 && 2 && 1 ?`, 3 && 2 && 1); // 1 (last truthy)
console.groupEnd();

console.log(&#x27;\n✅ Complete! Run this file to see results.&#x27;);

// Rename suggestion: mv trutyhy_falsy.js truthy_falsy.js




