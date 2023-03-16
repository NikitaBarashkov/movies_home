import { useSelector } from 'react-redux';

import { selectUserMovies } from '../store/selectors/selectors';

export const useHasInFavorites = (movieTitle) => {
  const movies = useSelector(selectUserMovies);

  if (!movies.length) return false;

  return movies.find((movie) => movie.movie.title === movieTitle);
};
