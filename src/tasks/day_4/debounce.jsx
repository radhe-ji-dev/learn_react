// lets haev a debounce function that will take
//  a function and delay time as input and will return a debounced version of the function

import { useState, useRef } from 'react';

function SearchDebounce() {
	const [query, setQuery] = useState('');
	const debounceTimerRef = useRef(null);

	function searchqry(e) {
		const value = e.target.value;
		setQuery(value);

		if (debounceTimerRef.current) {
			clearTimeout(debounceTimerRef.current);
		}
		debounceTimerRef.current = setTimeout(() => {
			// perform the search operation here
			console.log('Searching for:', value);
		}, 500); // delay of 500ms
	}

	return (
		<div>
			<input
				type='text'
				value={query}
				placeholder='Search'
				onChange={searchqry}
			/>
		</div>
	);
}
export default SearchDebounce;
