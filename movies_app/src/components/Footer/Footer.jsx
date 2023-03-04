import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';
import { ChangeThemeBtn } from '../ChangeThemeBtn/ChangeThemeBtn';

import s from './Footer.module.css';

export const Footer = () => {
  const {isLigth, changeTheme} = useTheme();

  return (
    <footer className={isLigth ? cn(s.footer, s.footer__ligth) : s.footer}>
      <ChangeThemeBtn theme={isLigth} changeTheme={changeTheme} />
    </footer>
  );
};