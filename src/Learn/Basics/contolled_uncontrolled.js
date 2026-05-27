import React from 'react';
//lets define controlled and uncontrolled components
//controlled components are those that are controlled by react,
//  meaning that the value of the input is controlled by react state
//uncontrolled components are those that are not controlled by react,
// meaning that the value of the input is not controlled by react state

//lets design a simple form with both controlled and uncontrolled components
export default function contolled_uncontrolled() {
	const [controlledValue, setControlledValue] = React.useState('');
	const uncontrolledRef = React.useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		alert(
			`Controlled: ${controlledValue}, Uncontrolled: ${uncontrolledRef.current.value}`,
		);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>
					Controlled:
					<input
						type='text'
						value={controlledValue}
						onChange={(e) => setControlledValue(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Uncontrolled:
					<input type='text' ref={uncontrolledRef} />
				</label>
				<br />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}
