import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL, STACKOVERFLOW_URL, TWITTER_URL, BLOG_RSS_URL } from './links'

export const aboutSchema = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  name: 'Jibin Thomas',
  gender: 'male',
  url: 'https://jibin.tech',
  image: 'https://drive.google.com/uc?id=1DWBWax_DJCH-oetqBRxYzWGul2ZDcTak',
  alumniOf: 'Wilson College',
  jobTitle: 'Software Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'Pepper Content',
  },
  sameAs: [GITHUB_URL, LINKEDIN_URL, TWITTER_URL, STACKOVERFLOW_URL, INSTAGRAM_URL, BLOG_RSS_URL],
}
