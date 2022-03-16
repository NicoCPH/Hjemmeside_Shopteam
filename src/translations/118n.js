import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_DK } from "./dk/translation";
import { TRANSLATIONS_EN } from "./en/translation";
import { TRANSLATIONS_DE } from "./de/translation";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: {
     en: {
       translation: TRANSLATIONS_EN
     },
     dk: {
       translation: TRANSLATIONS_DK
     },
     de: {
      translation: TRANSLATIONS_DE
    }
   }
 });

export default i18n;