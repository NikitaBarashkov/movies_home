import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './ChangeThemeBtn.module.css';

export const ChangeThemeBtn = ({theme, changeTheme}) => {
  return (
    <button 
      type='button'
      className={
        theme
        ? cn(s.btn, s.btn__ligth)
        : s.btn
      }
      onClick={()=> changeTheme(!theme)}
    /> 
  );
};

ChangeThemeBtn.propTypes = {
  theme: PropTypes.bool,
  changeTheme: PropTypes.func
};