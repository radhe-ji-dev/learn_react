//lets thing about real world example
//  where we want to track if a component is rendered for
//  the first time or re-rendered without causing re-renders ourselves. We can use useRef for this purpose.

import React from 'react';
import { useState, useRef } from 'react';

function MutableFlags() {
	const isrendered = useRef(false);
	if (!isrendered.current) {
		console.log('Component is rendered for the first time');
		isrendered.current = true;
	} else {
		console.log('Component has been re-rendered');
	}
	return (
		<div>
			<p>Check the console to see render status.</p>
		</div>
	);
}

export default MutableFlags;
