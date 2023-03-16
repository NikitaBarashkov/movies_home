import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './ChangeFormButton.module.css';

export const ChangeFormButton = ({ text, onClick, active }) => {
  return (
    <button
      type='button'
      className={cn(s.btn, { [s.btn__active]: active })}
      onClick={onClick}>
      {text}
    </button>
  );
};

ChangeFormButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};
