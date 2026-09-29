// "use client";

// import {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// import {
//   defaultLanguage,
//   LanguageCode,
// } from "./config";

// import { en } from "./translations/en";
// import { gu } from "./translations/gu";

// const translations = {
//   en,
//   gu,
// };

// type TranslationObject = typeof en;

// interface LanguageContextValue {
//   language: LanguageCode;
//   setLanguage: (language: LanguageCode) => void;
//   t: (key: string) => string;
// }

// const LanguageContext =
//   createContext<LanguageContextValue | null>(null);

// function getNestedValue(
//   object: TranslationObject,
//   path: string
// ): string {
//   const value = path
//     .split(".")
//     .reduce<unknown>((current, key) => {
//       if (
//         current &&
//         typeof current === "object" &&
//         key in current
//       ) {
//         return (current as Record<string, unknown>)[key];
//       }

//       return undefined;
//     }, object);

//   return typeof value === "string" ? value : path;
// }

// export function LanguageProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [language, setLanguageState] =
//     useState<LanguageCode>(defaultLanguage);

//   useEffect(() => {
//     const savedLanguage = localStorage.getItem(
//       "vlg-language"
//     ) as LanguageCode | null;

//     if (
//       savedLanguage === "en" ||
//       savedLanguage === "gu"
//     ) {
//       setLanguageState(savedLanguage);
//     }
//   }, []);

//   const setLanguage = useCallback(
//     (nextLanguage: LanguageCode) => {
//       setLanguageState(nextLanguage);

//       localStorage.setItem(
//         "vlg-language",
//         nextLanguage
//       );

//       document.documentElement.lang = nextLanguage;
//     },
//     []
//   );

//   const t = useCallback(
//     (key: string) => {
//       return getNestedValue(
//         translations[language],
//         key
//       );
//     },
//     [language]
//   );

//   const value = useMemo(
//     () => ({
//       language,
//       setLanguage,
//       t,
//     }),
//     [language, setLanguage, t]
//   );

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// export function useLanguage() {
//   const context = useContext(LanguageContext);

//   if (!context) {
//     throw new Error(
//       "useLanguage must be used inside LanguageProvider"
//     );
//   }

//   return context;
// }
"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import en from "./translations/en";
import gu from "./translations/gu";

export type Language = "en" | "gu";

const translations = {
  en,
  gu,
};

type Translation = typeof en;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext =
  createContext<LanguageContextValue | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
}

export function LanguageProvider({
  children,
  defaultLanguage = "en",
}: LanguageProviderProps) {
  const [language, setLanguage] =
    useState<Language>(defaultLanguage);

  const t = useMemo(() => {
    return translations[language];
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}