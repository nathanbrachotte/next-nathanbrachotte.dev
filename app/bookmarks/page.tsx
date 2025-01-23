import { Metadata } from 'next'
import { allBookmarks } from 'contentlayer/generated'
import { Mdx } from 'app/components/mdx'

export const metadata: Metadata = {
  title: 'Bookmarks',
  description:
    'A collection of useful resources and tools I frequently need to find from various devices, so I keep them here 😊',
}

export default async function BookmarksPage() {
  const bookmarks = allBookmarks[0]

  return (
    <div className="">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <h1 className="inline-block text-4xl font-bold lg:text-5xl">
          Bookmarks
        </h1>
        <p className="text-xl text-muted-foreground">{bookmarks.description}</p>

        <hr className="w-full border-border" />

        <Mdx code={bookmarks.body.code} />
      </div>
    </div>
  )
}
