import { useState, useMemo } from 'react';

function UseMemoDemo() {
	console.log('🔁 Component re-rendered');

	// State that causes re-render
	const [count, setCount] = useState(0);

	// State that affects expensive calculation
	const [number, setNumber] = useState(5);

	// Expensive computation (memoized)
	const expensiveCalculation = useMemo(() => {
		console.log('🔥 Expensive calculation executed');

		let result = 0;
		for (let i = 0; i < 1_000_000_000; i++) {
			result += number;
		}

		return result;
	}, [number]);

	return (
		<div style={{ padding: '20px' }}>
			<h2>useMemo Re-render Control Demo</h2>

			<p>
				<strong>Count:</strong> {count}
			</p>
			<button onClick={() => setCount(count + 1)}>
				Increment Count (Re-render only)
			</button>

			<hr />

			<p>
				<strong>Number:</strong> {number}
			</p>
			<button onClick={() => setNumber(number + 1)}>
				Change Number (Re-render + Recompute)
			</button>

			<hr />

			<p>
				<strong>Expensive Result:</strong> {expensiveCalculation}
			</p>
		</div>
	);
}

export default UseMemoDemo;
