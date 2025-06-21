import { getLocales } from "expo-localization";
import { default as i18n } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import es from "./es.json";

const deviceLanguage = getLocales()[0].languageCode || "es";

i18n.use(initReactI18next).init({
  fallbackLng: "es",
  lng: deviceLanguage,
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
