import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: { favorite: [] },
  reducers: {
    addOnFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (item) => item.username + item.movie.title !== action.payload
      );
    },
    setFavorite: (state, action) => {
      state.favorite = action.payload;
    },
  },
});

export const { addOnFavorite, setFavorite, removeFromFavorite } =
  favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
