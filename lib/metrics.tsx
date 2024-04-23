import 'server-only'

import { unstable_cache } from 'next/cache'
import { allBlogs } from 'contentlayer/generated'
import { kv } from '@vercel/kv'

export const getViewsCount = unstable_cache(async () => {
  try {
    const allViews = await Promise.all(
      allBlogs.map(async (post) => {
        const views = await kv.get<number>(`blog_post_views_${post.slug}`)
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
})
