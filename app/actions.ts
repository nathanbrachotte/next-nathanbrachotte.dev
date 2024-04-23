'use server'

import { revalidatePath } from 'next/cache'
import { kv } from '@vercel/kv'
import { BLOG_POST_VIEWS_KEY } from 'app/constants'
import { removeSlugPrefix } from 'helpers/slug.helpers'

/**
 * Server actions
 */
export async function increment(slug: string) {
  try {
    const cleanSlug = removeSlugPrefix(slug)

    console.log({ slug, cleanSlug })
    const currentViews = await kv.get<number>(BLOG_POST_VIEWS_KEY + cleanSlug)
    // const fakeVi = await kv.get<number>(
    //   BLOG_POST_VIEWS_KEY + `/typesafety-for-the-rest-of-us`,
    // )
    // console.log({ fakeVi })
    console.log({ currentViews })
    await kv.set(BLOG_POST_VIEWS_KEY + cleanSlug, (currentViews ?? 0) + 1)

    revalidatePath(`/blog/${cleanSlug}`)
    revalidatePath(`/blog`)
    console.log(`Revalidated: /blog and /blog/${cleanSlug}`)
  } catch (error) {
    console.error(error)
  }
  return null
}
