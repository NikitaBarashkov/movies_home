import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import { ChangeThemeBtn } from '../ChangeThemeBtn/ChangeThemeBtn';

import s from './Footer.module.css';

export const Footer = () => {
  const {isLight, toggleTheme} = useTheme();

  return (
    <footer className={ cn(s.footer, {[s.footer__light]: isLight}) }>
      <ChangeThemeBtn theme={isLight} toggleTheme={toggleTheme} />
    </footer>
  );
};