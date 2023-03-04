import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { setActiveLink } from '../../utilits/setActiveLink';
import { useTheme } from '../../hooks/useTheme';

import s from './HeaderLink.module.css';

export const HeaderLink = ({ to, pagesName }) => {
  const {isLigth} = useTheme();

  return (
    <NavLink 
      className={
        isLigth 
        ? cn(s.link, s.link__ligth)
        : setActiveLink
      } 
      to={to}
    >
      {pagesName}
    </NavLink>
  ); 
}

HeaderLink.propTypes = {
  to: PropTypes.string,
  pagesName: PropTypes.string  
};
