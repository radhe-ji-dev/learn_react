import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import store from './Learn/Redux/counterStore';
import counterSlice from './Learn/Redux/counterSlice';
import { increment, decrement, reset } from './Learn/Redux/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

// ab yha apne ko counter store bnana h jisme hum apne counter slice ko add krke uske action ko dispatch krke state ko update kr skte h
// to iske liye humne counter slice bnaya h jisme humne increment, decrement, reset functions define kiye h
// aur uske baad humne counter store bnaya h jisme humne counter slice ko add kiya h taki hum uske action
//  ko dispatch krke state ko update kr skte h
// to ab hum is store ko apne app me use krke state ko update kr skte h jese ki hum increment, decrement,
//  reset functions ko dispatch krke state ko update kr skte h
//provider ke andar hum apne store ko pass krke apne app me use kr skte h jese ki hum increment, decrement, reset functions
//  ko dispatch krke state ko update kr skte h

// ab app me action ko dispatch krke state ko update krna h jese ki hum increment, decrement, reset functions ko dispatch krke state ko
// update kr skte h

function App() {
	const count = useSelector((state) => state.counter.count);

	const dispatch = useDispatch();

	return (
		<>
			<h1>{count}</h1>

			<button onClick={() => dispatch(increment())}>Increment</button>

			<button onClick={() => dispatch(decrement())}>Decrement</button>

			<button onClick={() => dispatch(reset())}>Reset</button>
		</>
	);
}

export default App;
