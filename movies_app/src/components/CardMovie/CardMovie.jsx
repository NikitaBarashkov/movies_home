import PropTypes from 'prop-types';

import s from './CardMovie.module.css';

export const CardMovie = ({ url, title, setInfoMovie }) => {
  return (
    <div className={s.block} onClick={() => setInfoMovie(title)}>
      <img className={s.poster} src={url} alt='poster' />
      <h3 className={s.title}>{title}</h3>
    </div>
  );
};

CardMovie.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  setInfoMovie: PropTypes.func
};

