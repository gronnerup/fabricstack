import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Public, read-only JSON export of the catalog (SPEC §11.2).
// Built as a static file at /api/tools.json. CORS is set via public/_headers
// so browser apps can fetch it cross-origin.
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://fabricstack.dev');

  const tools = (await getCollection('tools'))
    .sort((a, b) => a.data.title.localeCompare(b.data.title))
    .map((t) => {
      const { added, ...rest } = t.data;
      return {
        slug: t.id,
        ...rest,
        added: added.toISOString().slice(0, 10),
        href: new URL(`/tools/${t.id}`, base).href,
      };
    });

  const body = {
    name: 'fabricstack catalog',
    url: base.href,
    license: 'CC-BY-4.0',
    count: tools.length,
    tools,
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};
