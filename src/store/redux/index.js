import { configureStore } from '@reduxjs/toolkit';
import { chat, modal } from './slices';

const store = configureStore({
  reducer: { chat, modal },
});

export default store;
