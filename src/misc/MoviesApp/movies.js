import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './movieCard';

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
			<div>
				{movies.map((movie) => {
					return <MovieCard movie={movie} />;
				})}
			</div>
		);
}
