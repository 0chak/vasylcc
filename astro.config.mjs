import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build
export default defineConfig({
  site: 'https://vasyl.cc',
  devToolbar: { enabled: false },
  adapter: cloudflare()
});