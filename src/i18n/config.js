import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { customWords } from './customWords';
import { enTranslations } from './en';
import { hiTranslations } from './hi';
import { mrTranslations } from './mr';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enTranslations,
          slang: customWords.en
        }
      },
      hi: {
        translation: {
          ...hiTranslations,
          slang: customWords.hi
        }
      },
      mr: {
        translation: {
          ...mrTranslations,
          slang: customWords.mr
        }
      }
    },
    lng: 'en', // Default language is English
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    }
  });

export default i18n;
