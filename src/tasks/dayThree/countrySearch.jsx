import React, { useEffect, useState } from 'react';

const CountryFlagsSearch = () => {
	const [countries, setCountries] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetch(
			'https://countries-search-data-prod-812920491762.asia-south1.run.app/countries'
		)
			.then((res) => res.json())
			.then((data) => setCountries(data))
			.catch((err) => console.error('error fetching data', err));
	}, []);

	function handleSearch() {
		const filteredCountries = countries.filter((country) =>
			country.common.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setCountries(filteredCountries);
	}

	return (
		<div>
			{/* Sticky search bar */}
			<div
				style={{
					position: 'sticky',
					top: 0,
					background: '#fff',
					padding: '10px',
					zIndex: 1,
					borderBottom: '1px solid #ddd',
					textAlign: 'center',
				}}>
				<input
					type='text'
					placeholder='Search countries...'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button onClick={handleSearch}>Search</button>
			</div>

			{/* Scrollable results */}
			<div style={{ maxHeight: '80vh', overflowY: 'auto', padding: '10px' }}>
				{countries.map((country) => (
					<div key={country.common} style={{ textAlign: 'center' }}>
						<img
							src={country.png}
							alt={`Flag of ${country.common}`}
							width='100'
						/>
						<h4>{country.common}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default CountryFlagsSearch;
