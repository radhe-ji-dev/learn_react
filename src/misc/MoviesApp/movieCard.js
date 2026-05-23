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
				<img src={props.image.medium}></img>
				<h4>{props.name}</h4>
				<h5>{props.language}</h5>
				<span>{props.rating.average ? <p>not</p> : props.rating.average}</span>
				<div>
					<p>{props.summary}</p>
				</div>
			</div>
		</div>
	);
}
