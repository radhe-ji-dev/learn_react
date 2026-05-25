import React, { useState } from 'react';
import { Label } from 'recharts';

export default function Dashboard() {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [city, setCity] = useState('');

	return (
		<div>
			<input
				type='text'
				placeholder='name'
				style={{ border: '2px solid black' }}></input>
			<button style={{ background: 'red' }}>Serach Name</button>
			<input
				type='text'
				placeholder='company'
				style={{ border: '2px solid black' }}></input>
			<button style={{ background: 'red' }}>Serach Comapny</button>
		</div>
	);
}
