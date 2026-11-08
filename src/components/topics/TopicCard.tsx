import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import type { Topic } from '../../types/content';
import { postsInTopic } from '../../utils/content';
import { topicPath } from '../../utils/routes';
import { TopicIcon } from './TopicIcon';

export function TopicCard({ topic }: {topic: Topic;}) {
  const { t, lang } = useT();
  const c = topic[lang];
  return (
    <article className="group relative flex h-full w-full flex-col bg-surface p-7 transition-colors duration-200 hover:bg-surface2 md:p-9">
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-line text-accent-ink transition-[border-color,box-shadow] duration-200 group-hover:border-accent group-hover:shadow-glow">
          <TopicIcon id={topic.id} className="h-5 w-5" />
        </span>
        <span className="meta">{topic.code}</span>
      </div>
      <h2 className="mt-10 font-display text-2xl font-medium leading-tight tracking-tight text-ink">
        <Link to={topicPath(lang, topic)} className="rounded after:absolute after:inset-0 after:content-['']">
          {c.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">{c.definition}</p>
      <div className="mt-auto flex items-center justify-between pt-8">
        <span className="meta">{t.topics.count(postsInTopic(topic.id).length)}</span>
        <span className="inline-flex items-center gap-1.5 text-sm text-accent-ink">
          {t.topics.open}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </article>);

}