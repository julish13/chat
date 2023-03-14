import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chat.js';
import modalReducer from './modal';

const store = configureStore({
  reducer: { chat: chatReducer, modal: modalReducer },
});

export default store;
