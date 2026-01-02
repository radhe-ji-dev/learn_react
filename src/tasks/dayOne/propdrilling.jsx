// propdrill in react
import React from 'react';
import Child from './propdrillchild';
const PropDrilling = () => {
	const user = {
		name: 'John Doe',
		age: 30,
		location: 'New York',
	};
	return (
		<div>
			<h1>Prop Drilling Example</h1>
			<Child user={user} />
		</div>
	);
};

const Child = ({ user }) => {
	return (
		<div>
			<h2>Child Component</h2>
			<p>Name: {user.name}</p>
			<p>Age: {user.age}</p>
			<p>Location: {user.location}</p>
		</div>
	);
};
export default PropDrilling;
//how to avoid prop drilling
//context api
//redux
