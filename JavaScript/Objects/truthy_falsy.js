// Truthy and Falsy Values in JavaScript - Comprehensive Guide with Tricky Examples

// In JS, values are truthy (true in if(Boolean(val))) or falsy (false).
// Falsy values (only 8 total):
const falsyValues = [
	false,
	0,
	-0,
	0n, // BigInt(0)
	'',
	null,
	undefined,
	NaN,
];

// Truthy: everything else!

// Examples (minimal logs)
console.group('Falsy Examples');
console.log('Boolean(false):', Boolean(false));
console.log('Boolean(0):', Boolean(0));
console.log('Boolean(null):', Boolean(null));
console.log('Boolean(undefined):', Boolean(undefined));
console.log('Boolean(NaN):', Boolean(NaN));
console.groupEnd();

console.group('Tricky Truthy');
console.log('!![]:', !![]); // true (empty array)
console.log('!!{}:', !!{}); // true (empty object)
console.log('!!" ":', !!' '); // true (space string)
console.groupEnd();

// Operators
// || returns first TRUTHY (or last)
console.log('"" || "default":', '' || 'default'); // "default"
console.log('0 || "default":', 0 || 'default'); // "default"
console.log('[] || "default":', [] || 'default'); // "default" (!!!)

// && returns first FALSY (or last)
console.log('true && "win":', true && 'win'); // "win"
console.log('"" && "win":', '' && 'win'); // ""

// ?? nullish coalescing (null/undefined only)
console.log('0 ?? "default":', 0 ?? 'default'); // 0 (falsy but not nullish)
console.log('null ?? "default":', null ?? 'default'); // "default"

// Logical assignments (ES2021)
let a = null;
a ??= 'default'; // a = 'default' (if null/undefined)
let b = 0;
b ||= 42; // b = 42 (if falsy)
b &= 100; // b = 100 (if truthy)

console.log('Logical assign result b:', b); // 100

// Tricky QA Examples (Interview-style)
console.group('Tricky QA');
console.log('Q1: [] == false:', [] == false); // true ("" == false after toPrimitive)
//console.log('Q2: [] === false:', [] === false); // false
console.log('Q3: ![]:', ![]); // false
console.log('Q4: NaN == NaN:', NaN == NaN); // false (NaN != NaN)
console.log(
	'Q5: [20,-10].reduce((a,b) => a):',
	[20, -10].reduce((a, b) => a),
); // NaN!
console.log('Q6: "false" == false:', 'false' == false); // false
console.log('Q7: +[] + [] + "4":', +[] + [] + '4'); // "04"
console.log('Q8: 3 && 2 && 1:', 3 && 2 && 1); // 1 (last truthy)
console.log('Q9: null || undefined && 0:', null || (undefined && 0)); // 0 (&& first)
console.log('Q10: "" ? "truthy!" : "falsy":', '' ? 'truthy!' : 'falsy'); // falsy
console.groupEnd();
