import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// For GitHub Pages project sites, set BASE_PATH to your repository name.
// Example: BASE_PATH=/japan-future-agenda SITE=https://fukatsu.github.io
const site = process.env.SITE ?? 'https://example.com';
const base = process.env.BASE_PATH ?? '/japan-future-agenda';

export default defineConfig({
  site,
  base,
  integrations: [mdx()],
});
