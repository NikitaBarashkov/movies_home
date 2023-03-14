import { configureStore } from '@reduxjs/toolkit';

import { historyReducer } from './historySlice';
import { userReducer } from './usersSlice';
import { authReducer } from './authorizationSlice';
import { favoriteReducer } from './favoriteSlice';
import { initStoreReducer } from './initStoreSlice';

import { setLocStorageMiddleware } from './setLocStorageMiddleware';
import { setStoreMiddleware } from './setStoreMiddleware';
import { moviesAPI } from './moviesAPI';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    users: userReducer,
    authorization: authReducer,
    favorite: favoriteReducer,
    [moviesAPI.reducerPath]: moviesAPI.reducer,
    initApp: initStoreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesAPI.middleware,
      setLocStorageMiddleware,
      setStoreMiddleware
    ),
});
