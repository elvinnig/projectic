import { createSlice } from '@reduxjs/toolkit';
//! for testing
export const projectSlice = createSlice({
  name: 'project',
  initialState: [],
  reducers: {
    fetchProject: (state, action) => {
      //* store the login user info to the state
      state = [...action.payload.project];
      console.log(state);
    },
  },
});

export const { fetchProject } = projectSlice.actions;

export default projectSlice.reducer;
