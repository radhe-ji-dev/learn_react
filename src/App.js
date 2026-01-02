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

function App() {
	return (
		<div className='App'>
			<StatesApp />
		</div>
	);
}

export default App;
