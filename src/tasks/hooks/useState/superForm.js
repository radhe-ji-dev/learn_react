import React, { useState } from 'react';

function SuperForm() {
	const [form, setform] = useState({
		name: '',
		mail: '',
	});

	const [error, setErrors] = useState({ });

	const handleSubmit = (e) => {
		e.preventDefault();

		let error = {};
		if (form.name === '') {
			error.name = 'name is empty';
		}
		if (form.mail === '') {
			error.mail = 'mail is empty is empty';
		}

		setErrors(error);
		console.log('form submit');
		console.log(form);
	};

	const handleChange = (e) => {
		setform({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div style={{ alignSelf: 'center', display: 'block' }}>
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<input
					name='name'
					id='name'
					type='text'
					value={form.name}
					onChange={handleChange}
					style={{ border: '4px solid' }}
				/>
				<p>{error.name}</p>
				<label>Email</label>
				<input
					name='mail'
					id='mail'
					type='text'
					value={form.mail}
					onChange={handleChange}
					style={{ border: '4px solid' }}
				/>

				<input type='submit' value='Submit' />
				<p>{error.mail}</p>
			</form>
		</div>
	);
}

export default SuperForm;
