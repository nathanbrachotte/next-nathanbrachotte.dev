'use server'

import { revalidateTag } from 'next/cache'
import { kv } from '@vercel/kv'
import { BLOG_POST_VIEWS_KEY } from 'app/constants'
import { removeSlugPrefix } from 'helpers/slug.helpers'

/**
 * Server actions
 */
export async function increment(slug: string) {
  try {
    const cleanSlug = removeSlugPrefix(slug)

    const currentViews = await kv.get<number>(BLOG_POST_VIEWS_KEY + cleanSlug)
    await kv.set(BLOG_POST_VIEWS_KEY + cleanSlug, (currentViews ?? 0) + 1)

    revalidateTag(BLOG_POST_VIEWS_KEY)
  } catch (error) {
    console.error(error)
  }
  return null
}
