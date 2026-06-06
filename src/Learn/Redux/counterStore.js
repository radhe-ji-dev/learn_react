// ab bna store jisme hum counter slice ko add krenge taki hum uske action ko dispatch krke state ko update kr ske
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// ab isme ye counter reducer kese aaya
// or ye reducers and reducers ka kya concept h ye bhi samajhna hoga
// reducers ek object hota h jisme hum apne state ko update krne ke liye functions define krte h
// jese ki yaha humne counter reducer ko add kiya h jisme
// counter slice ke reducer ko add kiya h jisme humne increment, decrement, reset functions define kiye h

// ab ye store me kese add hoga ye bhi samajhna hoga
// configureStore ek function h jo ki ek object leta h jisme hum apne reducers ko define krte h
// jese ki yaha humne reducer ke andar ek object define kiya h jisme humne counter ko key banaya h aur usme counterReducer ko value banaya h

// BUT ye count Reducer kese aaya h ye bhi samajhna hoga
// counterReducer ek variable h jisme humne counterSlice.reducer ko assign kiya h
// counterSlice.reducer ek function h jo ki counter slice ke reducer ko return krta h

// mtlb ab humko yha slice wale sare reducer functions mil jayenge jese ki increment, decrement, reset functions mil jayenge

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

// aage hum is store ko apne app me use krke state ko update kr skte h jese ki hum increment, decrement,
//  reset functions ko dispatch krke state ko update kr skte h

export default store;

// to hum pure app me is store ko use krke state ko update kr skte h jese ki hum increment, decrement, reset functions
//  ko dispatch krke state ko update kr skte h
