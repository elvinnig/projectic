import { createSlice } from '@reduxjs/toolkit';
//! for testing
export const projectSlice = createSlice({
  name: 'project',
  initialState: [],
  reducers: {
    //TODO
    //! only admin can manipulate file type entity
  },
});

export const {} = projectSlice.actions;

export default projectSlice.reducer;
