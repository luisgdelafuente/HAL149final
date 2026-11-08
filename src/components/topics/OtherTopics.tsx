import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { useT } from '../../contexts/LanguageContext';
import type { TopicId } from '../../types/content';
import { topics } from '../../utils/content';
import { topicPath } from '../../utils/routes';
import { TopicIcon } from './TopicIcon';

export function OtherTopics({ current }: {current: TopicId;}) {
  const { t, lang } = useT();
  return (
    <nav aria-labelledby="other-topics">
      <h2 id="other-topics" className="meta">
        {t.topics.other}
      </h2>
      <ul className="mt-4 space-y-1">
        {topics.
        filter((tp) => tp.id !== current).
        map((tp) =>
        <li key={tp.id}>
              <Link
            to={topicPath(lang, tp)}
            className="group flex items-center gap-3 rounded-xl py-2.5 text-sm text-ink transition-colors duration-150 hover:text-accent-ink">
            
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors duration-150 group-hover:border-accent group-hover:text-accent-ink">
                  <TopicIcon id={tp.id} className="h-3.5 w-3.5" />
                </span>
                <span className="flex-1">{tp[lang].title}</span>
                <ArrowUpRightIcon className="h-4 w-4 text-muted transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </li>
        )}
      </ul>
    </nav>);

}