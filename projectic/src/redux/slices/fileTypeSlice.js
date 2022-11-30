import { createSlice } from '@reduxjs/toolkit';
//! for testing
export const fileTypeSlice = createSlice({
  name: 'filteTpye',
  initialState: [
    {
      _id: 0,
      name: 'Image',
    },
    {
      _id: 1,
      name: 'Music',
    },
    {
      _id: 2,
      name: 'Document',
    },
  ],
  reducers: {
    //TODO 
    //! only admin can manipulate file type entity
  },
});

export const {} = fileTypeSlice.actions;

export default fileTypeSlice.reducer;
