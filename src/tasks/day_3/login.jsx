import React, { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username === 'user' && password === 'password') {
			setMessage('');
		} else {
			setMessage('Invalid username or password');
		}
	};

	const isFormValid = username.trim() !== '' && password.trim() !== '';

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor='password'>Password</label>
				<input
					id='password'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button type='submit' disabled={!isFormValid}>
				Submit
			</button>

			{message && <p>{message}</p>}
		</form>
	);
};

export default Login;
