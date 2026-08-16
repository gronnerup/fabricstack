import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// RSS feed of the most recently added tools (SPEC §11.2 deferred item).
export const GET: APIRoute = async (context) => {
  const tools = (await getCollection('tools'))
    .sort((a, b) => b.data.added.valueOf() - a.data.added.valueOf())
    .slice(0, 50);

  return rss({
    title: 'fabricstack: recently added tools',
    description:
      'New tools added to the fabricstack catalog for Microsoft Fabric and Power BI developers.',
    site: context.site ?? 'https://fabricstack.dev',
    items: tools.map((t) => ({
      title: t.data.title,
      description: t.data.description,
      pubDate: t.data.added,
      link: `/tools/${t.id}`,
      categories: [t.data.category, ...t.data.tags],
    })),
  });
};
