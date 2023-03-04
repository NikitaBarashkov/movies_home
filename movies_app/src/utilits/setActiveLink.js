import cn from 'classnames';
import s from '../components/HeaderLink/HeaderLink.module.css';

export const setActiveLink = ({ isActive }) => isActive ? cn(s.link, s.active) : s.link;
