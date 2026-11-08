import React, { useMemo } from 'react';
import { seededRandom } from '../utils/random';
import { pad2 } from '../utils/format';

interface CoverArtProps {
  seed: number;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

/** Generated deep-field cover: solid surface, star dust, orbits and a constellation line. Theme-aware. */
export function CoverArt({ seed, alt, className = '', width = 1200, height = 675 }: CoverArtProps) {
  const art = useMemo(() => {
    const r = seededRandom(seed * 9973 + 17);
    const stars = Array.from({ length: 80 }, () => ({ x: r() * width, y: r() * height, s: r() * 1.8 + 0.4, o: r() * 0.55 + 0.15 }));
    const cx = width * (0.3 + r() * 0.4);
    const cy = height * (0.35 + r() * 0.3);
    const orbits = Array.from({ length: 3 }, (_, i) => ({
      rx: 170 + i * 120 + r() * 60,
      ry: 55 + i * 42 + r() * 30,
      rot: -25 + r() * 50,
      sat: r() * Math.PI * 2
    }));
    const planet = 26 + r() * 44;
    const points = Array.from({ length: 5 }, () => [width * (0.06 + r() * 0.88), height * (0.1 + r() * 0.62)] as [number, number]).sort(
      (a, b) => a[0] - b[0]
    );
    return { stars, cx, cy, orbits, planet, points };
  }, [seed, width, height]);

  const label = `HAL·${String(seed).padStart(3, '0')}   RA ${pad2(seed % 24)}h${pad2(seed * 7 % 60)}m   DEC ${seed % 2 ? '+' : '−'}${pad2(seed * 3 % 90)}°`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid slice"
      className={`block h-auto w-full ${className}`}>
      
      <rect width={width} height={height} className="fill-surface2" />
      {art.stars.map((s, i) =>
      <circle key={i} cx={s.x} cy={s.y} r={s.s} className="fill-ink" opacity={s.o * 0.7} />
      )}
      <g transform={`translate(${art.cx} ${art.cy})`}>
        {art.orbits.map((o, i) =>
        <g key={i} transform={`rotate(${o.rot})`}>
            <ellipse
            rx={o.rx}
            ry={o.ry}
            fill="none"
            className={i === 1 ? 'stroke-accent2' : 'stroke-ink'}
            strokeOpacity={i === 1 ? 0.7 : 0.18}
            strokeWidth={i === 1 ? 1.5 : 1.25}
            strokeDasharray={i === 1 ? '3 9' : undefined} />
          
            <circle cx={o.rx * Math.cos(o.sat)} cy={o.ry * Math.sin(o.sat)} r={i === 0 ? 5 : 3.5} className={i === 0 ? 'fill-accent' : 'fill-ink'} opacity={i === 0 ? 1 : 0.6} />
          </g>
        )}
        <circle r={art.planet} className="fill-bg stroke-accent" strokeWidth={2} />
        <circle r={art.planet * 0.42} className="fill-accent" opacity={0.16} />
      </g>
      <polyline points={art.points.map((p) => p.join(',')).join(' ')} fill="none" className="stroke-accent" strokeWidth={1.25} strokeOpacity={0.6} />
      {art.points.map(([x, y], i) =>
      <circle key={i} cx={x} cy={y} r={3.5} className="fill-accent" />
      )}
      <text x={36} y={height - 34} className="fill-muted" style={{ fontFamily: 'var(--f-mono)', fontSize: 20, letterSpacing: 3 }}>
        {label}
      </text>
    </svg>);

}