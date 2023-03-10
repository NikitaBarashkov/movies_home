import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './SearchForm.module.css';

export const SearchForm = ({ value, changeValue, onSubmit, theme }) => {
  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input
        className={s.input_search}
        onChange={changeValue}
        type='text'
        value={value}
      />
      <button className={cn(s.btn, { [s.btn__light]: theme })}>Search</button>
    </form>
  );
};

SearchForm.propTypes = {
  value: PropTypes.string,
  changeValue: PropTypes.func,
  onSubmit: PropTypes.func,
  theme: PropTypes.bool,
};
