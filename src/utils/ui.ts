/** Shared class recipes for interactive elements, so states stay consistent site-wide. */

export const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export const btnPrimary =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-[box-shadow,transform] duration-150 ease-out hover:shadow-glow active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60';

export const btnSecondary =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-[border-color,background-color] duration-150 ease-out hover:border-accent/60 hover:bg-surface active:scale-[0.98]';

export const btnGhostSm =
'inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-muted transition-colors duration-150 hover:text-ink';

export const iconBtn =
'grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-[color,border-color] duration-150 hover:border-muted hover:text-ink';

export const fieldBase =
'w-full rounded-xl border bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] duration-150 ease-out focus:outline-none focus-visible:outline-none focus:border-accent focus:shadow-glow';

export function chipClass(active: boolean): string {
  return `inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-[color,border-color,background-color] duration-150 ${
  active ? 'border-accent/70 bg-accent/10 text-ink' : 'border-line text-muted hover:border-muted hover:text-ink'}`;

}

export const textLink =
'text-accent-ink underline decoration-accent/40 underline-offset-4 transition-[text-decoration-color] duration-150 hover:decoration-accent';

export const COOKIE_SETTINGS_EVENT = 'hal149:cookie-settings';