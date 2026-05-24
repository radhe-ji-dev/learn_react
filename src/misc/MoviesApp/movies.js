import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieCard from './movieCard';

export default function Movies() {
	const [movies, setMovies] = useState([]);

	const searchHandler = () => {
		console.log('search btn clicked');
	};

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

	console.log(JSON.stringify(movies[0]));

	return (
		<div className='bg-slate-500 justify-evenly'>
			<div className='justify-content-center'>
				<div className='p-2 bg-black'>
					<input
						className='p-3 rounded-lg text-white h-14 w-1/2'
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
