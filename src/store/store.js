import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { historyReducer } from './historySlice';
import { userReducer } from './usersSlice';
import { authReducer } from './authorizationSlice';
import { favoriteReducer } from './favoriteSlice';
import { initStoreReducer } from './initStoreSlice';

import { setLocStorageMiddleware } from './middlewares/setLocStorageMiddleware';
import { setStoreMiddleware } from './middlewares/setStoreMiddleware';
import { moviesAPI } from './moviesAPI';

const rootReducer = combineReducers({
  history: historyReducer,
  users: userReducer,
  authorization: authReducer,
  favorite: favoriteReducer,
  [moviesAPI.reducerPath]: moviesAPI.reducer,
  initApp: initStoreReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesAPI.middleware,
      setLocStorageMiddleware,
      setStoreMiddleware
    ),
});
