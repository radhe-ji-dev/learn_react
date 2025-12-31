import logo from './logo.svg';
import './App.css';
import ProfileCard from './tasks/dayOne/props';

function App() {
	return (
		<div className='App'>
			<ProfileCard
				avatar='https://example.com/avatar.jpg'
				name='John Doe'
				bio='A passionate developer.'
			/>

			<ProfileCard
				avatar='https://example.com/avatar2.jpg'
				name='Jane Smith'
				bio='Loves designing user interfaces.'
			/>
		</div>
	);
}

export default App;
