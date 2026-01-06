import { useMemo, useState } from 'react';

export default function SetSUM() {
	const [a, setA] = useState(0);

	const sum = useMemo(() => {
		console.log('re calculations');

		return a + 40;
	}, [a]);

	return (
		<div>
			<p>increase a </p>
			<button onClick={() => setA(a + 1)}>{a}</button>
			<p>calculate sum</p>
			<button>{sum}</button>
		</div>
	);
}
