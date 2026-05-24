import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fasearch } from '@fortawesome/free-solid-svg-icons';
import MovieCard from './movieCard';
import SearchBar from './searchBar';

export default function Movies() {
	const [movies, setMovies] = useState([]);

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
			<div className='justify-justify-content-center'>
				<SearchBar />
			</div>
			<div className='grid grid-cols-5 p-0 m-0'>
				{movies.map((movie, index) => (
					<MovieCard key={`${movie.id}-${index}`} movie={movie} />
				))}
			</div>
		</div>
	);
}
