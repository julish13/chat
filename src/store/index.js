import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './slices/chat.js';

const store = configureStore({
  reducer: { chat: chatReducer },
});

export default store;
