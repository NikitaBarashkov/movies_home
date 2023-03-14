import { useSelector } from 'react-redux';
import cn from 'classnames';

import { useUser } from '../../../hooks/useUser';
import { useTheme } from '../../../hooks/useTheme';
import { FavoriteCard } from './FavoriteCard';

import s from './FavoritePage.module.css';

export const FavoritePage = () => {
  const { isLight } = useTheme();
  const { user } = useUser();
  const favorites = useSelector((store) => store.favorite.favorite);

  const userFavorites = favorites.filter((movie) => movie.username === user);

  if (!userFavorites.length) {
    return (
      <main className={cn(s.main_hofavorite, { [s.main__light]: isLight })}>
        <h1 className={s.title_page}>Favorite</h1>
        <h2 className={s.title}>
          You don't have anything added to your favorites yet
        </h2>
      </main>
    );
  }

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      {userFavorites.map((item) => {
        return <FavoriteCard movie={item} key={item.movie.title} />;
      })}
    </main>
  );
};
