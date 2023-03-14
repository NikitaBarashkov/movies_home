import { useSelector } from 'react-redux';

import { useUser } from '../../hooks/useUser';
import { StoryItem } from '../StoryItem/StoryItem';

import s from './StoryBox.module.css';

export const StoryBox = () => {
  const history = useSelector((story) => story.history.history);
  const { user } = useUser();

  const userHistory = history.filter((story) => story.username === user);

  if (userHistory.length) {
    return (
      <ul>
        {userHistory.map((story, index) => {
          return (
            <StoryItem
              key={index}
              search={story.search}
              link={story.link}
              time={story.time}
            />
          );
        })}
      </ul>
    );
  }

  return <h2 className={s.title}>You don't have a search history yet</h2>;
};
