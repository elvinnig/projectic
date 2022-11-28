import { createSlice } from '@reduxjs/toolkit';
//! for testing
export const badgeSlice = createSlice({
  name: 'badge',
  initialState: [
    { _id: 0, userID: 0, name: 'Easy' },
    { _id: 1, userID: 0, name: 'Medium' },
    { _id: 2, userID: 0, name: 'Hard' },
  ],
  reducers: {
    createBadge: (state, action) => {
      //TODO add new badge in the current badge state
      state = state.push({ ...action.payload.badge });
    },
    updateBadge: (state, action) => {
      //TODO update selected badge in the current badge state
      //state = state.push({ ...action.payload.badge });
    },
    deleteBadge: (state, action) => {
      //TODO delete selected badge in the current badge state
      //state = state.push({ ...action.payload.badge });
    },
    fetchBadge: (state, action) => {
      //TODO get all badge in the database then save to state
      //state = [];
      //state = state.push(...action.payload.badge);
    },
  },
});

export const { createBadge, updateBadge, deleteBadge, fetchBadge } =
  badgeSlice.actions;

export default badgeSlice.reducer;
