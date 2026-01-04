// lest create a simple form with controlled components
import React, { useState } from 'react';
function ControlledForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Name: ${name}, Email: ${email}`);
	};
	console.log('name text render');
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					id='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
}
export default ControlledForm;
