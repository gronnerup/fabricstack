// Build-time Open Graph image generation.
//
// Renders a branded 1200×630 social-share card (logo + wordmark + tagline) to
// public/og-image.png using the same stacked-layers mark as the site, with
// committed Geist TTFs so output is deterministic locally and in CI.
//
// Run automatically before `astro build` via the npm "prebuild" hook.

import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'node:fs';

const W = 1200;
const H = 630;

// The stacked-layers logo paths (0–48 viewBox), reused from Logo.astro.
const logo = `
  <g transform="translate(96 150) scale(2.6)">
    <path d="M8 35 L24 43 L24 46.5 L8 38.5 Z" fill="#3F9433" />
    <path d="M24 43 L40 35 L40 38.5 L24 46.5 Z" fill="#327A28" />
    <path d="M24 27 L40 35 L24 43 L8 35 Z" fill="#57B947" />
    <path d="M8 25 L24 33 L24 36.5 L8 28.5 Z" fill="#1E86B8" />
    <path d="M24 33 L40 25 L40 28.5 L24 36.5 Z" fill="#176E97" />
    <path d="M24 17 L40 25 L24 33 L8 25 Z" fill="#2FA9E0" />
    <path d="M8 15 L24 23 L24 26.5 L8 18.5 Z" fill="#D9A904" />
    <path d="M24 23 L40 15 L40 18.5 L24 26.5 Z" fill="#B98E03" />
    <path d="M24 7 L40 15 L24 23 L8 15 Z" fill="#F4C20D" />
  </g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="glow" cx="14%" cy="18%" r="65%">
      <stop offset="0" stop-color="#0d9488" stop-opacity="0.20" />
      <stop offset="1" stop-color="#0d9488" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#09090b" />
  <rect width="${W}" height="${H}" fill="url(#glow)" />

  ${logo}

  <text x="248" y="252" font-family="Geist" font-weight="600" font-size="96" fill="#fafafa">fabricstack<tspan fill="#71717a" font-weight="400">.dev</tspan></text>

  <text x="100" y="404" font-family="Geist" font-weight="400" font-size="46" fill="#a1a1aa">The catalog of tools for</text>
  <text x="100" y="468" font-family="Geist" font-weight="600" font-size="46"><tspan fill="#2dd4bf">Microsoft Fabric</tspan><tspan fill="#a1a1aa" font-weight="400"> developers</tspan></text>

  <rect x="100" y="540" width="56" height="5" rx="2.5" fill="#2dd4bf" />
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: W },
  background: '#09090b',
  font: {
    fontFiles: ['scripts/assets/Geist-Regular.ttf', 'scripts/assets/Geist-SemiBold.ttf'],
    loadSystemFonts: false,
    defaultFontFamily: 'Geist',
  },
});

const png = resvg.render().asPng();
writeFileSync('public/og-image.png', png);
console.log(`og-image: wrote public/og-image.png (${W}×${H}, ${png.byteLength} bytes)`);
