import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://nathanbrachotte.dev/sitemap.xml',
    host: 'https://nathanbrachotte.dev',
  }
}
