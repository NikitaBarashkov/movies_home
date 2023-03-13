import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: { favorite: [] },
  reducers: {
    addOnFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
  },
});

export const { addOnFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
