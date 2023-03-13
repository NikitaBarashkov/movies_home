import { useParams } from 'react-router-dom';

import { useGetMovieQuery } from '../../store/moviesAPI';
import { AddFavoriteButton } from './AddFavoriteButton';

import s from './FullCardMovie.module.css';

export const Card = () => {
  const { title } = useParams();

  const { data: movieInfo, isError, isLoading } = useGetMovieQuery(title);

  if (isError)
    return <h2 className={s.title_error}>Something went wrong...</h2>;

  if (isLoading) return <h2 className={s.title_loading}>Loading...</h2>;

  return (
    <section className={s.card_block}>
      <div className={s.poster}>
        <img src={movieInfo.poster} alt='poster' />
        <div className={s.title_block}>
          <h2 className={s.title}>{movieInfo.title}</h2>
          <AddFavoriteButton movieInfo={movieInfo} />
        </div>
      </div>
      <div className={s.info_block}>
        <ul className={s.info_list}>
          {movieInfo.list.map((item, index) => {
            const [name, value] = item;
            return (
              <li className={s.info_item} key={index}>
                <span>{name}:</span> {value}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
