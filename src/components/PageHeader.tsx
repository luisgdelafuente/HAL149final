import React from 'react';
import type { Crumb } from '../types/content';
import { Breadcrumbs } from './Breadcrumbs';

interface PageHeaderProps {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  /** Monospace telemetry line, e.g. a count or a date. */
  meta?: string;
  children?: React.ReactNode;
}

export function PageHeader({ crumbs, title, intro, meta, children }: PageHeaderProps) {
  return (
    <section className="shell pb-12 pt-10 md:pb-16 md:pt-14">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-8 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-ink md:text-6xl">{title}</h1>
      {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
      {meta && <p className="meta mt-6">{meta}</p>}
      {children}
    </section>);

}