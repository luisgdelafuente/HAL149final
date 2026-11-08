import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import type { Post } from '../../types/content';
import { postPath } from '../../utils/routes';

export function PrevNextNav({ prev, next }: {prev?: Post;next?: Post;}) {
  const { t, lang } = useT();
  if (!prev && !next) return null;
  const cell = 'group flex flex-col gap-2 rounded-2xl border border-line p-5 transition-[border-color] duration-150 hover:border-accent/50';

  return (
    <nav aria-label={`${t.post.prev} / ${t.post.next}`} className="grid gap-4 sm:grid-cols-2">
      {prev ?
      <Link to={postPath(lang, prev)} rel="prev" className={cell}>
          <span className="meta inline-flex items-center gap-1.5">
            <ArrowLeftIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:-translate-x-0.5" aria-hidden="true" />
            {t.post.prev}
          </span>
          <span className="font-display text-base font-medium leading-snug text-ink">{prev[lang].title}</span>
        </Link> :

      <span aria-hidden="true" className="hidden sm:block" />
      }
      {next &&
      <Link to={postPath(lang, next)} rel="next" className={`${cell} sm:items-end sm:text-right`}>
          <span className="meta inline-flex items-center gap-1.5">
            {t.post.next}
            <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-medium leading-snug text-ink">{next[lang].title}</span>
        </Link>
      }
    </nav>);

}