import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // detects user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        translation: {
          "Customers": "Customers",
          "Audits": "Audits",
          "Auditors": "Auditors",
          "Documents": "Documents",
          "Async example": "Async example"
        }
      },
      bg: {
        translation: {
          "Customers": "Клиенти",
          "Audits": "Одити",
          "Auditors": "Одитори",
          "Documents": "Документи",
          "Async example": "Асинхронен пример"
        }
      }
    }
  });

export default i18n;