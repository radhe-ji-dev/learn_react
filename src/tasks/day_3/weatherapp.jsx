import React, { useState } from 'react';

const WeatherApp = () => {
	const [city, setCity] = useState('');
	const [weatherData, setWeatherData] = useState(null);
	const [loading, setLoading] = useState(false);

	const apiKey = '6895e1b622fb4a7b98271042260401';

	const fetchWeatherData = async () => {
		if (!city) return;

		setLoading(true);
		setWeatherData(null);

		try {
			const response = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
			);

			if (!response.ok) {
				throw new Error();
			}

			const data = await response.json();

			setWeatherData({
				temperature: data.current.temp_c,
				humidity: data.current.humidity,
				condition: data.current.condition.text,
				windSpeed: data.current.wind_kph,
			});
		} catch (error) {
			alert('Failed to fetch weather data');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			{/* Search Bar */}
			<input
				type='text'
				value={city}
				onChange={(e) => setCity(e.target.value)}
				placeholder='Enter city name'
			/>
			<button onClick={fetchWeatherData}>Search</button>

			{/* Loading Message */}
			{loading && <p>Loading data…</p>}

			{/* Weather Cards */}
			{weatherData && (
				<div className='weather-cards'>
					<div
						className='weather-card'
						style={{ backgroundColor: '#f0f8ff', flexDirection: 'column' }}>
						<p>Temperature: {weatherData.temperature} °C</p>
					</div>
					<div
						className='weather-card'
						style={{ backgroundColor: '#e6f7ff', flexDirection: 'column' }}>
						<p>Humidity: {weatherData.humidity} %</p>
					</div>
					<div
						className='weather-card'
						style={{ backgroundColor: '#ccf2ff', flexDirection: 'column' }}>
						<p>Condition: {weatherData.condition}</p>
					</div>
					<div
						className='weather-card'
						style={{ backgroundColor: '#b3ecff', flexDirection: 'column' }}>
						<p>Wind Speed: {weatherData.windSpeed} km/h</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default WeatherApp;
