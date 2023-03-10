import { configureStore } from '@reduxjs/toolkit';

import { historyReducer } from './historySlice';
import { userReducer } from './usersSlice';
import { authReducer } from './authorizationSlice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    users: userReducer,
    authorization: authReducer,
  },
});
