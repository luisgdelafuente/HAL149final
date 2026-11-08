import React from 'react';
import { useT } from '../../contexts/LanguageContext';

/** Line-art portrait placeholder. Replace with a real photo (explicit width/height) before launch. */
export function PortraitPlaceholder() {
  const { t } = useT();
  return (
    <svg viewBox="0 0 400 480" width={400} height={480} role="img" aria-label={t.about.portraitAlt} className="block h-auto w-full">
      <rect width="400" height="480" className="fill-surface" />
      <g fill="none" className="stroke-ink">
        <circle cx="200" cy="230" r="170" strokeOpacity="0.08" />
        <circle cx="200" cy="230" r="130" strokeOpacity="0.1" strokeDasharray="2 7" />
      </g>
      <ellipse cx="200" cy="230" rx="185" ry="56" transform="rotate(-18 200 230)" fill="none" className="stroke-accent" strokeOpacity="0.55" />
      <circle cx="373" cy="176" r="5" className="fill-accent" />
      <g fill="none" className="stroke-ink" strokeOpacity="0.55" strokeWidth="1.5">
        <circle cx="200" cy="190" r="56" />
        <path d="M96 420c10-78 52-120 104-120s94 42 104 120" />
      </g>
      <text x="24" y="456" className="fill-muted" style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: 2 }}>
        PORTRAIT · 400×480
      </text>
    </svg>);

}