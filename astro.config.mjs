// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://theagentcrew.site',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind(), sitemap()],
  redirects: {
    '/blog/how-we-run-8-agent-ai-team/': '/blog/how-we-run-7-agent-ai-team/',
  },
});
