import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import { SITE_URL } from './src/utils/constant'

export default defineConfig({
	site: SITE_URL,
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	redirects: {
		'/contact': '/info',
		'/uses': '/info',
		'/tags': '/blog',
	},
})
