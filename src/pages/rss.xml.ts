import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { insightsByDate } from '../data/insights';
import { site } from '../data/site';
import { insightPath } from '../i18n/utils';

export function GET(context: APIContext) {
  return rss({
    title: `${site.name} — Field notes`,
    description: 'Short essays on open research, bilingual writing, and small tools.',
    site: context.site ?? new URL(site.url),
    items: insightsByDate.map((post) => ({
      title: post.title.en,
      pubDate: new Date(`${post.date}T00:00:00Z`),
      description: post.excerpt.en,
      link: insightPath(post.slug, 'en'),
      categories: post.tags.en,
    })),
    customData: '<language>en</language>',
  });
}
