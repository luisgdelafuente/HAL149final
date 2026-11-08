import React from 'react';
import { useT } from '../../contexts/LanguageContext';
import type { Post } from '../../types/content';
import { ProjectStatusPill } from '../ProjectStatusPill';

export function MissionBrief({ post }: {post: Post;}) {
  const { t, lang } = useT();
  const project = post.project;
  if (!project) return null;
  const brief = project.brief[lang];
  const rows: {label: string;value: React.ReactNode;}[] = [
  { label: t.post.brief.objective, value: brief.objective },
  { label: t.post.brief.role, value: brief.role },
  { label: t.post.brief.stack, value: <span className="font-mono text-[13px]">{brief.stack}</span> },
  { label: t.post.brief.status, value: <ProjectStatusPill status={project.status} /> },
  { label: t.post.brief.outcome, value: brief.outcome }];


  return (
    <section aria-labelledby="mission-brief" className="shell pb-10">
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="flex items-center justify-between border-b border-line px-6 py-3">
          <h2 id="mission-brief" className="meta text-accent-ink">
            {t.post.missionBrief}
          </h2>
          <span className="meta">{project.code}</span>
        </div>
        <dl className="grid divide-y divide-line md:grid-cols-5 md:divide-x md:divide-y-0">
          {rows.map((r) =>
          <div key={r.label} className="px-6 py-5">
              <dt className="meta">{r.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{r.value}</dd>
            </div>
          )}
        </dl>
      </div>
    </section>);

}