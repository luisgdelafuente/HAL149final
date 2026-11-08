import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { brand } from '../../brand';
import { useT } from '../../contexts/LanguageContext';
import { routeFor } from '../../utils/routes';
import { AuthorAvatar } from './AuthorAvatar';

export function AuthorBox() {
  const { t, lang } = useT();
  return (
    <aside aria-labelledby="author-box" className="flex flex-col gap-5 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-start">
      <AuthorAvatar size={64} />
      <div>
        <p className="meta">{t.post.aboutAuthor}</p>
        <h2 id="author-box" className="mt-2 font-display text-lg font-medium text-ink">
          {brand.author.name} <span className="font-sans text-sm font-normal text-muted">· {brand.author.role[lang]}</span>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{brand.author.bio[lang]}</p>
        <Link to={routeFor(lang, 'about')} className="group mt-4 inline-flex items-center gap-1.5 rounded text-sm text-accent-ink">
          {t.post.moreAbout}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </aside>);

}