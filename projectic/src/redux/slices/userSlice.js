import { createSlice } from '@reduxjs/toolkit';
//! for testing

export const userSlice = createSlice({
  name: 'user',
  initialState: {},

  reducers: {
    fetchUser: (state, action) => {
      //* when a user login make sure no user is stored in the state
      //state = [];
      //* store the login user info to the state
      state = { ...action.payload.user };
      // console.log(state);
    },
    deleteBadge: (state, action) => {
      //state = state.push({ ...action.payload.badge });
    },
  },
});

export const { fetchUser } = userSlice.actions;

export default userSlice.reducer;
