import 'server-only'

import { unstable_cache } from 'next/cache'
import { allBlogs } from 'contentlayer/generated'
import { kv } from '@vercel/kv'
import { removeSlugPrefix } from 'helpers/slug.helpers'
import { BLOG_POST_VIEWS_KEY } from 'app/constants'

export type ViewsCount = Awaited<ReturnType<typeof getViewsCount>>

export const getViewsCount = unstable_cache(
  async () => {
    try {
      const allViews = await Promise.all(
        allBlogs.map(async (post) => {
          const cleanSlug = removeSlugPrefix(post.slug)

          const views = await kv.get<number>(BLOG_POST_VIEWS_KEY + cleanSlug)
          console.log({ views })

          return {
            slug: post.slug,
            count: views ?? 0,
          }
        }),
      )
      console.log({ allViews })
      return allViews
    } catch (error) {
      console.error({ error })
      return []
    }
  },
  [BLOG_POST_VIEWS_KEY],
  // https://youtu.be/VBlSe8tvg4U?si=2DU40VZwCQZ9P2qb&t=517
  {
    tags: [BLOG_POST_VIEWS_KEY],
  },
)

export const getViewCount = unstable_cache(
  async (slug: string) => {
    try {
      const cleanSlug = removeSlugPrefix(slug)

      const views = await kv.get<number>(BLOG_POST_VIEWS_KEY + cleanSlug)

      return views ?? 0
    } catch (error) {
      console.error({ error })
      return null
    }
  },
  [BLOG_POST_VIEWS_KEY + '/:slug'],
  // https://youtu.be/VBlSe8tvg4U?si=2DU40VZwCQZ9P2qb&t=517
  {
    tags: [BLOG_POST_VIEWS_KEY],
  },
)
