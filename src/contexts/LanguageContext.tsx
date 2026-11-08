import React, { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { brand, Dictionary, Lang } from '../brand';
import { langFromPath } from '../utils/routes';

interface LanguageValue {
  lang: Lang;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageValue>({ lang: 'en', t: brand.i18n.en });

/** Language is derived from the URL prefix: /es/* is Spanish, everything else English. */
export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  const value = useMemo(() => ({ lang, t: brand.i18n[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT(): LanguageValue {
  return useContext(LanguageContext);
}