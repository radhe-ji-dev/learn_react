import React, { useEffect, useState } from 'react';

function Dashboard() {
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [centers, setCenters] = useState([]);

	const [selectedState, setSelectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');

	const [showStates, setShowStates] = useState(false);
	const [showCities, setShowCities] = useState(false);

	const [showBooking, setShowBooking] = useState(false);
	const [selectedCenter, setSelectedCenter] = useState('');

	// Fetch states
	useEffect(() => {
		fetch('https://meddata-backend.onrender.com/states')
			.then((res) => res.json())
			.then((data) => setStates(data));
	}, []);

	// Fetch cities
	useEffect(() => {
		if (!selectedState) return;
		fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
			.then((res) => res.json())
			.then((data) => setCities(data));
	}, [selectedState]);

	// Search
	const handleSearch = (e) => {
		e.preventDefault();
		fetch(
			`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
		)
			.then((res) => res.json())
			.then((data) => setCenters(data));
	};

	// Book submit (store in localStorage)
	const submitBooking = () => {
		const booking = {
			'Hospital Name': selectedCenter,
			City: selectedCity,
			State: selectedState,
			bookingDate: '2024-12-15',
			bookingTime: '10:00 AM',
		};

		const existing = JSON.parse(localStorage.getItem('bookings')) || [];
		localStorage.setItem('bookings', JSON.stringify([...existing, booking]));

		setShowBooking(false);
	};

	return (
		<div>
			{/* STATE DROPDOWN */}
			<div id='state' onClick={() => setShowStates(!showStates)}>
				{selectedState || 'Select State'}
				{showStates && (
					<ul>
						{states.map((state) => (
							<li
								key={state}
								onClick={() => {
									setSelectedState(state);
									setShowStates(false);
								}}>
								{state}
							</li>
						))}
					</ul>
				)}
			</div>

			{/* CITY DROPDOWN */}
			<div id='city' onClick={() => setShowCities(!showCities)}>
				{selectedCity || 'Select City'}
				{showCities && (
					<ul>
						{cities.map((city) => (
							<li
								key={city}
								onClick={() => {
									setSelectedCity(city);
									setShowCities(false);
								}}>
								{city}
							</li>
						))}
					</ul>
				)}
			</div>

			{/* SEARCH BUTTON */}
			<button type='submit' id='searchBtn' onClick={handleSearch}>
				Search
			</button>

			{/* RESULT HEADING */}
			{centers.length > 0 && (
				<h1>
					{centers.length} medical centers available in{' '}
					{selectedCity.toLowerCase()}
				</h1>
			)}

			{/* CENTER LIST */}
			{centers.map((c, i) => (
				<div key={i}>
					<h3>{c['Hospital Name']}</h3>
					<button
						onClick={() => {
							setSelectedCenter(c['Hospital Name']);
							setShowBooking(true);
						}}>
						Book FREE Center Visit
					</button>
				</div>
			))}

			{/* BOOKING SECTION */}
			{showBooking && (
				<div>
					<p>Today</p>
					<p>Morning</p>
					<p>Afternoon</p>
					<p>Evening</p>
					<button onClick={submitBooking}>Submit</button>
				</div>
			)}
		</div>
	);
}

export default Dashboard;
