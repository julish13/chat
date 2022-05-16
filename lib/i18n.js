import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from '../locales/ru.js';

const i18n = createInstance({
  fallbackLng: 'ru',
  debug: true,

  resources: {
    ru
  },
});

i18n.use(initReactI18next).init();

export default i18n;