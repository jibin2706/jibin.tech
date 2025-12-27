// Site Information
export const SITE_URL = 'https://jibin.tech'
export const SITE_NAME = 'Jibin Thomas'
export const SITE_LOCALE = 'en_US'

// Meta Descriptions
export const META_DESCRIPTION =
	'Software engineer with 6+ years of experience building web applications. Specializing in React, Node.js, and TypeScript.'

// Social Media
export const SOCIAL_LINKS = {
	github: {
		url: 'https://github.com/jibin2706',
		username: 'jibin2706',
	},
	twitter: {
		url: 'https://x.com/real_jibin',
		username: 'real_jibin',
	},
	linkedin: {
		url: 'https://www.linkedin.com/in/jibin2706/',
		username: 'jibin2706',
	},
	stackoverflow: {
		url: 'https://stackoverflow.com/users/8102492/jibin-thomas',
		username: 'jibin-thomas',
	},
	email: {
		url: 'mailto:me@jibin.tech',
		display: 'me@jibin.tech',
	},
} as const

export const TWITTER_HANDLE = `@${SOCIAL_LINKS.twitter.username}`

// Theme Colors
export const THEME_COLOR_LIGHT = '#f9f9f9'
export const THEME_COLOR_DARK = '#1a1a1a'

// Analytics
export const GA_MEASUREMENT_ID = 'G-BW9N348CTR'
