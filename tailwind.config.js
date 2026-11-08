/** Colors and fonts resolve to CSS variables written at runtime from brand.ts (see utils/theme.ts). */
const c = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  darkMode: 'class',
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        bg: c('background'),
        surface: c('surface'),
        surface2: c('surface2'),
        line: c('border'),
        ink: c('text'),
        muted: c('textMuted'),
        accent: c('accent'),
        'accent-ink': c('accentText'),
        accent2: c('accent2'),
        'on-accent': c('onAccent'),
      },
      fontFamily: {
        display: ['var(--f-heading)'],
        sans: ['var(--f-body)'],
        mono: ['var(--f-mono)'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--c-accent) / 0.45), 0 0 28px -6px rgb(var(--c-accent) / 0.55)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
};
