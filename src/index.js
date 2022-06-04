import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { io } from 'socket.io-client';
import store from '@store';
import { AuthContextProvider } from '@store/context/auth-context.js';
import App from './App.js';
import i18n from '../lib/i18n';
import '@assets/application.scss';

const container = document.querySelector('#chat');
const root = createRoot(container);
const socket = io();
root.render(
  <AuthContextProvider>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <App socket={socket} />
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </AuthContextProvider>
);
