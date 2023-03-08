import { useState } from 'react';
import cn from 'classnames';

import { useTheme } from '../../../hooks/useTheme';
import { useSearchGoal } from '../../../hooks/useSearchGoal';
import { CardMovie } from '../../CardMovie/CardMovie';
import { SearchForm } from '../../SearchForm/SearchForm';
import { SearchOptionsForm } from '../../SearchOptionsForm/SearchOptionsForm';
import { MOVIES_API_URL } from '../../../utilities/constants';

import { useDispatch } from 'react-redux';
import { addOnHistory } from '../../../store/historySlice';

import s from './SearchPage.module.css';

export const SearchPage = () => {
  const {isLight} = useTheme();  
 
  const [
    searchGoal, 
    changeTitleSearchGoal, 
    changeTypeSearchGoal
  ] = useSearchGoal();

  const [responseMovies, setResponseMovies] = useState(); 
  const [fullDataMovie, setFullDataMovie] = useState();

  const dispatch = useDispatch();

  const fetchMovies = async (e) => {
    e.preventDefault()

    let url = MOVIES_API_URL;
    
    if (searchGoal) {
      url+= `&s=${searchGoal.titleMovie}`;
    }

    if (searchGoal.typeMovie !== 'both') {
      url += `&t=${searchGoal.typeMovie}`;
    }
    
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.Response === 'True') {
      dispatch(addOnHistory({search: searchGoal, result: data.Search}))
      setResponseMovies(data.Search);
    } 
    console.log(data)   
  }

  const fetchFullInfoMovie = async(title) => {
    const resp = await fetch(`http://www.omdbapi.com/?apikey=6215c723&t=${title}`);
    const data = await resp.json();
    console.log(data)
    setFullDataMovie(data);
  }

  return (
    <main className={ cn(s.main, {[s.main__light]: isLight}) }>
      <section className={s.search_section}>
        <div className={s.radio_container}>
          <h2 className={s.title}>
            You can choose separately movies or series and both
          </h2>
          <SearchOptionsForm changeSearchType={changeTypeSearchGoal} />
        </div>
        <SearchForm 
          value={searchGoal.titleMovie}   
          fetchMovies={fetchMovies} 
          changeValue={changeTitleSearchGoal} 
          theme={isLight}
        />
      </section>
      <section className={s.response_section}>
        {responseMovies 
          ? responseMovies.map(movie => 
            <CardMovie 
              key={movie.imdbID} 
              title={movie.Title} 
              url={movie.Poster} 
              setInfoMovie={fetchFullInfoMovie}
            />
            )
          : null   
        }
      </section>
    </main>
  );
};