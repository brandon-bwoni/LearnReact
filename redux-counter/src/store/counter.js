import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducer: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + state.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;