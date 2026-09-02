import { allBlogs } from 'contentlayer/generated'

// Drafts stay readable on localhost so they can be previewed while being
// written, but must never be served, linked or listed in the sitemap in
// production. Every consumer reads this list rather than `allBlogs` directly —
// filtering in one place and not the others is how drafts got indexed before.
// Always a fresh array, never `allBlogs` itself — callers sort it in place.
export const releasedBlogs = allBlogs.filter(
  (blog) => process.env.NODE_ENV === 'development' || !blog.draft,
)
