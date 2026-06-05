// Build-time favicon caching (SPEC §7).
//
// Reads every tool entry's `url`, fetches the site's favicon once per unique
// host into /public/favicons, and writes a host -> filename manifest that
// ToolCard reads. Cached files are committed to the repo, so CI builds need no
// network for favicons and there is no runtime dependency on a third party.
//
// Run automatically before `astro build` via the npm "prebuild" hook.

import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const TOOLS_DIR = 'src/content/tools';
const OUT_DIR = 'public/favicons';
const MANIFEST = 'src/data/favicons.json';

const files = (await readdir(TOOLS_DIR)).filter((f) => f.endsWith('.md'));

// Collect unique hosts from each entry's `url:` frontmatter line.
const hosts = new Set();
for (const file of files) {
  const text = await readFile(path.join(TOOLS_DIR, file), 'utf8');
  const match = text.match(/^url:\s*(\S+)/m);
  if (!match) continue;
  try {
    hosts.add(new URL(match[1].trim()).hostname);
  } catch {
    /* skip malformed URLs */
  }
}

await mkdir(OUT_DIR, { recursive: true });
await mkdir(path.dirname(MANIFEST), { recursive: true });

let manifest = {};
if (existsSync(MANIFEST)) {
  try {
    manifest = JSON.parse(await readFile(MANIFEST, 'utf8'));
  } catch {
    manifest = {};
  }
}

// Providers tried in order until one returns an icon. `ext` is the file
// extension to save under (browsers render either fine).
const providers = [
  { ext: 'png', url: (h) => `https://www.google.com/s2/favicons?domain=${encodeURIComponent(h)}&sz=64` },
  { ext: 'ico', url: (h) => `https://icons.duckduckgo.com/ip3/${encodeURIComponent(h)}.ico` },
];

let fetched = 0;
let skipped = 0;
let missed = 0;

for (const host of [...hosts].sort()) {
  // Already cached under any known extension?
  const existing = ['png', 'ico'].map((e) => `${host}.${e}`).find((f) => existsSync(path.join(OUT_DIR, f)));
  if (existing) {
    manifest[host] = existing;
    skipped++;
    continue;
  }

  let saved = null;
  for (const provider of providers) {
    try {
      const res = await fetch(provider.url(host));
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.byteLength < 100) continue; // empty / 1px placeholder
      const filename = `${host}.${provider.ext}`;
      await writeFile(path.join(OUT_DIR, filename), buf);
      saved = filename;
      break;
    } catch {
      /* try next provider */
    }
  }

  if (saved) {
    manifest[host] = saved;
    fetched++;
    console.log(`  cached ${host} -> ${saved}`);
  } else {
    console.warn(`  miss  ${host}`);
    missed++;
  }
}

// Drop manifest entries whose cached file no longer exists.
for (const host of Object.keys(manifest)) {
  if (!existsSync(path.join(OUT_DIR, manifest[host]))) delete manifest[host];
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(
  `favicons: ${Object.keys(manifest).length} mapped (${fetched} fetched, ${skipped} cached, ${missed} missed)`,
);
