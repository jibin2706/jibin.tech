import type { Config } from 'prettier'

const config: Config = {
	tabWidth: 4,
	semi: false,
	singleQuote: true,
	useTabs: true,
	printWidth: 120,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}

export default config
