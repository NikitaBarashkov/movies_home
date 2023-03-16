import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './CardMovie.module.css';

export const CardMovie = ({ url, title }) => {
  return (
    <Link to={`/search/:${title}`} className={s.block}>
      <img className={s.poster} src={url} alt='poster' />
      <h3 className={s.title}>{title}</h3>
    </Link>
  );
};

CardMovie.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
};
