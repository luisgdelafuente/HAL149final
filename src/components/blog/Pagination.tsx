import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import { pad2 } from '../../utils/format';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  const { t } = useT();
  const pages = Array.from({ length: Math.max(totalPages, 1) }, (_, i) => i + 1);
  const navBtn =
  'inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors duration-150 hover:border-muted disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-line';

  return (
    <nav aria-label={t.blog.paginationLabel} className="mt-16 flex items-center justify-between gap-4 border-t border-line pt-8">
      <button type="button" disabled={page <= 1} onClick={() => onChange(page - 1)} className={navBtn}>
        <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
        {t.blog.prev}
      </button>
      <ul className="flex items-center gap-1">
        {pages.map((p) =>
        <li key={p}>
            <button
            type="button"
            onClick={() => onChange(p)}
            aria-label={t.blog.page(p)}
            aria-current={p === page ? 'page' : undefined}
            className={`grid h-9 w-9 place-items-center rounded-full font-mono text-xs transition-colors duration-150 ${
            p === page ? 'bg-accent text-on-accent' : 'text-muted hover:text-ink'}`
            }>
            
              {pad2(p)}
            </button>
          </li>
        )}
      </ul>
      <button type="button" disabled={page >= totalPages} onClick={() => onChange(page + 1)} className={navBtn}>
        {t.blog.next}
        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>);

}