import { React, useMemo, useState } from 'react';

export default function UsemMemo() {
	const [count, setCount] = useState(0);

	const expensiveComputation = (num) => {
		console.log('Running expensive computation...');
		let result = 0;
		for (let i = 0; i < 10000; i++) {
			result += num;
		}
		console.log('memo value', result);

		return result;
	};

	const memoizedValue = useMemo(() => expensiveComputation(count), [count]);

	return (
		<div>
			<h1>useMemo Example</h1>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<p>Expensive Computation Result: {memoizedValue}</p>
		</div>
	);
}

// intv qna For use memo at all level
