import { defineConfig } from 'astro/config';

// When you buy the custom domain, change `site` to it (e.g. https://osakaindian.org)
// and put the bare domain in public/CNAME. Until then, use the org Pages URL.
export default defineConfig({
  site: 'https://osakaindian.github.io',
  base: '/oia/'
  // No `base` needed: this repo is meant to live at
  // <org>/<org>.github.io, which serves from the root path.
});
// site: 'https://osaka-indian-association.github.io'