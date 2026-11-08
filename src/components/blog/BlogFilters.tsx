import React from 'react';
import { SearchIcon, XIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import type { PostType, TopicId } from '../../types/content';
import { topics } from '../../utils/content';
import { chipClass, fieldBase } from '../../utils/ui';

export type TypeFilter = 'all' | PostType;
export type TopicFilter = 'all' | TopicId;

interface BlogFiltersProps {
  type: TypeFilter;
  topic: TopicFilter;
  query: string;
  onType: (v: TypeFilter) => void;
  onTopic: (v: TopicFilter) => void;
  onQuery: (v: string) => void;
}

const TYPES: PostType[] = ['essay', 'project', 'note'];

export function BlogFilters({ type, topic, query, onType, onTopic, onQuery }: BlogFiltersProps) {
  const { t, lang } = useT();

  return (
    <div className="flex flex-col gap-5 border-y border-line py-5 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
      <div className="flex flex-col gap-4">
        <div role="group" aria-label={t.blog.typeFilter} className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={type === 'all'} onClick={() => onType('all')} className={chipClass(type === 'all')}>
            {t.blog.all}
          </button>
          {TYPES.map((tp) =>
          <button key={tp} type="button" aria-pressed={type === tp} onClick={() => onType(tp)} className={chipClass(type === tp)}>
              {t.blog.typesPlural[tp]}
            </button>
          )}
        </div>
        <div role="group" aria-label={t.blog.topicFilter} className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={topic === 'all'} onClick={() => onTopic('all')} className={chipClass(topic === 'all')}>
            {t.blog.allTopics}
          </button>
          {topics.map((tp) =>
          <button key={tp.id} type="button" aria-pressed={topic === tp.id} onClick={() => onTopic(tp.id)} className={chipClass(topic === tp.id)}>
              {tp[lang].title}
            </button>
          )}
        </div>
      </div>

      <div className="relative w-full lg:max-w-xs">
        <label htmlFor="blog-search" className="sr-only">
          {t.blog.searchLabel}
        </label>
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={t.blog.searchPlaceholder}
          className={`${fieldBase} border-line pl-10 pr-10 [&::-webkit-search-cancel-button]:hidden`} />
        
        {query &&
        <button
          type="button"
          onClick={() => onQuery('')}
          aria-label={t.blog.clear}
          className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted transition-colors duration-150 hover:text-ink">
          
            <XIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        }
      </div>
    </div>);

}