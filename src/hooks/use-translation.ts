import { useTranslation as i18nUseTranslation } from "react-i18next";

export const useTranslation = () => {
  const { t, i18n } = i18nUseTranslation();
  return {
    t,
    changeLanguage: i18n.changeLanguage,
    currentLanguage: i18n.language,
  };
};