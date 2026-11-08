import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

interface SectionHeaderProps {
  id: string;
  title: string;
  intro?: string;
  action?: {label: string;to: string;};
}

export function SectionHeader({ id, title, intro, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 id={id} className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-xl text-muted">{intro}</p>}
      </div>
      {action &&
      <Link
        to={action.to}
        className="group inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded text-sm text-accent-ink">
        
          {action.label}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      }
    </div>);

}