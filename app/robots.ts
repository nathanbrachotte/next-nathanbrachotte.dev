import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: 'https://nathanbrachotte.dev/sitemap.xml',
    host: 'https://nathanbrachotte.dev',
  }
}
