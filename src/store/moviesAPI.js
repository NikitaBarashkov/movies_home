import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { MOVIES_API_URL } from '../utilities/constants';

export const moviesAPI = createApi({
  reducerPath: 'moviesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: MOVIES_API_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (option) => {
        if (option.typeMovie !== 'both') {
          return (
            MOVIES_API_URL +
            `&t=${option.typeMovie}` +
            `&s=${option.titleMovie}`
          );
        } else {
          return MOVIES_API_URL + `&s=${option.titleMovie}`;
        }
      },
      transformResponse: (response) => {
        return {
          response: response.Search,
          isFulfilled: response.Response,
        };
      },
    }),
    getMovie: builder.query({
      query: (option) => MOVIES_API_URL + `&t=${option}`,
      transformResponse: (response) => {
        const prop = { list: [] };
        for (let item in response) {
          if (item === 'Title') {
            prop.title = response[item];
          } else if (item === 'Poster') {
            prop.poster = response[item];
          } else if (item === 'Ratings') {
            prop.ratings = response[item];
          } else {
            prop.list.push([[item], response[item]]);
          }
        }
        return prop;
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = moviesAPI;
