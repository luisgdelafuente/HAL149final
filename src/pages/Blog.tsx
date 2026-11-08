import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useT } from '../contexts/LanguageContext';
import { publishedPosts } from '../utils/content';
import { pathsFor, routeFor } from '../utils/routes';
import { btnSecondary } from '../utils/ui';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { PostCard } from '../components/PostCard';
import { BlogFilters, TopicFilter, TypeFilter } from '../components/blog/BlogFilters';
import { Pagination } from '../components/blog/Pagination';

const PAGE_SIZE = 9;

export function Blog() {
  const { t, lang } = useT();
  const [params] = useSearchParams();
  const [type, setType] = useState<TypeFilter>('all');
  const [topic, setTopic] = useState<TopicFilter>('all');
  const [query, setQuery] = useState(params.get('q') ?? '');
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publishedPosts.filter(
      (p) =>
      (type === 'all' || p.type === type) && (
      topic === 'all' || p.topic === topic) && (
      !q || p[lang].title.toLowerCase().includes(q) || p[lang].excerpt.toLowerCase().includes(q))
    );
  }, [type, topic, query, lang]);

  useEffect(() => setPage(1), [type, topic, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const crumbs = [
  { name: t.nav.home, path: routeFor(lang, 'home') },
  { name: t.blog.title, path: routeFor(lang, 'blog') }];


  const changePage = (p: number) => {
    setPage(p);
    listRef.current?.scrollIntoView({ block: 'start' });
  };

  const clear = () => {
    setType('all');
    setTopic('all');
    setQuery('');
  };

  return (
    <>
      <Seo title={t.blog.metaTitle} description={t.blog.metaDescription} paths={pathsFor('blog')} breadcrumbs={crumbs} />
      <PageHeader crumbs={crumbs} title={t.blog.title} intro={t.blog.intro} />

      <div ref={listRef} className="shell scroll-mt-24 pb-24">
        <BlogFilters type={type} topic={topic} query={query} onType={setType} onTopic={setTopic} onQuery={setQuery} />
        <p role="status" aria-live="polite" className="meta mt-6">
          {t.blog.results(filtered.length)}
        </p>

        {visible.length > 0 ?
        <ul className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) =>
          <li key={p.id}>
                <PostCard post={p} headingLevel={2} />
              </li>
          )}
          </ul> :

        <div className="mt-8 flex flex-col items-start gap-5 rounded-2xl border border-dashed border-line px-6 py-14 sm:items-center sm:text-center">
            <p className="text-muted">{t.blog.empty}</p>
            <button type="button" onClick={clear} className={btnSecondary}>
              {t.blog.clear}
            </button>
          </div>
        }

        <Pagination page={current} totalPages={totalPages} onChange={changePage} />
      </div>
    </>);

}