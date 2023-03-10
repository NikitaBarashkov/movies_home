import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './ChangeFormBtn.module.css';

export const ChangeFormBtn = ({nameBtn, changeForm, classMode}) => {
  return (
    <button 
      type='button'
      className={ cn(s.btn, {[s.btn__active]: classMode}) }
      onClick={changeForm}
    >
      {nameBtn}
    </button>
  );
};

ChangeFormBtn.propTypes = {
  nameBtn: PropTypes.string,
  changeForm: PropTypes.func,
  classMode: PropTypes.bool
};