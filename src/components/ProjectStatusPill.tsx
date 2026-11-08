import React from 'react';
import { useT } from '../contexts/LanguageContext';
import type { ProjectStatus } from '../types/content';

const DOT: Record<ProjectStatus, string> = {
  inOrbit: 'bg-accent hal-pulse',
  inDevelopment: 'bg-accent2',
  archived: 'bg-muted'
};

export function ProjectStatusPill({ status }: {status: ProjectStatus;}) {
  const { t } = useT();
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.12em] text-ink/85">
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${DOT[status]}`} />
      {t.projects.status[status]}
    </span>);

}