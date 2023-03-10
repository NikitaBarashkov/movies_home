import { createSlice } from '@reduxjs/toolkit';

export const authorizationSlice = createSlice({
  name: 'authorized',
  initialState: {
    currentUser: { isAuth: false, user: null },
    wrongInput: {
      isWrong: false,
      wrongValue: null,
    },
  },

  reducers: {
    logIn(state, action) {
      Object.assign(state.currentUser, action.payload);
    },
    logOut(state, action) {
      Object.assign(state.currentUser, action.payload);
    },
    setLoginErrors(state, action) {
      Object.assign(state.wrongInput, action.payload);
    },
  },
});

export const { logIn, logOut, setLoginErrors } = authorizationSlice.actions;
export const authReducer = authorizationSlice.reducer;
