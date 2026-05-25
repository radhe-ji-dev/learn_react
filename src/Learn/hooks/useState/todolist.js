import React, { useState } from 'react';

function Todo() {
	const [list, setList] = useState([]);
	const [item, setItem] = useState('');

	const handleAddtodo = () => {
		if (item.trim() === '') return;

		setList([...list, item]);
		setItem('');

		console.log('todo clicked');
	};

	const handleEdit = () => {
		return console.log('edit clicked');
	};
	const handleDelete = (key) => {
		const filteredList = list.filter((item, index) => index !== key);

		return setList(filteredList);
	};

	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '10px',
					background: 'red',
					padding: '20px',
				}}>
				<input
					style={{
						padding: '10px',
					}}
					placeholder='add todo'
					value={item}
					onChange={(e) => setItem(e.target.value)}
				/>

				<button
					style={{ background: 'pink', padding: '10px' }}
					onClick={handleAddtodo}>
					Add Todo
				</button>
			</div>

			<ul style={{ display: 'block', alignItems: 'center' }}>
				{list.map((data, index) => (
					<li key={index}>
						{data}
						<button
							onClick={handleEdit}
							style={{ margin: '10px', background: 'yellow' }}>
							Edit
						</button>
						<button
							onClick={() => handleDelete(index)}
							style={{ background: 'red' }}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Todo;
