import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, translations } from '../locales';
import type { Translations } from '../locales/en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('locale');
    if (saved === 'en' || saved === 'it') {
      return saved;
    }
    // Default to browser language or English
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'it' ? 'it' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const value: LocaleContextType = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
