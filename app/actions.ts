'use server'

import { revalidatePath } from 'next/cache'
import { kv } from '@vercel/kv'

/**
 * Server actions
 */
export async function increment(slug: string) {
  try {
    const currentViews = await kv.get<number>(`blog_post_views_${slug}`)

    await kv.set(`blog_post_views_${slug}`, (currentViews ?? 0) + 1)

    revalidatePath(`/blog/${slug}`)
  } catch (error) {
    console.error(error)
  }
  return null
}
