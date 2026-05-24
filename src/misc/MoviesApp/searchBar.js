import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fasearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function SearchBar() {
	const searchHandler = () => {
		console.log('search btn clicked');
	};
	return (
		<div className='p-2 bg-black'>
			<input
				className='p-3 rounded-lg text-white h-14 w-1/2'
				id='searchbarInput'
				placeholder='Search Movie'></input>
			<span className='m-3'>
				<button
					className=' h-20 text-3xl bg-blue-400  rounded-lg text-white font-bold  w-1/5'
					onClick={searchHandler}>
					<FontAwesomeIcon icon={fasearch} />
					Search
				</button>
			</span>
		</div>
	);
}
