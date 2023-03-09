import PropTypes from 'prop-types';

import s from './RadioBtn.module.css';

export const RadioBtn = ({ id, isChecked }) => {
  return (
    <>
      <input className={s.radio}
        id={id} type='radio'
        name='type_movie' 
        defaultChecked={isChecked}
      />
      <label className={s.label} htmlFor={id} /> 
    </>
  );
};

RadioBtn.propTypes = {
  id: PropTypes.string,
  isChecked: PropTypes.bool
};

RadioBtn.defaultProps = {
  isChecked: false
};