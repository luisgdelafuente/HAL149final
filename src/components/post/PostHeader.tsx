import React from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../../brand';
import { useT } from '../../contexts/LanguageContext';
import type { Crumb, Post } from '../../types/content';
import { topicsById } from '../../utils/content';
import { formatDate } from '../../utils/format';
import { routeFor, topicPath } from '../../utils/routes';
import { Breadcrumbs } from '../Breadcrumbs';
import { TypeBadge } from '../TypeBadge';
import { AuthorAvatar } from './AuthorAvatar';

export function PostHeader({ post, crumbs }: {post: Post;crumbs: Crumb[];}) {
  const { t, lang } = useT();
  const c = post[lang];
  const topic = topicsById[post.topic];

  return (
    <header className="shell pb-10 pt-10 md:pt-14">
      <Breadcrumbs items={crumbs} />
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <TypeBadge type={post.type} />
        <Link to={topicPath(lang, topic)} className="meta rounded text-ink/75 transition-colors duration-150 hover:text-accent-ink">
          {topic[lang].title}
        </Link>
      </div>
      <h1 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.06] tracking-[-0.025em] text-ink md:text-[3.5rem]">{c.title}</h1>
      <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">{c.subtitle}</p>

      <div className="mt-10 flex flex-col gap-6 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <AuthorAvatar size={44} />
          <div>
            <p className="text-sm text-ink">
              <span className="text-muted">{t.post.by} </span>
              <Link to={routeFor(lang, 'about')} rel="author" className="rounded font-medium transition-colors duration-150 hover:text-accent-ink">
                {brand.author.name}
              </Link>
            </p>
            <p className="text-xs text-muted">{brand.author.role[lang]}</p>
          </div>
        </div>
        <dl className="grid grid-cols-3 gap-6 font-mono text-[11px] uppercase tracking-[0.1em] sm:flex sm:gap-8">
          <div>
            <dt className="text-muted">{t.post.published}</dt>
            <dd className="mt-1 text-ink">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, lang)}</time>
            </dd>
          </div>
          <div>
            <dt className="text-muted">{t.post.updated}</dt>
            <dd className="mt-1 text-ink">
              <time dateTime={post.updatedAt}>{formatDate(post.updatedAt, lang)}</time>
            </dd>
          </div>
          <div>
            <dt className="text-muted">{t.post.minRead(post.readingTime).replace(/^\d+\s*/, '')}</dt>
            <dd className="mt-1 text-ink">{post.readingTime}′</dd>
          </div>
        </dl>
      </div>

      {c.tags.length > 0 &&
      <ul aria-label={t.post.tags} className="mt-6 flex flex-wrap gap-2">
          {c.tags.map((tag) =>
        <li key={tag} className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] text-muted">
              #{tag}
            </li>
        )}
        </ul>
      }
    </header>);

}