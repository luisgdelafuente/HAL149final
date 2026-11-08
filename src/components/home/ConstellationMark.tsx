import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useT } from '../../contexts/LanguageContext';
import { LOGO_BRIDGES, LOGO_NODES } from '../../utils/logoGeometry';

const SCALE = 0.55;
const CENTER: [number, number] = [358, 424];
const nodes = LOGO_NODES.map(([x, y]) => [(x - CENTER[0]) * SCALE + 300, (y - CENTER[1]) * SCALE + 300] as [number, number]);
/** Faint cross-links between columns give the mark its constellation reading. */
const CROSS_LINKS: [number, number][] = [
[0, 2],
[0, 3],
[1, 3],
[1, 4],
[5, 2],
[5, 3],
[6, 3],
[6, 4]];


/** Invisible full-size ring so each rotating group's bounding box is centered on the orbit center. */
function Pivot() {
  return <circle cx="300" cy="300" r="292" fill="none" stroke="none" />;
}

/** The HAL149 mark as a slowly orbiting constellation, inside faint orbital rings. */
export function ConstellationMark() {
  const { t } = useT();
  const reduced = useReducedMotion();
  const spin = (duration: number, direction = 1) =>
  reduced ? {} : { animate: { rotate: 360 * direction }, transition: { duration, repeat: Infinity, ease: 'linear' as const } };

  return (
    <svg viewBox="0 0 600 600" role="img" aria-label={t.hero.markLabel} className="h-auto w-full">
      <g fill="none" className="stroke-ink">
        <circle cx="300" cy="300" r="214" strokeOpacity="0.12" />
        <circle cx="300" cy="300" r="256" strokeOpacity="0.1" strokeDasharray="2 8" />
        <circle cx="300" cy="300" r="292" strokeOpacity="0.07" />
      </g>

      <motion.g {...spin(120)}>
        <Pivot />
        <circle cx="300" cy="44" r="4" className="fill-accent" />
        <circle cx="300" cy="44" r="10" className="fill-accent" opacity="0.15" />
      </motion.g>
      <motion.g {...spin(180, -1)}>
        <Pivot />
        <circle cx="86" cy="300" r="3" className="fill-accent2" />
      </motion.g>
      <motion.g {...spin(90)}>
        <Pivot />
        <path d="M 300 8 A 292 292 0 0 1 506 94" fill="none" className="stroke-accent" strokeOpacity="0.5" strokeWidth="1.25" />
      </motion.g>

      <motion.g
        animate={reduced ? undefined : { rotate: [-5, 5, -5] }}
        transition={reduced ? undefined : { duration: 26, repeat: Infinity, ease: 'easeInOut' }}>
        
        {CROSS_LINKS.map(([a, b]) =>
        <line key={`x-${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className="stroke-ink" strokeOpacity="0.14" strokeDasharray="3 6" />
        )}
        {LOGO_BRIDGES.map(([a, b]) =>
        <line key={`b-${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} className="stroke-accent" strokeOpacity="0.75" strokeWidth="2" />
        )}
        {nodes.map(([x, y], i) =>
        <g key={i}>
            <circle cx={x} cy={y} r="22" className="fill-bg stroke-ink" strokeOpacity="0.35" />
            <motion.circle
            cx={x}
            cy={y}
            className="fill-accent"
            initial={{ r: 7 }}
            animate={reduced ? { r: 7 } : { r: [6, 9, 6] }}
            transition={reduced ? undefined : { duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }} />
          
          </g>
        )}
      </motion.g>
    </svg>);

}