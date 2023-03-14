import { useDispatch } from 'react-redux';

import { useHasInFavorites } from '../../hooks/useHasInFavorites';
import { addOnFavorite } from '../../store/favoriteSlice';
import { useUser } from '../../hooks/useUser';

import s from './FullCardMovie.module.css';

export const AddFavoriteButton = ({ movieInfo }) => {
  const { isAuth, user } = useUser();
  const dispatch = useDispatch();
  const hasInFavorites = useHasInFavorites(movieInfo.title);

  if (!isAuth) return null;

  if (hasInFavorites) {
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
