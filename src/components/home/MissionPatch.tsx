import React from 'react';

/** Mission-patch badge drawn in thin line art. Rotation varies per project seed. */
export function MissionPatch({ code, seed }: {code: string;seed: number;}) {
  const tilt = -30 + seed % 60;
  return (
    <svg viewBox="0 0 72 72" width="64" height="64" aria-hidden="true" className="shrink-0">
      <circle cx="36" cy="36" r="34" fill="none" className="stroke-accent" strokeWidth="1.25" />
      <circle cx="36" cy="36" r="28" fill="none" className="stroke-ink" strokeOpacity="0.25" strokeDasharray="1.5 3" />
      <g transform={`rotate(${tilt} 36 36)`}>
        <ellipse cx="36" cy="36" rx="24" ry="8" fill="none" className="stroke-ink" strokeOpacity="0.5" />
        <circle cx="60" cy="36" r="2.5" className="fill-accent" />
      </g>
      <circle cx="36" cy="36" r="7" className="fill-surface2 stroke-accent" strokeWidth="1.25" />
      <text x="36" y="66" textAnchor="middle" className="fill-muted" style={{ fontFamily: 'var(--f-mono)', fontSize: 5.5, letterSpacing: 1 }}>
        {code}
      </text>
    </svg>);

}