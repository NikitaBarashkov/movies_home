import { createSlice } from '@reduxjs/toolkit';

export const initStoreSlice = createSlice({
  name: 'init',
  initialState: null,
  reducers: {
    initStore(_, action) {
      return action.payload;
    },
  },
});

export const { initStore } = initStoreSlice.actions;
export const initStoreReducer = initStoreSlice.reducer;
