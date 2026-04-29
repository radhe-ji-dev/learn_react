import React from 'react';

function CountAddition() {
	const [count, setCount] = React.useState(0);

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={(prev) => setCount(prev + 1)}>Add</button>
		</div>
	);
}

export default CountAddition;

//some tricky useState usage
//interview problems
