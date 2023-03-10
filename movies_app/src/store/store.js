import { configureStore } from '@reduxjs/toolkit';

import { historyReducer } from './historySlice';
import { userReducer } from './usersSlice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    users: userReducer,
  },
});
