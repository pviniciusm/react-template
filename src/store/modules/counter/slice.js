import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        incrementByValue: (state, action) => {
            return state + action.payload;
        },
        reset: () => {
            return initialState;
        },
    },
});

export const { increment, incrementByValue, reset } = counterSlice.actions;
export default counterSlice.reducer;
