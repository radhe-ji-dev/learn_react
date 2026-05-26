import React from 'react';

export default function dynamiclist() {
	const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
	const islogin = true;
	return (
		<div>
			{names.map(
				(
					name,
					index, // syntax error: map should be names.map
				) => (
					<p key={index}>{name}</p> // avoid index as key in production, but it's fine for this example
				),
			)}
			{islogin ? <p>Welcome back!</p> : <p>Please log in.</p>}
			{islogin && <p>Welcome back!</p>}
		</div>
	);
}
