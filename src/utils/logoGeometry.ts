/** Geometry of the HAL149 mark, traced from the master artwork (units = artwork px). */

export const LOGO_NODE_RADIUS = 97;

export const LOGO_NODES: [number, number][] = [
[167, 283],
[167, 565],
[358, 143],
[358, 424],
[358, 705],
[549, 283],
[549, 565]];


/** Pairs of node indexes joined by a rounded bridge. */
export const LOGO_BRIDGES: [number, number][] = [
[0, 1],
[2, 3],
[3, 4],
[5, 6]];


/** Concave "neck" between two vertically aligned circles. */
export function bridgePath(x: number, y1: number, y2: number): string {
  const ym = (y1 + y2) / 2;
  return `M${x - 67} ${y1 + 70} Q${x - 7} ${ym} ${x - 67} ${y2 - 70} L${x + 67} ${y2 - 70} Q${x + 7} ${ym} ${x + 67} ${y1 + 70} Z`;
}

/** Stroke paths for the HAL149 wordmark (stroke width 44). The A is drawn as Λ, without a crossbar. */
export const WORDMARK_PATHS: string[] = [
'M778 302V550M950 302V550M778 425H950',
'M1031 550L1112 345Q1130 302 1148 302Q1166 302 1183 345L1260 550',
'M1326 302V470Q1326 528 1392 528H1494',
'M1517 324H1545Q1577 324 1577 356V550',
'M1836 550V350Q1836 324 1810 324H1775Q1758 324 1744 342L1676 424Q1660 444 1664 460Q1670 478 1702 478H1858',
'M1936 528H2025Q2105 528 2105 420Q2105 324 2025 324H1992Q1930 324 1930 380Q1930 435 1992 435H2105'];


export const MARK_VIEWBOX = '60 36 596 776';
export const FULL_VIEWBOX = '60 36 2090 776';