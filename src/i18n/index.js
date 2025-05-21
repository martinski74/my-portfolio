import { createI18n } from 'vue-i18n';
import en from './en.json';
import bg from './bg.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    bg,
  },
});

export default i18n;
