import { createSlice } from '@reduxjs/toolkit';
//! for testing
export const userSlice = createSlice({
  name: 'user',
  initialState: [
    {
      _id: 0,
      firstname: 'Jim',
      lastname: 'Cruz',
      username: 'jim123',
      email: 'jim123@gmail.com',
      password: 'jim123',
      isAdmin: false,
    },
  ],
  reducers: {
    registerUser: (state, action) => {
      //* when a user register make sure no user is stored in the state
      state = [];
      //* store the newly registered user to the state
      state = state.push({ ...action.payload.user });
      //TODO connect to database
    },
    fetchUser: (state, action) => {
      //* when a user login make sure no user is stored in the state
      state = [];
      //* store the login user info to the state
      state = state.push({ ...action.payload.user });
    },
    deleteBadge: (state, action) => {
      //state = state.push({ ...action.payload.badge });
    },
  },
});

export const { registerUser, fetchUser } = userSlice.actions;

export default userSlice.reducer;
