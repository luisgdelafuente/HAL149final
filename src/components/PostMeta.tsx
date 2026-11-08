import React from 'react';
import { useT } from '../contexts/LanguageContext';
import type { Post } from '../types/content';
import { topicsById } from '../utils/content';
import { formatDate } from '../utils/format';

export function PostMeta({ post, showTopic = true }: {post: Post;showTopic?: boolean;}) {
  const { t, lang } = useT();
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
      {showTopic &&
      <>
          <span className="text-ink/75">{topicsById[post.topic][lang].title}</span>
          <span aria-hidden="true">·</span>
        </>
      }
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, lang)}</time>
      <span aria-hidden="true">·</span>
      <span>{t.post.minRead(post.readingTime)}</span>
    </p>);

}