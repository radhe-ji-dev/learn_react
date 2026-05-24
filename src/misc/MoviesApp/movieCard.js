import React from 'react';

export default function MovieCard(props) {
	//yha prop me mo mil jaugea

	const movie = {
		id: 250,
		url: 'https://www.tvmaze.com/shows/250/kirby-buckets',
		name: 'Kirby Buckets',
		type: 'Scripted',
		language: 'English',
		genres: ['Comedy'],
		status: 'Ended',
		runtime: 30,
		averageRuntime: 30,
		premiered: '2014-10-20',
		ended: '2017-02-02',
		officialSite: 'http://disneyxd.disney.com/kirby-buckets',
		schedule: {
			time: '07:00',
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		},
		rating: {
			average: null,
		},
		weight: 87,
		network: {
			id: 25,
			name: 'Disney XD',
			country: {
				name: 'United States',
				code: 'US',
				timezone: 'America/New_York',
			},
			officialSite: null,
		},
		webChannel: {
			id: 83,
			name: 'DisneyNOW',
			country: {
				name: 'United States',
				code: 'US',
				timezone: 'America/New_York',
			},
			officialSite: 'https://disneynow.com/',
		},
		dvdCountry: null,
		externals: {
			tvrage: 37394,
			thetvdb: 278449,
			imdb: 'tt3544772',
		},
		image: {
			medium:
				'https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg',
			original:
				'https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg',
		},
		summary:
			'<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character...</p>',
		updated: 1704795334,
		_links: {
			self: {
				href: 'https://api.tvmaze.com/shows/250',
			},
			previousepisode: {
				href: 'https://api.tvmaze.com/episodes/1051658',
				name: 'Yep, Still Happening',
			},
		},
	};
	return (
		<div>
			<div>
				<div
					id='movieCard'
					className='text-white  relative overflow-hidden rounded w-fit bg-gradient-to-t from-black via-black/70-t0-transparent '>
					<img className='w-fit' src={props.movie.image.medium}></img>
					<h4 classsName='w-fit'>
						<strong>{props.movie.name}</strong>
					</h4>
					<h5>{props.movie.language}</h5>
					{/*<span>{props.rating.average ? <p>not</p> : props.rating.average}</span>*/}
					<p>Premiered AT :- {props.movie.premiered}</p>
					<p>Generes :- {props.movie.genres}</p>

					<div className='absolute inset-0 bg-black/40 text-white flex items-end p-4 -translate-y-full  hover:group-hover:-translate-y-0'>
						{props.movie.summary}
					</div>
				</div>
			</div>
		</div>
	);
}
