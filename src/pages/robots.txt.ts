import type { APIContext } from 'astro';

export function GET(context: APIContext) {
  const site = context.site ?? new URL('https://qingsong-research.example.workers.dev');
  const sitemap = new URL('sitemap-index.xml', site);

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemap.toString()}\n`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
