import { configureStore } from '@reduxjs/toolkit';
import anatomyReducer from './slices/anatomySlice';


export const store = configureStore({
  reducer: {
    anatomy: anatomyReducer,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;