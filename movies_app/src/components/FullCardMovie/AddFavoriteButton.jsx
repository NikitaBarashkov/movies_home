import { useDispatch, useSelector } from 'react-redux';

import { addOnFavorite } from '../../store/favoriteSlice';
import { useUser } from '../../hooks/useUser';

import s from './FullCardMovie.module.css';

export const AddFavoriteButton = ({ movieInfo }) => {
  const { isAuth, user } = useUser();
  const dispatch = useDispatch();

  const hasOnFavorites = useSelector((store) => {
    const allMovies = store.favorite.favorite;

    const userMovies = allMovies.filter((movie) => movie.username === user);

    if (!allMovies.length || !userMovies.length) return false;

    return userMovies.find((movie) => movie.movie.title === movieInfo.title);
  });

  if (!isAuth) return null;

  if (hasOnFavorites) {
    return <h2 className={s.title_favorite}>Already in favorites</h2>;
  }

  const onClick = () =>
    dispatch(
      addOnFavorite({
        username: user,
        movie: {
          title: movieInfo.title,
          poster: movieInfo.poster,
        },
      })
    );

  return (
    <button className={s.button} type='button' onClick={onClick}>
      Add to favorite
    </button>
  );
};
