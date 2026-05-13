import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cardgrid() {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [city, setCity] = useState('');

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const res = await axios.get(
					'https://jsonplaceholder.typicode.com/users',
				);

				setUsers(res.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUsers();
	}, []);

	console.log(users);

	// Name Search //
	const handlChangeName = (e) => {
		setName(e.target.value);
		console.log(name);
	};

	const handleNameSearch = (e) => {
		const namefilter = users.filter((users) => users.name == name);
		console.log(namefilter);
		setUsers(namefilter);
	};

	//Comapny Serach
	const handlChangeCompany = (e) => {
		setCompany(e.target.value);
		console.log(company);
	};

	const handleCompanySearch = () => {
		const companyfilter = users.filter(
			(users) => users.company.name.toLowerCase() === company.toLowerCase(),
		);

		console.log(companyfilter);
		setUsers(companyfilter);
		console.log('company search clciked');
	};

	// City Search //

	const handlChangeCity = (e) => {
		setCity(e.target.value);
		console.log('change city input');
		console.log(city);
	};

	const handleCitySearch = (e) => {
		const cityfilter = users.filter(
			(users) => users.address.city.toLowerCase() === city.toLowerCase(),
		);
		setUsers(cityfilter);
		console.log('city search clciked');
	};

	return (
		<div>
			<div>
				<input
					type='text'
					placeholder='name'
					style={{ border: '2px solid black' }}
					onChange={handlChangeName}></input>
				<button style={{ background: 'red' }} onClick={handleNameSearch}>
					Serach Name
				</button>
				<input
					type='text'
					placeholder='company'
					style={{ border: '2px solid black' }}
					onChange={handlChangeCompany}></input>
				<button style={{ background: 'red' }} onClick={handleCompanySearch}>
					Serach Comapny
				</button>
				<input
					type='text'
					placeholder='city'
					style={{ border: '2px solid black' }}
					onChange={handlChangeCity}></input>
				<button style={{ background: 'red' }} onClick={handleCitySearch}>
					Serach City
				</button>
			</div>

			<div className='flex col-span-4'>
				{users.map((user) => (
					<div
						key={user.id}
						style={{
							border: '2px solid black',
							background: 'pink',
							padding: '10px',
							margin: '10px',
						}}>
						<h2>User Details</h2>

						<p>
							<strong>Name:</strong> {user.name}
						</p>

						<p>
							<strong>Username:</strong> {user.username}
						</p>

						<p>
							<strong>Email:</strong> {user.email}
						</p>

						<p>
							<strong>Phone:</strong> {user.phone}
						</p>

						<p>
							<strong>Website:</strong> {user.website}
						</p>

						<h3>Company Details</h3>

						<p>
							<strong>Company Name:</strong> {user.company.name}
						</p>

						<p>
							<strong>Catch Phrase:</strong> {user.company.catchPhrase}
						</p>

						<p>
							<strong>Business:</strong> {user.company.bs}
						</p>

						<h3>Address Details</h3>

						<p>
							<strong>Street:</strong> {user.address.street}
						</p>

						<p>
							<strong>Suite:</strong> {user.address.suite}
						</p>

						<p>
							<strong>City:</strong> {user.address.city}
						</p>

						<p>
							<strong>Zipcode:</strong> {user.address.zipcode}
						</p>

						<p>
							<strong>Latitude:</strong> {user.address.geo.lat}
						</p>

						<p>
							<strong>Longitude:</strong> {user.address.geo.lng}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
