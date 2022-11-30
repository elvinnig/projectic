import { configureStore } from '@reduxjs/toolkit';
//*Import Slices
import badgeSlice from './slices/badgeSlice';
import fileSlice from './slices/fileSlice';
import fileTypeSlice from './slices/fileTypeSlice';
import projectSlice from './slices/projectSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    badge: badgeSlice,
    fileType: fileTypeSlice,
    file: fileSlice,
    project: projectSlice,
  },
});
