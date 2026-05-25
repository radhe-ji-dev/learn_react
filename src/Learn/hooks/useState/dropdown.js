import React, { useState } from 'react';

function SelectCountry() {
	const data = {
		India: {
			Rajasthan: ['Jaipur', 'Udaipur', 'Kota'],
			Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
		},

		USA: {
			California: ['Los Angeles', 'San Diego'],
			Texas: ['Houston', 'Dallas'],
		},
	};

	const [country, setCountry] = useState('');
	const [states, setStates] = useState('');
	const [city, setCity] = useState('');

	const handleOnchangeCountry = (e) => {
		setCountry(e.target.value);
		setStates('');
		setCity('');
	};

	const handleOnchangeState = (e) => {
		setStates(e.target.value);
		setCity('');
	};

	const handleOnchangeCity = (e) => {
		setCity(e.target.value);
	};

	return (
		<div>
			{/* Country */}
			<select value={country} onChange={handleOnchangeCountry}>
				<option value=''>Select Country</option>

				{Object.keys(data).map((country) => (
					<option value={country}>{country}</option>
				))}
			</select>

			{/* State */}
			<select value={states} onChange={handleOnchangeState} disabled={!country}>
				<option value=''>Select State</option>

				{country &&
					Object.keys(data[country]).map((state) => (
						<option value={state}>{state}</option>
					))}
			</select>

			{/* City */}
			<select value={city} onChange={handleOnchangeCity} disabled={!states}>
				<option value=''>Select City</option>

				{states &&
					data[country][states].map((city) => (
						<option value={city}>{city}</option>
					))}
			</select>
		</div>
	);
}

export default SelectCountry;
