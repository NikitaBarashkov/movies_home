import cn from 'classnames';
import s from '../components/HeaderLink/HeaderLink.module.css';

export const setActiveLink = ({ isActive }) => cn(s.link, {[s.active]: isActive});
