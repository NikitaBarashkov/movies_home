import PropTypes from 'prop-types';

import { RadioBtn } from '../RadioBtn/RadioBtn';

import s from './SearchOptionsForm.module.css';

export const SearchOptionsForm = ({ changeSearchType, typeMovie }) => {
  return (
    <form className={s.form} onChange={changeSearchType}>
      <RadioBtn id='movies' isChecked={typeMovie === 'movies' ? true : false} />
      <RadioBtn id='series' isChecked={typeMovie === 'series' ? true : false} />
      <RadioBtn id='both' isChecked={typeMovie === 'both' ? true : false} />
    </form>
  );
};

SearchOptionsForm.propTypes = {
  changeSearchType: PropTypes.func,
  typeMovie: PropTypes.string,
};
