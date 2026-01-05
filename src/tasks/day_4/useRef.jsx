// this is the most important hook after useState and useEffect
// useRef is used to persist values between renders
// it can be used to store a mutable value that does not cause a re-render when updated
// it can be used to access a DOM element directly

//here we are seeing most basic example of useRef

import { useRef, useState } from 'react';
import React from 'react';

function UiRef() {
	const [uival, setUival] = useState(0);
	const hidenVal = useRef(0);
	console.log(hidenVal);

	function handleClick() {
		hidenVal.current = hidenVal.current + 1;
		console.log(hidenVal.current);
	}

	return (
		<div>
			<p>{uival}</p>
			<button onClick={() => setUival(uival + 1)}>add</button>
			<p>{hidenVal.current}</p>
			<button onClick={handleClick}>add</button>
		</div>
	);
}

export default UiRef;
