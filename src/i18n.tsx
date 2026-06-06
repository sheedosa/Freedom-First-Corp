import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { content as en, type Content } from './content';
import { contentAr } from './content.ar';
import { contentEs } from './content.es';

export type Locale = 'en' | 'ar' | 'es';

const DICTIONARIES: Record<Locale, Content> = { en, ar: contentAr, es: contentEs };
const RTL_LOCALES: Locale[] = ['ar'];
const STORAGE_KEY = 'ffg-lang';

type LanguageCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  content: Content;
  dir: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageCtx | null>(null);

const readInitialLocale = (): Locale => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && DICTIONARIES[saved]) return saved;
  } catch {
    /* localStorage unavailable */
  }
  return 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);
  const dir: 'ltr' | 'rtl' = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* ignore */
    }
  }, [locale, dir]);

  const setLocale = (l: Locale) => setLocaleState(DICTIONARIES[l] ? l : 'en');

  return (
    <LanguageContext.Provider value={{ locale, setLocale, content: DICTIONARIES[locale], dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageCtx => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};

/** Returns the active locale's content object. */
export const useContent = (): Content => useLanguage().content;
