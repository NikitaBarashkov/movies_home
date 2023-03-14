import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'history',
  initialState: { history: [] },
  reducers: {
    addOnHistory: (state, action) => {
      state.history.push(action.payload);
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});

export const { addOnHistory, setHistory } = historySlice.actions;
export const historyReducer = historySlice.reducer;
