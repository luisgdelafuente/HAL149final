import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { languages } from '../brand';
import { useT } from '../contexts/LanguageContext';
import { alternatePath } from '../utils/routes';

/** EN | ES — always links to the equivalent page in the other language. */
export function LanguageSwitcher({ className = '' }: {className?: string;}) {
  const { t, lang } = useT();
  const { pathname } = useLocation();

  return (
    <div role="group" aria-label={t.a11y.language} className={`flex items-center font-mono text-xs ${className}`}>
      {languages.map((l, i) => {
        const current = l === lang;
        return (
          <React.Fragment key={l}>
            {i > 0 &&
            <span aria-hidden="true" className="px-1 text-muted/50">
                |
              </span>
            }
            <Link
              to={current ? pathname : alternatePath(pathname, l)}
              hrefLang={l}
              lang={l}
              aria-label={t.languageNames[l]}
              aria-current={current ? 'true' : undefined}
              className={`rounded px-1.5 py-1 uppercase tracking-[0.12em] transition-colors duration-150 ${
              current ? 'text-ink' : 'text-muted hover:text-accent-ink'}`
              }>
              
              {l}
            </Link>
          </React.Fragment>);

      })}
    </div>);

}