import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL ?? 'https://qingsong-research.qsw-wei.workers.dev';

export default defineConfig({
  site,
  devToolbar: {
    enabled: false,
  },
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
