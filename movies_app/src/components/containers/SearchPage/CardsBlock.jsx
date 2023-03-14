import { CardMovie } from '../../CardMovie/CardMovie';

import s from './SearchPage.module.css';

export const CardsBlock = ({ movies }) => {
  if (!movies) return null;

  if (!movies.response || !movies.isFulfilled) {
    return (
      <h2 className={s.title__not_found}>Nothing was found for your request</h2>
    );
  }

  return (
    <>
      {movies.response.map((movie) => (
        <CardMovie key={movie.imdbID} title={movie.Title} url={movie.Poster} />
      ))}
    </>
  );
};
