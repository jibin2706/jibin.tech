import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import { SITE_URL } from './src/utils/constant'

export default defineConfig({
	site: SITE_URL,
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Cormorant',
			cssVariable: '--font-cormorant-astro',
			weights: [300, 400, 500],
			styles: ['normal', 'italic'],
			fallbacks: ['serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Work Sans',
			cssVariable: '--font-work-sans-astro',
			weights: [300, 400, 500],
			styles: ['normal'],
			fallbacks: ['sans-serif'],
		},
	],
})
