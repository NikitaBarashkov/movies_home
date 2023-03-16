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
    logOut(state) {
      state.currentUser = { isAuth: false, user: null };
    },
    setLogInErrors(state, action) {
      Object.assign(state.invalidLogIn, action.payload);
    },
    setLogUpErrors(state, action) {
      Object.assign(state.invalidLogUp, action.payload);
    },
    correctAuthorization(state, action) {
      state.invalidLogIn = { isWrong: false, wrongValue: null };
      state.invalidLogUp = { isWrong: false, wrongValue: null };
      state.currentUser = {
        isAuth: true,
        user: action.payload,
      };
    },
  },
});

export const { logOut, setLogInErrors, setLogUpErrors, correctAuthorization } =
  authorizationSlice.actions;

export const authReducer = authorizationSlice.reducer;
