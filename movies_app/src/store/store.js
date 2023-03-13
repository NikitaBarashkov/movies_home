import { configureStore } from '@reduxjs/toolkit';

import { historyReducer } from './historySlice';
import { userReducer } from './usersSlice';
import { authReducer } from './authorizationSlice';
import { favoriteReducer } from './favoriteSlice';

import { setLocStorageMiddleware } from './setLocStorageMiddleware';
import { moviesAPI } from './moviesAPI';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    users: userReducer,
    authorization: authReducer,
    favorite: favoriteReducer,
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
  // middleware: [setLocStorageMiddleware],
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesAPI.middleware,
      setLocStorageMiddleware
    ),
});
