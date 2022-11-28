import { createSlice } from '@reduxjs/toolkit';
//! for testing
export const fileSlice = createSlice({
  name: 'file',
  initialState: [
    {
      _id: 0,
      fileTypeID: 0,
      fileLink: 'https://picsum.photos/500/300?random=1',
    },
    {
      _id: 1,
      fileTypeID: 0,
      fileLink: 'https://picsum.photos/500/300?random=2',
    },
    {
      _id: 2,
      fileTypeID: 0,
      fileLink: 'https://picsum.photos/500/300?random=3',
    },
  ],
  reducers: {
    //TODO
    //! only admin can manipulate file type entity
  },
});

export const {} = fileSlice.actions;

export default fileSlice.reducer;
