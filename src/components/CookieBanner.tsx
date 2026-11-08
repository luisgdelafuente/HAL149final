import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext';
import { routeFor } from '../utils/routes';
import { btnGhostSm, COOKIE_SETTINGS_EVENT, EASE_OUT, textLink } from '../utils/ui';

const CONSENT_KEY = 'hal149-consent';
type Optional = {analytics: boolean;preferences: boolean;};

/** Built-in consent banner. No third-party scripts. */
export function CookieBanner() {
  const { t, lang } = useT();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<Optional>({ analytics: false, preferences: true });

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CONSENT_KEY);
      if (!raw) setVisible(true);else
      {
        const saved = JSON.parse(raw) as Optional;
        setPrefs({ analytics: !!saved.analytics, preferences: !!saved.preferences });
      }
    } catch {
      setVisible(true);
    }
    const open = () => {
      setVisible(true);
      setExpanded(true);
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, open);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, open);
  }, []);

  const save = (choice: Optional) => {
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ necessary: true, ...choice, decidedAt: new Date().toISOString() }));
    } catch {

      /* storage unavailable */}
    setPrefs(choice);
    setVisible(false);
    setExpanded(false);
  };

  const categories: {key: 'necessary' | keyof Optional;locked?: boolean;}[] = [
  { key: 'necessary', locked: true },
  { key: 'preferences' },
  { key: 'analytics' }];


  return (
    <AnimatePresence>
      {visible &&
      <motion.section
        role="region"
        aria-label={t.cookies.label}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.22, ease: EASE_OUT }}
        className="fixed inset-x-4 bottom-4 z-40 rounded-2xl border border-line bg-surface/95 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:left-4 sm:right-auto sm:max-w-sm">
        
          <p className="meta text-accent-ink">{t.cookies.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {t.cookies.text}{' '}
            <Link to={routeFor(lang, 'cookies')} className={textLink}>
              {t.cookies.policy}
            </Link>
          </p>

          {expanded &&
        <ul className="mt-4 space-y-3 border-t border-line pt-4">
              {categories.map(({ key, locked }) => {
            const checked = key === 'necessary' ? true : prefs[key];
            const id = `cookie-${key}`;
            return (
              <li key={key} className="flex items-start justify-between gap-4">
                    <div>
                      <p id={id} className="text-sm font-medium text-ink">
                        {t.cookies.categories[key].title}
                      </p>
                      <p className="text-xs text-muted">{t.cookies.categories[key].desc}</p>
                    </div>
                    <button
                  type="button"
                  role="switch"
                  aria-checked={checked}
                  aria-labelledby={id}
                  disabled={locked}
                  onClick={() => {
                    if (key === 'necessary') return;
                    const k: keyof Optional = key;
                    setPrefs((p) => ({ ...p, [k]: !p[k] }));
                  }}
                  className={`relative mt-0.5 h-5 w-9 shrink-0 rounded-full border transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60 ${
                  checked ? 'border-accent bg-accent' : 'border-line bg-surface2'}`
                  }>
                  
                      <span
                    aria-hidden="true"
                    className={`absolute top-0.5 h-3.5 w-3.5 rounded-full transition-transform duration-150 ease-out ${
                    checked ? 'translate-x-[18px] bg-on-accent' : 'translate-x-0.5 bg-muted'}`
                    } />
                  
                    </button>
                  </li>);

          })}
            </ul>
        }

          <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
            {!expanded &&
          <button type="button" onClick={() => setExpanded(true)} className={`${btnGhostSm} mr-auto -ml-3`}>
                {t.cookies.settings}
              </button>
          }
            <button
            type="button"
            onClick={() => save({ analytics: false, preferences: false })}
            className="rounded-full border border-line px-4 py-2 text-xs font-medium text-ink transition-colors duration-150 hover:border-muted">
            
              {t.cookies.reject}
            </button>
            {expanded ?
          <button
            type="button"
            onClick={() => save(prefs)}
            className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-on-accent transition-shadow duration-150 hover:shadow-glow">
            
                {t.cookies.save}
              </button> :

          <button
            type="button"
            onClick={() => save({ analytics: true, preferences: true })}
            className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-on-accent transition-shadow duration-150 hover:shadow-glow">
            
                {t.cookies.accept}
              </button>
          }
          </div>
        </motion.section>
      }
    </AnimatePresence>);

}