import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieCard from './movieCard';

export default function Movies() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		axios
			.get('https://api.tvmaze.com/shows?page=1')
			.then((response) => {
				setMovies(response.data);
			})
			.catch((error) => {
				console.error('Error fetching movies:', error);
			});
	}, []);

	const searchHandler = () => {
		let searchTerm = document.getElementById('searchbarInput').value;
		// we want rexex for serach term if serach term any
		// is present in movie name then we want to show that movie

		let regex = new RegExp(searchTerm, 'i'); // 'i' for case-insensitive
		if (searchTerm === '') {
			axios
				.get('https://api.tvmaze.com/shows?page=1')
				.then((response) => {
					setMovies(response.data);
				})
				.catch((error) => {
					console.error('Error fetching movies:', error);
				});
			return;
		}
		let filteredMovies = movies.filter((movie) => regex.test(movie.name));
		setMovies(filteredMovies);
		console.log('search term:', searchTerm);
	};

	return (
		<div className='bg-slate-500 justify-evenly'>
			<div className='justify-content-center'>
				<div className='p-2 bg-black'>
					<input
						className='p-3 rounded-lg text-black h-14 w-1/2'
						id='searchbarInput'
						placeholder='Search Movie'></input>
					<span className='m-3'>
						<button
							className=' h-20 text-3xl bg-blue-400  rounded-lg text-white font-bold  w-1/5'
							onClick={searchHandler}>
							<FontAwesomeIcon icon={faSearch} />
							Search
						</button>
					</span>
				</div>
			</div>

			<div className='grid grid-cols-5 p-0 m-0'>
				{movies.map((movie, index) => (
					<MovieCard key={`${movie.id}-${index}`} movie={movie} />
				))}
			</div>
		</div>
	);
}
