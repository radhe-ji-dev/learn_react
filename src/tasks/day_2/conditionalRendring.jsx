import React from 'react';

function ConditionalRendering({ isLoggedIn }) {
	//const isLoggedIn = true; // Change this value to test conditional rendering
	return (
		<din>
			{isLoggedIn ? (
				<h1>Welcome back, User!</h1>
			) : (
				<h1>Please log in to continue.</h1>
			)}
		</din>
	);
}

function ConditionalRenderingTernery({ isLoggedIn }) {
	return (
		<div>
			{isLoggedIn ? (
				<h1>Welcome back, User!</h1>
			) : (
				<h1>Please log in to continue.</h1>
			)}
		</div>
	);
}

export { ConditionalRenderingTernery, ConditionalRendering };
