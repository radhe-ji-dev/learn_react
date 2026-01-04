// App.jsx
import React, { useState } from 'react';

function App() {
	// <-- Must start with uppercase
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [fullName, setFullName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent page reload
		if (firstName.trim() && lastName.trim()) {
			setFullName(`${firstName} ${lastName}`);
		} else {
			setFullName(''); // do not display if any field is empty
		}
	};

	return (
		<div style={{ padding: '2rem', fontFamily: 'Arial' }}>
			<h1>Full Name Display</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='First Name'
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					style={{ marginRight: '1rem' }}
				/>
				<input
					type='text'
					placeholder='Last Name'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					style={{ marginRight: '1rem' }}
				/>
				<button type='submit'>Submit</button>
			</form>
			{fullName && (
				<div style={{ marginTop: '1rem' }}>Full Name: {fullName}</div>
			)}
		</div>
	);
}

export default App;
