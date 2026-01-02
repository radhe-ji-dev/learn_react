// anatomy of useEffect
// it has two parameters
// first parameter is a function
// second parameter is an array of dependencies

// lest see examples of useEffect with dependencies

import React, { useState, useEffect } from 'react';
const UseEffectExample = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');
	useEffect(() => {
		console.log('useEffect with count dependency - runs when count changes');
	}, [count]);
	return (
		<div>
			<h2>useEffect Examples</h2>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment Count</button>
			<br />
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder='Enter your name'
			/>
			<p>Name: {name}</p>
		</div>
	);
};

export default UseEffectExample;
