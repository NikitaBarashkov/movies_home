import { useState } from 'react';
import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';
import { useSearchGoal } from '../../../hooks/useSearchGoal';
import { useUser } from '../../../hooks/useUser';
import { CardMovie } from '../../CardMovie/CardMovie';
import { SearchForm } from '../../SearchForm/SearchForm';
import { SearchOptionsForm } from '../../SearchOptionsForm/SearchOptionsForm';
import { MOVIES_API_URL } from '../../../utilities/constants';

import { useGetMoviesQuery } from '../../../store/moviesAPI';

import { useDispatch, useSelector } from 'react-redux';
import { addOnHistory } from '../../../store/historySlice';

import s from './SearchPage.module.css';

export const SearchPage = () => {
  const { isLight } = useTheme();
  const { user: currentUser } = useUser();
  // const history = useSelector((store) => store.history.history);

  const [searchGoal, changeTitleSearchGoal, changeTypeSearchGoal] =
    useSearchGoal();

  const [nowSearch, changeNowSearch] = useState({ titleMovie: '' });
  const setNowSearchGoal = (e) => {
    e.preventDefault();
    changeNowSearch(searchGoal);
  };

  const {
    data: moviesResponse,
    isError,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetMoviesQuery(nowSearch);

  console.log('moviesResponse', moviesResponse);
  // console.log('isError', isError);
  // console.log('isLoading', isLoading);
  // console.log('isSuccess', isSuccess);
  // console.log('isFetching', isFetching);

  const [responseMovies, setResponseMovies] = useState(null);
  const [fullDataMovie, setFullDataMovie] = useState();

  const dispatch = useDispatch();

  const fetchMovies = async (e) => {
    e.preventDefault();
    let url = MOVIES_API_URL;

    if (searchGoal) {
      url += `&s=${searchGoal.titleMovie}`;
    }

    if (searchGoal.typeMovie !== 'both') {
      url += `&t=${searchGoal.typeMovie}`;
    }

    const resp = await fetch(url);
    const data = await resp.json();
    setResponseMovies(data);

    if (data.Response === 'True' && currentUser) {
      dispatch(
        addOnHistory({
          username: currentUser,
          search: searchGoal.titleMovie,
          type: searchGoal.typeMovie,
          link: url,
          time: new Date().toLocaleString(),
        })
      );
    }
  };

  const fetchFullInfoMovie = async (title) => {
    const resp = await fetch(`${MOVIES_API_URL}&t=${title}`);
    const data = await resp.json();
    console.log(data);
    setFullDataMovie(data);
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
          // fetchMovies={fetchMovies}
          fetchMovies={setNowSearchGoal}
          changeValue={changeTitleSearchGoal}
          // changeValue={setNowSearchGoal}
          theme={isLight}
        />
      </section>
      <section className={s.response_section}>
        {/* {!responseMovies ? null : responseMovies.Response === 'True' ? (
          responseMovies.Search.map((movie) => ( */}
        {!moviesResponse ? null : responseMovies.response &&
          responseMovies.isFulfilled ? (
          moviesResponse.response.map((movie) => (
            <CardMovie
              key={movie.imdbID}
              title={movie.Title}
              url={movie.Poster}
              setInfoMovie={fetchFullInfoMovie}
            />
          ))
        ) : (
          <h2 className={s.title__not_found}>
            Nothing was found for your request
          </h2>
        )}
      </section>
    </main>
  );
};
