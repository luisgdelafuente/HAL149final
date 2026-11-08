import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { iconBtn } from '../utils/ui';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useT();
  const label = theme === 'dark' ? t.a11y.toLight : t.a11y.toDark;

  return (
    <button type="button" onClick={toggleTheme} aria-label={label} title={label} className={iconBtn}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -40, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.9 }}
          transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="grid place-items-center">
          
          {theme === 'dark' ? <SunIcon className="h-4 w-4" aria-hidden="true" /> : <MoonIcon className="h-4 w-4" aria-hidden="true" />}
        </motion.span>
      </AnimatePresence>
    </button>);

}