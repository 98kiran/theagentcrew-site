// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://theagentcrew.site',
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/blog/how-we-run-8-agent-ai-team/': '/blog/how-we-run-7-agent-ai-team/',
  },
});
