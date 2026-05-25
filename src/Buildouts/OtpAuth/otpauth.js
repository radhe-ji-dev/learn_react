import React, { useState, useEffect } from 'react';

export default function OtpAuth() {
	const [form, setForm] = useState('');
	const [btnenabled, setbtnEnabled] = useState(false);
	const [otp, setOtp] = useState('');
	const [errors, setErrors] = useState('');
	const [time, setTime] = useState(30);

	// Generate OTP once
	useEffect(() => {
		const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();

		setOtp(randomOtp);
		localStorage.setItem('otp', randomOtp);

		console.log('Generated OTP:', randomOtp);
	}, []);

	// Timer
	useEffect(() => {
		if (time === 0) {
			setbtnEnabled(false); // disable submit again
			setErrors('OTP Expired');
			return;
		}

		const timer = setInterval(() => {
			setTime((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [time]);

	function handleChange(e) {
		const value = e.target.value;

		setForm(value);

		// enable button only when 6 digits entered
		if (value.length === 6 && time > 0) {
			setbtnEnabled(true);
		} else {
			setbtnEnabled(false);
		}
	}

	function validateOtp() {
		if (time === 0) {
			setErrors('OTP Expired');
			return;
		}

		if (form === localStorage.getItem('otp')) {
			setErrors('OTP is Correct ✅');
		} else {
			setErrors('Wrong OTP ❌');
		}
	}

	return (
		<div className='flex flex-col justify-center items-center m-3'>
			<div className='flex flex-row justify-center items-center'>
				<label className='m-3 font-extrabold' htmlFor='otpinput'>
					Enter OTP
				</label>

				<input
					placeholder='enter otp'
					id='otpinput'
					className='py-2 rounded m-3 border-[2px] border-solid border-amber-800 bg-orange-100'
					onChange={handleChange}
					value={form}
				/>
			</div>

			<div className='m-3 font-bold text-lg'>
				Time Remaining: {time} seconds
			</div>

			<div className='text-red-500 font-bold'>{errors}</div>

			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 disabled:opacity-50'
				disabled={!btnenabled}
				onClick={validateOtp}>
				Submit
			</button>
		</div>
	);
}
