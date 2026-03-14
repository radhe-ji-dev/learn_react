let arr = ['[', '{', '}', ']', '(', ')'];

function isBalanced(arr) {
	let stc = [];
	let pairs = {
		'}': '{',
		']': '[',
		')': '(',
	};
	for (let ch of arr) {
		if (ch === '{' || ch === '[' || ch === '(') {
			stc.push(ch);
		} else if (ch === '}' || ch === ']' || ch === ')') {
			if (stc.length === 0) {
				return false;
			}
			let last = stc.pop();
			if (last !== pairs[ch]) {
				return false;
			}
		}
	}
	return stc.length === 0;
}

console.log(isBalanced(arr));


//more common stack DSA problems

//1. Next Greater Element
// 2. Valid Parentheses
// 3. Min Stack
// 4. Evaluate Reverse Polish Notation
// 5. Daily Temperatures
// 6. Largest Rectangle in Histogram
// 7. Implement Stack using Queues
// 8. Sort Stack
// 9. Remove K Digits
// 10. Basic Calculator
//11. Stock Span Problem
//12. Infix to Postfix Conversion
//13. Postfix Expression Evaluation
//14. Celebrity Problem
//15. Histogram Area Under Skyline
//16. Sliding Window Maximum
//17. Design Browser History
//18. Design a Stack with Increment Operation
//19. Decode String
//20. Longest Valid Parentheses