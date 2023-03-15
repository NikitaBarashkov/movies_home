import { createSlice } from '@reduxjs/toolkit';

export const authorizationSlice = createSlice({
  name: 'authorized',
  initialState: {
    currentUser: { isAuth: false, user: null },
    invalidLogIn: {
      isWrong: false,
      wrongValue: null,
    },
    invalidLogUp: {
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
    setLogInErrors(state, action) {
      Object.assign(state.invalidLogIn, action.payload);
    },
    setLogUpErrors(state, action) {
      Object.assign(state.invalidLogUp, action.payload);
    },
  },
});

export const { logIn, logOut, setLogInErrors, setLogUpErrors } =
  authorizationSlice.actions;

export const authReducer = authorizationSlice.reducer;
