import React from 'react';
import { brand } from '../brand';
import {
  FULL_VIEWBOX,
  LOGO_BRIDGES,
  LOGO_NODES,
  LOGO_NODE_RADIUS,
  MARK_VIEWBOX,
  WORDMARK_PATHS,
  bridgePath } from
'../utils/logoGeometry';

interface LogoProps {
  /** 'full' = mark + wordmark, 'mark' = constellation mark only (favicon, mobile header). */
  variant?: 'full' | 'mark';
  className?: string;
  /** Hide from assistive tech when a parent element already provides the label. */
  decorative?: boolean;
}

/** HAL149 logo drawn with currentColor so it inverts with the theme. */
export function Logo({ variant = 'full', className = '', decorative = false }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={variant === 'full' ? FULL_VIEWBOX : MARK_VIEWBOX}
      className={className}
      fill="currentColor"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : brand.name}
      aria-hidden={decorative ? true : undefined}
      focusable="false">
      
      <g>
        {LOGO_NODES.map(([x, y]) =>
        <circle key={`${x}-${y}`} cx={x} cy={y} r={LOGO_NODE_RADIUS} />
        )}
        {LOGO_BRIDGES.map(([a, b]) =>
        <path key={`${a}-${b}`} d={bridgePath(LOGO_NODES[a][0], LOGO_NODES[a][1], LOGO_NODES[b][1])} />
        )}
      </g>
      {variant === 'full' &&
      <g fill="none" stroke="currentColor" strokeWidth={44}>
          {WORDMARK_PATHS.map((d) =>
        <path key={d} d={d} />
        )}
        </g>
      }
    </svg>);

}