import React from 'react';
import { Route } from 'react-router-dom';
import about from './about';
import contact from './contact';

export default function nav() {
	return (
		<div>
			<nav>
				<ul>
					<link to='/'>Home</link>
					<link to='/about'>About</link>
					<link to='/contact'>Contact</link>
				</ul>
			</nav>
		</div>
	);
}
