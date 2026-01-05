import React from 'react';
import { useState, useRef } from 'react';

function StableReference() {
	const stableRef = useRef({
		value: 0,
	});

	const increment = () => {
		stableRef.current.value += 1;
		console.log('Stable Ref Value:', stableRef.current.value);
	};
	return (
		<div>
			<h2>Count: {stableRef.current.value}</h2>
			<button onClick={increment}>Increment</button>
		</div>
	);
}

export default StableReference;
