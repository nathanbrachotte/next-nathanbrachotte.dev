'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { kv } from '@vercel/kv'
import { BLOG_POST_VIEWS_KEY } from 'app/constants'
import { removeSlugPrefix } from 'helpers/slug.helpers'
import { getViewCount } from 'lib/metrics'

/**
 * Server actions
 */
export async function increment(slug: string) {
  try {
    const cleanSlug = removeSlugPrefix(slug)
    const viewCount = await getViewCount(slug)

    await kv.set(BLOG_POST_VIEWS_KEY + cleanSlug, (viewCount ?? 0) + 1)

    revalidateTag(BLOG_POST_VIEWS_KEY)
  } catch (error) {
    console.error(error)
  }
  return null
}
