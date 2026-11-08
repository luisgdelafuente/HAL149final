import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { brand } from '../brand';
import { useT } from '../contexts/LanguageContext';
import { SocialIcon, SocialNetwork } from './SocialIcon';
import { iconBtn } from '../utils/ui';

const NETWORKS = Object.keys(brand.social) as SocialNetwork[];

export function SocialLinks({ variant = 'icons' }: {variant?: 'icons' | 'list';}) {
  const { t } = useT();

  if (variant === 'list') {
    return (
      <ul className="space-y-1">
        {NETWORKS.map((n) =>
        <li key={n}>
            <a
            href={brand.social[n].url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-3 rounded-lg py-2 text-sm text-ink transition-colors duration-150 hover:text-accent-ink">
            
              <span className="flex items-center gap-3">
                <SocialIcon network={n} className="h-4 w-4 text-muted transition-colors duration-150 group-hover:text-accent-ink" />
                {brand.social[n].label}
                <span className="sr-only">({t.a11y.newTab})</span>
              </span>
              <ArrowUpRightIcon className="h-4 w-4 text-muted transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </li>
        )}
      </ul>);

  }

  return (
    <ul className="flex items-center gap-2">
      {NETWORKS.map((n) =>
      <li key={n}>
          <a
          href={brand.social[n].url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${brand.social[n].label} (${t.a11y.newTab})`}
          className={iconBtn}>
          
            <SocialIcon network={n} />
          </a>
        </li>
      )}
    </ul>);

}