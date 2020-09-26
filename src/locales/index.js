import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb('vi'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      vi: {
        translation: require('./vi.json'),
      },
      en: {
        translation: require('./en.json'),
      },
    },
    fallbackLng: 'vi',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });

export default i18n;
