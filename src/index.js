import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import store from '@store/redux';
import { AuthContextProvider } from '@store/context/auth-context.js';
import { WebSocketContextProvider } from '@store/context/web-socket-context';
import App from './App.js';
import i18n from './lib/i18n';
import './application.scss';

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <WebSocketContextProvider>
            <App />
          </WebSocketContextProvider>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </AuthContextProvider>
);
