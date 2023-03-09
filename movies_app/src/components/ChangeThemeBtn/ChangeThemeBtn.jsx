import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './ChangeThemeBtn.module.css';

export const ChangeThemeBtn = ({theme, toggleTheme}) => {
  return (
    <button 
      type='button'
      className={ cn(s.btn, {[s.btn__light]: theme}) }
      onClick={toggleTheme}
    /> 
  );
};

ChangeThemeBtn.propTypes = {
  theme: PropTypes.bool,
  changeTheme: PropTypes.func
};