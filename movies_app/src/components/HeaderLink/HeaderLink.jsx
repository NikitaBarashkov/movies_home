import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { setActiveLink } from '../../utilities/setActiveLink';
import { useTheme } from '../../hooks/useTheme';

import s from './HeaderLink.module.css';

export const HeaderLink = ({ to, pagesName }) => {
  const {isLight} = useTheme();

  // const activeLInk = setActiveLink();

  return (
    <NavLink 
      className={
        isLight 
        ? cn(s.link, s.link__light)
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
