import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFromFavorite } from '../../../store/favoriteSlice';

import s from './FavoritePage.module.css';

export const FavoriteCard = ({ movie }) => {
  const dispatch = useDispatch();

  const removeMovie = () => {
    dispatch(removeFromFavorite(movie.username + movie.movie.title));
  };

  return (
    <div className={s.card_container}>
      <Link to={`/search/:${movie.movie.title}`} className={s.card}>
        <img className={s.poster} src={movie.movie.poster} alt='poster' />
        <h2 className={s.title_movie}>{movie.movie.title}</h2>
      </Link>
      <button className={s.button} type='button' onClick={removeMovie}>
        Delete
      </button>
    </div>
  );
};

FavoriteCard.propTypes = {
  movie: PropTypes.shape({
    username: PropTypes.string,
    movie: PropTypes.shape({
      poster: PropTypes.string,
      title: PropTypes.string,
    }),
  }),
};
