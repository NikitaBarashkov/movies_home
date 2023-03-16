import { createSelector } from '@reduxjs/toolkit';

export const selectFavoriteMovies = (store) => store.favorite.favorite;
export const selectUser = (store) => store.authorization.currentUser.user;

export const selectUserMovies = createSelector(
  [selectFavoriteMovies, selectUser],
  (movies, user) => movies.filter((movie) => movie.username === user)
);
