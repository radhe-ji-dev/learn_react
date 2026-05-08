import React, { useState } from 'react';

function SuperForm() {
	const [form, setform] = useState({
		name: '',
		mail: '',
    });

    

	const handleSubmit = (e) => {
		e.preventDefault();

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
			</form>
		</div>
	);
}

export default SuperForm;
