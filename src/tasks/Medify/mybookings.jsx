import React from 'react';

function MyBookings() {
	const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

	return (
		<div>
			<h1>My Bookings</h1>
			{bookings.map((b, i) => (
				<div key={i}>
					<h3>{b['Hospital Name']}</h3>
				</div>
			))}
		</div>
	);
}

export default MyBookings;
