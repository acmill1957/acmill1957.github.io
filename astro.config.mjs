import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://acmill1957.github.io',
  // This is a user Pages repository, so it is served at the domain root.
  base: '/',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
});
