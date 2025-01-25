export const TESTIMONIAL_TYPE = {
  CLIENT: 'clients',
  LEAD: 'leads',
  COLLEAGUE: 'colleagues',
}

export const TESTIMONIAL_TYPES = Object.values(TESTIMONIAL_TYPE)

export type TESTIMONIAL_TYPE = (typeof TESTIMONIAL_TYPES)[number]

export const BLOG_POST_VIEWS_KEY = 'blog_post_views_'

export const LINKS = {
  GITHUB: 'https://github.com/nathanbrachotte',
  BLUESKY: 'https://bsky.app/profile/nathanbrachotte.bsky.social',
  TWITTER: 'https://twitter.com/nathanbrachotte',
} as const
