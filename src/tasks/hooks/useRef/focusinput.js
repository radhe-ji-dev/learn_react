import React, { useRef } from 'react';

const Myref = () => {
	const inputRef = useRef(null);

	const focusInput = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input ref={inputRef} type='text' />

			<button onClick={focusInput}>Focus Input</button>
		</div>
	);
};

export default Myref;
