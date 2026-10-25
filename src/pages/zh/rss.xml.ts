import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { insightsByDate } from '../../data/insights';
import { site } from '../../data/site';
import { insightPath } from '../../i18n/utils';

export function GET(context: APIContext) {
  return rss({
    title: `${site.name} — 现场笔记`,
    description: '关于开放研究、双语写作，以及那些让方法变得可见的小工具的短札。',
    site: context.site ?? new URL(site.url),
    items: insightsByDate.map((post) => ({
      title: post.title.zh,
      pubDate: new Date(`${post.date}T00:00:00Z`),
      description: post.excerpt.zh,
      link: insightPath(post.slug, 'zh'),
      categories: post.tags.zh,
    })),
    customData: '<language>zh-cn</language>',
  });
}
