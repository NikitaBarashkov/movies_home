import PropTypes from 'prop-types';

import { RadioBtn } from '../RadioBtn/RadioBtn';

import s from './SearchOptionsForm.module.css';

export const SearchOptionsForm = ({ changeSearchType }) => {
  return (
    <form className={s.form} onChange={changeSearchType} >
      <RadioBtn id='movies' />
      <RadioBtn id='series' />
      <RadioBtn id='both' isChecked={true} />
    </form>
  );
};

SearchOptionsForm.propTypes = {
  changeSearchType: PropTypes.func,
}

