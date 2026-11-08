import React from 'react';
import { useT } from '../../contexts/LanguageContext';
import type { Crumb, Topic } from '../../types/content';
import { postsInTopic } from '../../utils/content';
import { Breadcrumbs } from '../Breadcrumbs';
import { TopicIcon } from './TopicIcon';

/** Pillar hero: title plus an explicit one-sentence definition (extractable by answer engines). */
export function TopicHero({ topic, crumbs }: {topic: Topic;crumbs: Crumb[];}) {
  const { t, lang } = useT();
  const c = topic[lang];
  const startsWithTerm = c.definition.toLowerCase().startsWith(c.title.toLowerCase());
  return (
    <header className="shell pb-14 pt-10 md:pt-14">
      <Breadcrumbs items={crumbs} />
      <div className="mt-8 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-accent/60 text-accent-ink">
          <TopicIcon id={topic.id} className="h-4 w-4" />
        </span>
        <span className="meta">
          {topic.code} · {t.topics.count(postsInTopic(topic.id).length)}
        </span>
      </div>
      <h1 className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-ink md:text-6xl">{c.title}</h1>
      <div className="mt-10 max-w-3xl border-l-2 border-accent pl-6">
        <p className="meta text-accent-ink">{t.topics.definition}</p>
        <p className="mt-3 font-display text-xl leading-snug text-ink md:text-2xl">
          {startsWithTerm ?
          <>
              <dfn className="not-italic">{c.definition.slice(0, c.title.length)}</dfn>
              {c.definition.slice(c.title.length)}
            </> :

          c.definition
          }
        </p>
      </div>
    </header>);

}