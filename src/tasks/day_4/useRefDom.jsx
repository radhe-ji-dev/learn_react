import React from 'react';
import { useState, useRef } from 'react';

function UseRefDom() {
	const inputref = useRef(null);
	function setFocus() {
		inputref.current.focus();
	}
	return (
		<div>
			<input ref={inputref} type='text' placeholder='type here' />
			<button onClick={setFocus}>GetFocus</button>
		</div>
	);
}

export default UseRefDom;
