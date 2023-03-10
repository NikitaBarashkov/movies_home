import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './ChangeThemeButton.module.css';

export const ChangeThemeButton = ({ theme, toggleTheme }) => {
  return (
    <button
      type='button'
      className={cn(s.btn, { [s.btn__light]: theme })}
      onClick={toggleTheme}
    />
  );
};

ChangeThemeButton.propTypes = {
  theme: PropTypes.bool,
  changeTheme: PropTypes.func,
};
