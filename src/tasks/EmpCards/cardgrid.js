import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cardgrid() {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [city, setCity] = useState('');
	const [selectedUser, setSelectedUser] = useState(null); // pop up modal

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
		const namefilter = users.filter(
			(users) => users.name.toLowerCase() == name.toLowerCase(),
		);
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
			<div className='flex justify-center bg-orange-200'>
				<h1>User Directory</h1>
			</div>
			<div className='flex justify-center items-center'>
				<input
					type='text'
					placeholder='name'
					className='outline-double bg-blue-100'
					onChange={handlChangeName}></input>
				<button
					onClick={handleNameSearch}
					className=' m-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-800'>
					Serach Name
				</button>
				<input
					type='text'
					placeholder='company'
					className='outline-double bg-blue-100'
					onChange={handlChangeCompany}></input>
				<button
					onClick={handleCompanySearch}
					className=' m-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-800'>
					Serach Comapny
				</button>
				<input
					type='text'
					placeholder='city'
					className='outline-double bg-blue-100'
					onChange={handlChangeCity}></input>
				<button
					onClick={handleCitySearch}
					className=' m-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-800'>
					Serach City
				</button>
			</div>

			<div className='grid grid-cols-3 gap-6'>
				{users.map((user) => (
					<div
						key={user.id}
						onClick={() => setSelectedUser(user)}
						className='border p-5 rounded-2xl shadow-md hover:scale-105'>
						{/* Small Info */}
						<h1 className='text-xl font-bold'>{user.name}</h1>

						<p>{user.email}</p>

						<p>{user.address.city}</p>
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
								<strong>Company:</strong> {selectedUser.company.name}
							</p>

							<p>
								<strong>Street:</strong> {selectedUser.address.street}
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
