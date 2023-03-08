import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './SearchForm.module.css';

export const SearchForm = ({ value, changeValue, fetchMovies, theme }) => {
  return (
    <form className={s.form} onSubmit={fetchMovies}>
      <input 
        className={s.input_search} 
        onChange={changeValue} 
        type='text' 
        value={value}
      />
      <button className={ cn(s.btn, {[s.btn__light]: theme}) }>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string,
  changeValue: PropTypes.func,
  fetchMovies: PropTypes.func,
  theme: PropTypes.bool
};