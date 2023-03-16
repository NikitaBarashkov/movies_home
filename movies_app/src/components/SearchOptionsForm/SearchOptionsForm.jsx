import PropTypes from 'prop-types';

import { RadioBtn } from '../RadioBtn/RadioBtn';

import s from './SearchOptionsForm.module.css';

export const SearchOptionsForm = ({ changeSearchType, typeMovie }) => {
  return (
    <form className={s.form} onChange={changeSearchType}>
      <RadioBtn id='movies' isChecked={typeMovie === 'movies'} />
      <RadioBtn id='series' isChecked={typeMovie === 'series'} />
      <RadioBtn id='both' isChecked={typeMovie === 'both'} />
    </form>
  );
};

SearchOptionsForm.propTypes = {
  changeSearchType: PropTypes.func,
  typeMovie: PropTypes.string,
};
