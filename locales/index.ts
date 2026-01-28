import { en } from './en';
import { it } from './it';

export type Locale = 'en' | 'it';

export const translations = {
  en,
  it,
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  it: 'Italiano',
};
