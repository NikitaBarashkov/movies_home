import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { addUser, setUsers } = usersSlice.actions;
export const userReducer = usersSlice.reducer;
