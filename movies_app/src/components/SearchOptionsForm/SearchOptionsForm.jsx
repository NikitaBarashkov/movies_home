import PropTypes from 'prop-types';

import { RadioBtn } from '../RadioBtn/RadioBtn';

import s from './SearchOptionsForm.module.css';

export const SearchOptionsForm = ({ changeSearchType, typeMovie }) => {
  const setChecked = (radioType) => (typeMovie === radioType ? true : false);

  return (
    <form className={s.form} onChange={changeSearchType}>
      <RadioBtn id='movies' isChecked={setChecked('movies')} />
      <RadioBtn id='series' isChecked={setChecked('series')} />
      <RadioBtn id='both' isChecked={setChecked('both')} />
    </form>
  );
};

SearchOptionsForm.propTypes = {
  changeSearchType: PropTypes.func,
  typeMovie: PropTypes.string,
};
