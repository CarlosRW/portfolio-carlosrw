import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import es from './locales/es.json';
import en from './locales/en.json';

const resources = {
  es: { translation: es },
  en: { translation: en },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    supportedLngs: ['es', 'en'],
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    detection: {
      // 1) idioma guardado explícitamente por el usuario,
      // 2) idioma del navegador,
      // 3) fallback a 'es'.
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'carlosrw_lang',
    },
    returnObjects: true,
  });

export default i18n;