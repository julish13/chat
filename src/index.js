import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import App from './App.js';
import i18n from '../lib/i18n';
import '../assets/application.scss';

const container = document.querySelector('#chat');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>
);
