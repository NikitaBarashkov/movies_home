import { useState } from 'react';
import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';
import { useSearchGoal } from '../../../hooks/useSearchGoal';
import { useUser } from '../../../hooks/useUser';
import { SearchForm } from '../../SearchForm/SearchForm';
import { SearchOptionsForm } from '../../SearchOptionsForm/SearchOptionsForm';
import { useGetMoviesQuery } from '../../../store/moviesAPI';
import { CardsBlock } from './CardsBlock';
import { MOVIES_API_URL } from '../../../utilities/constants';

import { useDispatch } from 'react-redux';
import { addOnHistory } from '../../../store/historySlice';

import s from './SearchPage.module.css';

export const SearchPage = () => {
  const { isLight } = useTheme();
  const { user: currentUser } = useUser();
  const dispatch = useDispatch();

  const [searchGoal, changeTitleSearchGoal, changeTypeSearchGoal] =
    useSearchGoal();

  const [queryMovieValue, setQueryMovieValue] = useState(searchGoal);

  const { data: moviesResponse } = useGetMoviesQuery(queryMovieValue, {
    skip: !queryMovieValue.titleMovie.length,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    setQueryMovieValue(searchGoal);

    if (currentUser) {
      dispatch(
        addOnHistory({
          username: currentUser,
          search: searchGoal.titleMovie,
          type: searchGoal.typeMovie,
          link: MOVIES_API_URL + `&s=${searchGoal.titleMovie}`,
          time: new Date().toLocaleString(),
        })
      );
    }
  };

  return (
    <main className={cn(s.main, { [s.main__light]: isLight })}>
      <section className={s.search_section}>
        <div className={s.radio_container}>
          <h2 className={s.title}>
            You can choose separately movies or series and both
          </h2>
          <SearchOptionsForm changeSearchType={changeTypeSearchGoal} />
        </div>
        <SearchForm
          value={searchGoal.titleMovie}
          onSubmit={onSubmit}
          changeValue={changeTitleSearchGoal}
          theme={isLight}
        />
      </section>
      <section className={s.response_section}>
        <CardsBlock movies={moviesResponse} />
      </section>
    </main>
  );
};
