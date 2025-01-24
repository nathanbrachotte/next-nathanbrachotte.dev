import { Metadata } from 'next'
import { allBookmarks } from 'contentlayer/generated'
import { Mdx } from 'app/components/mdx'
import { H1 } from 'app/components/Typography'

export async function generateMetadata(): Promise<Metadata> {
  const bookmark = allBookmarks[0]
  if (!bookmark) {
    return {}
  }

  return {
    title: bookmark.title,
    description: bookmark.description,
  }
}

export default async function BookmarksPage() {
  const bookmarks = allBookmarks[0]

  return (
    <div className="">
      <div className="flex flex-col items-start">
        <H1>Bookmarks</H1>
        <p className="text-xl text-muted-foreground">{bookmarks.description}</p>

        <hr className="mt-8 w-full border-border" />

        <Mdx code={bookmarks.body.code} />
      </div>
    </div>
  )
}
