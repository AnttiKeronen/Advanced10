import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          frontpage: "This is the front page"
        }
      },
      fi: {
        translation: {
          home: "Etusivu",
          about: "Tietoa Meistä",
          frontpage: "Tämä on etusivu"
        }
      }
    }
  });

export default i18n;
