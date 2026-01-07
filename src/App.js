import logo from './logo.svg';
import './App.css';
import UiRef from './tasks/day_4/useRef';
import MutableFlags from './tasks/day_4/mutableflags';
import StableReference from './tasks/day_4/stableRefrence';
import SearchDebounce from './tasks/day_4/debounce';
import UseRefDom from './tasks/day_4/useRefDom';
import UseMemoDemo from './tasks/day_5/useMemo';
import SetSUM from './tasks/day_5/setSum';
import DashBoard from './tasks/ExpenseTracker/dashboard';

function App() {
	return (
		<div className='App'>
			<DashBoard />
		</div>
	);
}

export default App;
