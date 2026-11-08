import React from 'react';
import { Link } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext';
import type { Crumb } from '../types/content';

export function Breadcrumbs({ items }: {items: Crumb[];}) {
  const { t } = useT();
  return (
    <nav aria-label={t.a11y.breadcrumb}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex min-w-0 items-center gap-2">
              {i > 0 &&
              <span aria-hidden="true" className="text-muted/50">
                  /
                </span>
              }
              {last ?
              <span aria-current="page" className="max-w-[46ch] truncate text-ink/80">
                  {c.name}
                </span> :

              <Link to={c.path} className="rounded transition-colors duration-150 hover:text-ink">
                  {c.name}
                </Link>
              }
            </li>);

        })}
      </ol>
    </nav>);

}