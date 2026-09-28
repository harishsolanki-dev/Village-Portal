export const languages = {
  en: {
    code: "en",
    label: "English",
    nativeLabel: "English",
  },

  gu: {
    code: "gu",
    label: "Gujarati",
    nativeLabel: "ગુજરાતી",
  },
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = "en";