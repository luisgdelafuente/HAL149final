import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ThemeName } from '../brand';
import { applyTheme, getInitialTheme, THEME_STORAGE_KEY } from '../utils/theme';

interface ThemeValue {
  theme: ThemeName;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeValue>({ theme: 'dark', toggleTheme: () => undefined });

export function ThemeProvider({ children }: {children: React.ReactNode;}) {
  const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {

      /* storage unavailable */}
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => t === 'dark' ? 'light' : 'dark'), []);
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeValue {
  return useContext(ThemeContext);
}