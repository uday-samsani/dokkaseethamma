// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: process.env.PUBLIC_SITE_URL || 'https://dokkaseethamma.org',
  output: 'static',

  prefetch: {
    prefetchAll: true,
  },

  image: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  adapter: cloudflare(),
});