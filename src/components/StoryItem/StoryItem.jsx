import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useSearchGoal } from '../../hooks/useSearchGoal';

import s from './StoryItem.module.css';

export const StoryItem = ({ search, link, time, type }) => {
  const { changeSearchGoal } = useSearchGoal();

  const onClick = () => changeSearchGoal(search, type);

  return (
    <li className={s.item} onClick={onClick}>
      <Link className={s.link} to='/search'>
        <span className={s.text}>Search: </span> {search}
        <span className={s.text}>link: </span> {link}
        <span className={s.text}>Data: </span> {time}
      </Link>
    </li>
  );
};

StoryItem.propTypes = {
  search: PropTypes.string,
  link: PropTypes.string,
  time: PropTypes.string,
  type: PropTypes.string,
};
