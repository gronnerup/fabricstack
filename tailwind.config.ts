import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';

/**
 * fabricstack design system (see SPEC §6).
 *
 * - Neutral base: zinc (50–950)
 * - Accent: teal-600 light / teal-400 dark. Exposed as the semantic `accent`
 *   color, backed by a CSS variable that flips with `prefers-color-scheme`
 *   (see global.css), so a single utility like `text-accent` is correct in
 *   both themes.
 * - Dark mode follows the user's system preference (`media`).
 * - Microsoft Fabric purple is deliberately avoided.
 */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        zinc: colors.zinc,
        // Semantic accent — resolves to teal-600 (light) / teal-400 (dark)
        // via the --color-accent variable defined in global.css.
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          contrast: 'rgb(var(--color-accent-contrast) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Geist Variable', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono Variable', 'Geist Mono', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        // Max content width ~1280px (SPEC §6.3)
        content: '80rem',
      },
    },
  },
  plugins: [typography],
} satisfies Config;
