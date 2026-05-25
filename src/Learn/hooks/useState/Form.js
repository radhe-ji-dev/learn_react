import React, { useState } from 'react';

function Form() {
	const [name, setName] = useState(''); // ek single state se kese kr skte hai ?
	const [email, setEmail] = useState('');
	const [gender, setGender] = useState('');
	const [hobbies, setHobbies] = useState([]);

	// checkbox handler
	const handleHobbies = (e) => {
		const { value, checked } = e.target;

		if (checked) {
			setHobbies([...hobbies, value]);
		} else {
			setHobbies(hobbies.filter((hobby) => hobby !== value));
		}
	};

	// now we need to cpnver this into a function using a single Form State
	// we will be using array, object, and spread oprators

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent page reload

		const formData = {
			name,
			email,
			gender,
			hobbies,
		};

		// local storage ke liye object ka use goo practice hai
		const existingData = JSON.parse(localStorage.getItem('users')) || [];

		existingData.push(formData); // form data ko push kiya

		localStorage.setItem('users', JSON.stringify(existingData)); // user ko diya using stringify key value pairs se
		// or stringfy ne isko bhi key value bna diya

		console.log('Saved:', formData);

		setEmail('');
		setGender('');
		setHobbies([]);
	};

	return (
		<div style={{ padding: '20px' }}>
			<h2>Simple Form</h2>

			<form onSubmit={handleSubmit}>
				<label>Name:</label>
				<br />
				<input
					type='text'
					value={name}
					onChange={(e) => setName(e.target.value)}
					style={{ border: '2px solid black', marginBottom: '10px' }}
				/>
				<br />
				<label>Email:</label>
				<br />
				<input
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					style={{ border: '2px solid black', marginBottom: '10px' }}
				/>
				<br />
				<label>Gender:</label>
				<br />
				<input
					type='radio'
					name='gender'
					value='Male'
					checked={gender === 'Male'}
					onChange={(e) => setGender(e.target.value)}
				/>{' '}
				Male
				<input
					type='radio'
					name='gender'
					value='Female'
					checked={gender === 'Female'}
					onChange={(e) => setGender(e.target.value)}
					style={{ marginLeft: '10px' }}
				/>{' '}
				Female
				<br />
				<br />
				{/* Hobbies */}
				<label>Hobbies:</label>
				<br />
				<input
					type='checkbox'
					value='Reading'
					checked={hobbies.includes('Reading')}
					onChange={handleHobbies}
				/>{' '}
				Reading
				<input
					type='checkbox'
					value='Gaming'
					checked={hobbies.includes('Gaming')}
					onChange={handleHobbies}
					style={{ marginLeft: '10px' }}
				/>{' '}
				Gaming
				<input
					type='checkbox'
					value='Traveling'
					checked={hobbies.includes('Traveling')}
					onChange={handleHobbies}
					style={{ marginLeft: '10px' }}
				/>{' '}
				Traveling
				<br />
				<br />
				{/* Submit Button */}
				<button type='submit' style={{ background: 'red' }}>
					Submit
				</button>
			</form>

			<br />

			{/* Output */}
			<textarea
				rows='6'
				cols='40'
				value={`Name: ${name}
Email: ${email}
Gender: ${gender}
Hobbies: ${hobbies.join(', ')}`}
				readOnly
			/>
		</div>
	);
}

export default Form;
