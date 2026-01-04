import logo from './logo.svg';
import './App.css';
import ProfileCard from './tasks/dayOne/props';
import CountAddition from './tasks/dayOne/states';
import {
	ConditionalRendering,
	ConditionalRenderingTernery,
} from './tasks/dayTwo/conditionalRendring';
import DynamicList from './tasks/dayTwo/dynamiclist';
import ControlledForm from './tasks/dayTwo/controlledForm';
import UncontrolledForm from './tasks/dayTwo/uncontrolledForm';
import UseEffectExample from './tasks/dayTwo/useeffect';
import CountryFlags from './tasks/dayTwo/countryFlags';
import StatesApp from './tasks/dayTwo/statesApp';
import FullName from './tasks/dayTwo/fullName';
import CountryFlagsSearch from './tasks/dayThree/countrySearch';
import Pagination from './tasks/dayThree/pagination';
import StopWatch from './tasks/dayThree/stopWatch';
import WeatherApp from './tasks/dayThree/weatherapp';

function App() {
	return (
		<div className='App'>
			<WeatherApp />
		</div>
	);
}

export default App;
