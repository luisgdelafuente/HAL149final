import React from 'react';
import { useT } from '../contexts/LanguageContext';
import type { PostType } from '../types/content';

const DOT: Record<PostType, string> = {
  essay: 'bg-accent',
  project: 'bg-accent2',
  note: 'bg-muted'
};

export function TypeBadge({ type }: {type: PostType;}) {
  const { t } = useT();
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/85">
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${DOT[type]}`} />
      {t.blog.types[type]}
    </span>);

}