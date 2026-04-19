import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import cloudflare from '@astrojs/cloudflare'
import { SITE_URL } from './src/utils/constant'

export default defineConfig({
	site: SITE_URL,
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	redirects: {
		'/contact': '/info',
		'/uses': '/',
		'/work': '/info',
		'/tags': '/blog',
		'/tags/*': '/blog',
		'/detecting-dark-mode-in-your-web-apps': '/blog/detecting-dark-mode-in-your-web-apps',
		'/getting-started-with-git-part-1': '/blog/getting-started-with-git-part-1',
		'/difference-between-forEach-and-map-in-javascript': '/blog/difference-between-foreach-and-map-in-javascript',
		'/masonry-layout-using-css': '/blog/masonry-layout-using-css',
		'/indexable-object-in-typescript': '/blog/indexable-object-in-typescript',
		'/integrating-payment-in-android-app': '/blog/integrating-payment-in-android-app',
		'/udacity-full-stack-nanodegree': '/blog/udacity-full-stack-nanodegree',
		'/dispatching-redux-actions-from-getInitialProps': '/blog/dispatching-redux-actions-from-getinitialprops',
		'/monorepo-with-create-react-app': '/blog/monorepo-with-create-react-app',
		'/connecting-nodemcu-to-firebase': '/blog/connecting-nodemcu-to-firebase',
		'/preserve-prerendering-in-nextjs-when-using-redux': '/blog/preserve-prerendering-in-nextjs-when-using-redux',
		'/scheduled-deployments-using-github-action': '/blog/scheduled-deployments-using-github-action',
		'/custom-domain-with-github-pages': '/blog/custom-domain-with-github-pages',
		'/destructuring-assignment-of-objects-in-javascipt': '/blog/destructuring-assignment-of-objects-in-javascipt',
		'/building-pc': '/blog/building-pc',
		'/nextjs%20redux': '/blog/nextjs+redux',
		'/blog/nextjs%20redux': '/blog/nextjs+redux',
		'/blog/nextjsredux': '/blog/nextjs+redux',
		'/blog/dispatching-redux-actions-from-getInitialProps': '/blog/dispatching-redux-actions-from-getinitialprops',
		'/blog/difference-between-forEach-and-map-in-javascript':
			'/blog/difference-between-foreach-and-map-in-javascript',
		'/blog/vs-code-extensions-to-make-you-more-productive/*':
			'/blog/vs-code-extensions-to-make-you-more-productive',
	},
	adapter: cloudflare(),
})
