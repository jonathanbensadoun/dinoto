import { configureStore } from '@reduxjs/toolkit';
import dinoSlice from './dinoSlice';
import callApiMiddlewares from './callApiMiddlewares';

const store = configureStore({
  reducer: {
    dino: dinoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(callApiMiddlewares),
});

export default store;
