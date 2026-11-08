import type { Lang } from '../brand';

export function formatDate(iso: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(`${iso}T12:00:00`));
}

/** Telemetry-style date: 2026.11.03 */
export function formatStardate(iso: string): string {
  return iso.split('-').join('.');
}

export function daysSince(iso: string, now: Date = new Date()): number {
  const then = new Date(`${iso}T00:00:00`);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.round((today.getTime() - then.getTime()) / 86400000));
}

export function pad2(n: number): string {
  return String(n).padStart(2, '0');
}