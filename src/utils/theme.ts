import { brand, ThemeName, ColorSet } from '../brand';

export const THEME_STORAGE_KEY = 'hal149-theme';

function hexToRgbChannels(hex: string): string {
  const n = parseInt(hex.replace('#', ''), 16);
  return `${n >> 16 & 255} ${n >> 8 & 255} ${n & 255}`;
}

export function getInitialTheme(): ThemeName {
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch {

    /* storage unavailable — fall back to default */}
  return 'dark';
}

/** Writes brand colors + fonts to CSS variables and sets the theme class. Safe to call before first paint. */
export function applyTheme(theme: ThemeName): void {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
  root.style.colorScheme = theme;

  const colors = brand.colors[theme];
  (Object.keys(colors) as (keyof ColorSet)[]).forEach((key) => {
    root.style.setProperty(`--c-${key}`, hexToRgbChannels(colors[key]));
  });

  root.style.setProperty('--f-heading', `"${brand.fonts.heading}", ui-sans-serif, system-ui, sans-serif`);
  root.style.setProperty('--f-body', `"${brand.fonts.body}", ui-sans-serif, system-ui, sans-serif`);
  root.style.setProperty('--f-mono', `"${brand.fonts.mono}", ui-monospace, SFMono-Regular, Menlo, monospace`);

  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.appendChild(meta);
  }
  meta.content = colors.background;
}

export function readCssColor(name: keyof ColorSet): string {
  return getComputedStyle(document.documentElement).getPropertyValue(`--c-${name}`).trim();
}