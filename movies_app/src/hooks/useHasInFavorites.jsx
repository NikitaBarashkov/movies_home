import { useSelector } from 'react-redux';

import { useUser } from './useUser';

export const useHasInFavorites = (movieTitle) => {
  const { user } = useUser();

  const allMovies = useSelector((store) => store.favorite.favorite);
  const userMovies = allMovies.filter((movie) => movie.username === user);

  if (!allMovies.length || !userMovies.length) return false;

  return userMovies.find((movie) => movie.movie.title === movieTitle);
};
