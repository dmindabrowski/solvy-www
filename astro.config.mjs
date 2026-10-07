// @ts-check
import { defineConfig } from 'astro/config';

// The preview build on GitHub Pages sets both variables (see .github/workflows/pages.yml).
// Without them the site builds for the root of its own domain.
export default defineConfig({
	site: process.env.SITE_URL ?? 'https://solvy.pl',
	base: process.env.BASE_PATH ?? '/',
});
