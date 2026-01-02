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

function App() {
	return (
		<div className='App'>
			<DynamicList />
			<UncontrolledForm />
		</div>
	);
}

export default App;
