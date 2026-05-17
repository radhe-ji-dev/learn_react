import React from 'react';
import { Route } from 'react-router-dom';
import about from './about';
import contact from './contact';
import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {
	const navigate = useNavigate();
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>

					<li>
						<Link to='/about'>About</Link>
					</li>

					<li>
						<Link to='/contact'>Contact</Link>
					</li>
					<li>
						<button
							className='shadow-lg-r bg-amber-100'
							onClick={() => navigate('/')}>
							Go Home
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
}
