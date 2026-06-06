import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
	name: 'counter',

	initialState: {
		count: 0,
	},

	reducers: {
		increment: (state) => {
			state.count += 1;
		},

		decrement: (state) => {
			state.count -= 1;
		},

		reset: (state) => {
			state.count = 0;
		},
	},
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;


// yha ek slice h jiska name counter slice h usme 3 reducer bnaye or unka export kiya
//aur uska reducer export kiya taki use store me add kr ske
// ab store me add krne ke baad hum iske action ko dispatch krke state ko update kr skte h
