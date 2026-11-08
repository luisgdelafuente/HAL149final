import React from 'react';
import { brand } from '../../brand';
import { useT } from '../../contexts/LanguageContext';

/** Placeholder avatar: initial inside an orbital ring. Replace with a real photo before launch. */
export function AuthorAvatar({ size = 40 }: {size?: number;}) {
  const { lang } = useT();
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} role="img" aria-label={brand.author.avatarAlt[lang]} className="shrink-0">
      <circle cx="24" cy="24" r="23" className="fill-surface2 stroke-line" />
      <ellipse cx="24" cy="24" rx="21" ry="7" transform="rotate(-24 24 24)" fill="none" className="stroke-accent" strokeOpacity="0.6" />
      <text x="24" y="29.5" textAnchor="middle" className="fill-ink" style={{ fontFamily: 'var(--f-heading)', fontSize: 16, fontWeight: 600 }}>
        {brand.author.initials}
      </text>
    </svg>);

}