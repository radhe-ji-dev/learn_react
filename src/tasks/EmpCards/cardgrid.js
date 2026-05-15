import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cardgrid() {
	const [users, setUsers] = useState([]);
	const [filteredUsers, setFilteredUsers] = useState([]);

	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [city, setCity] = useState('');

	const [selectedUser, setSelectedUser] = useState(null);

	// loading + error
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true);

				const res = await axios.get(
					'https://jsonplaceholder.typicode.com/users',
				);

				setUsers(res.data);
				setFilteredUsers(res.data);
			} catch (error) {
				console.log(error);
				setError('Something went wrong while fetching data.');
			} finally {
				setLoading(false);
			}
		};

		fetchUsers();
	}, []);

	// LIVE SEARCH
	useEffect(() => {
		const filtered = users.filter((user) => {
			return (
				user.name.toLowerCase().includes(name.toLowerCase()) &&
				user.company.name.toLowerCase().includes(company.toLowerCase()) &&
				user.address.city.toLowerCase().includes(city.toLowerCase())
			);
		});

		setFilteredUsers(filtered);
	}, [name, company, city, users]);

	// Name Search
	const handlChangeName = (e) => {
		setName(e.target.value);
	};

	const handleNameSearch = () => {
		console.log('Name button clicked');
	};

	// Company Search
	const handlChangeCompany = (e) => {
		setCompany(e.target.value);
	};

	const handleCompanySearch = () => {
		console.log('Company button clicked');
	};

	// City Search
	const handlChangeCity = (e) => {
		setCity(e.target.value);
	};

	const handleCitySearch = () => {
		console.log('City button clicked');
	};

	// LOADING
	if (loading) {
		return <div className='text-center text-2xl mt-10'>Loading users...</div>;
	}

	// ERROR
	if (error) {
		return (
			<div className='text-center text-red-500 text-2xl mt-10'>{error}</div>
		);
	}

	return (
		<div>
			<div className='flex justify-center bg-orange-200'>
				<h1>User Directory</h1>
			</div>

			<div className='flex justify-center items-center'>
				<input
					type='text'
					placeholder='name'
					className='outline-double bg-blue-100'
					onChange={handlChangeName}
				/>

				<button
					onClick={handleNameSearch}
					className=' m-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-800'>
					Serach Name
				</button>

				<input
					type='text'
					placeholder='company'
					className='outline-double bg-blue-100'
					onChange={handlChangeCompany}
				/>

				<button
					onClick={handleCompanySearch}
					className=' m-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-800'>
					Serach Comapny
				</button>

				<input
					type='text'
					placeholder='city'
					className='outline-double bg-blue-100'
					onChange={handlChangeCity}
				/>

				<button
					onClick={handleCitySearch}
					className=' m-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-800'>
					Serach City
				</button>
			</div>

			<div className='grid grid-cols-3 gap-6'>
				{filteredUsers.map((user) => (
					<div
						key={user.id}
						onClick={() => setSelectedUser(user)}
						className='border p-5 rounded-2xl shadow-md hover:scale-105 cursor-pointer'>
						
						<div className='w-14 h-14 rounded-full bg-blue-500 text-white flex justify-center items-center text-2xl font-bold mb-3'>
							{user.name.charAt(0)}
						</div>

						<h1 className='text-xl font-bold'>{user.name}</h1>

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

						<p>
							<strong>Company:</strong> {user.company.name}
						</p>

						<p>
							<strong>City:</strong> {user.address.city}
						</p>
					</div>
				))}

				{/* Popup Modal */}

				{selectedUser && (
					<div
						className='fixed inset-0 bg-black/50 
		flex justify-center items-center'>
						<div className='bg-white p-8 rounded-2xl w-[500px]'>
							<h1 className='text-2xl font-bold mb-4'>{selectedUser.name}</h1>

							<p>
								<strong>Username:</strong> {selectedUser.username}
							</p>

							<p>
								<strong>Phone:</strong> {selectedUser.phone}
							</p>

							<p>
								<strong>Website:</strong> {selectedUser.website}
							</p>

							<p>
								<strong>Company:</strong> {selectedUser.company.name}
							</p>

							<p>
								<strong>Catch Phrase:</strong>{' '}
								{selectedUser.company.catchPhrase}
							</p>

							<p>
								<strong>Full Address:</strong> {selectedUser.address.street},{' '}
								{selectedUser.address.suite}, {selectedUser.address.city}
							</p>

							<p>
								<strong>Zipcode:</strong> {selectedUser.address.zipcode}
							</p>

							<p>
								<strong>Geo:</strong> Lat: {selectedUser.address.geo.lat} , Lng:{' '}
								{selectedUser.address.geo.lng}
							</p>

							<button
								onClick={() => setSelectedUser(null)}
								className='mt-5 px-5 py-2 bg-red-500 
				text-white rounded-xl'>
								Close
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
