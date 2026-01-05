import React from 'react';
import { useState, useRef } from 'react';

function RenderCount() {
	const rendervalue = useRef(0);
	rendervalue.current++;

	return (
		<div>
			<p>render:={rendervalue.current}</p>
		</div>
	);
}

export default RenderCount;
