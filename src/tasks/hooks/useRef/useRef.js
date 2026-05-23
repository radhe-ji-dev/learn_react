import React, { useRef } from 'react';

const Myref = () => {
	const ref = useRef(10);

	const my = () => {
		ref.current++;

		console.log(ref.current);
	};

	return (
		<div>
			<button style={{ className: 'bg-black' }} onClick={my}>
				Increase
			</button>
		</div>
	);
};

export default Myref;
