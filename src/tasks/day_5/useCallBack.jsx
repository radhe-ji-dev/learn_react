import { useState, useCallback } from 'react';

function Parent() {
	const [count, setCount] = useState(0);

	const handleClick = useCallback(() => {
		console.log('Button clicked');
	}, []);

	console.log('🔁 Parent re-rendered');

	return (
		<>
			<button onClick={() => setCount(count + 1)}>Re-render Parent</button>

			<Child onClick={handleClick} />
		</>
	);
}

const Child = React.memo(function Child({ onClick }) {
	console.log('👶 Child rendered');
	return <button onClick={onClick}>Child Button</button>;
});

export default Parent;
