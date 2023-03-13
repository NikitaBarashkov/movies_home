import { Link } from 'react-router-dom';

import s from './StoryItem.module.css';

export const StoryItem = ({ search, link, time }) => {
  return (
    <li className={s.item}>
      <Link className={s.link} to='/search'>
        <span>Search: {search}</span>
        <span>link: {link}</span>
        <span>Data: {time}</span>
      </Link>
    </li>
  );
};
