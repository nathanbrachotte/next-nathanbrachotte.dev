import type { Metadata } from 'next'
import Link from 'next/link'
import { Blog, allBlogs } from 'contentlayer/generated'
import ViewCounter from './view-counter'
import { twMerge } from 'tailwind-merge'
import { parseISO, format } from 'date-fns'
// import { getViewsCount } from 'lib/metrics'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'All my blog posts, mostly talking about engineering challenges and things that happened to me',
}

const formatDate = (date: string) => {
  const dateObj = parseISO(date)
  const readableDate = format(dateObj, 'MMMM dd, yyyy')

  return readableDate
}

const BlogPostCard = ({
  blog: { title, summary, slug, publishedAt },
  index,
}: {
  blog: Blog
  index: number
}) => {
  const borderRadiant = [
    'from-gradient-purple via-transparent to-gradient-pink',
    'from-gradient-blue via-transparent to-gradient-cyan',
    'from-gradient-orange via-transparent to-gradient-yellow',
    'from-gradient-purple via-transparent to-gradient-orange',
  ]

  const animatedGradient = [
    'via-gradient-yellow',
    'via-gradient-orange',
    'via-gradient-cyan',
    'via-gradient-blue',
  ] as const

  // TODO: Add touch detection for animation to run on mobile - https://www.npmjs.com/package/react-touch
  return (
    <Link href={slug}>
      <div className="group mb-8 flex w-full cursor-pointer flex-col justify-between transition-all hover:scale-105 active:scale-95">
        <div
          className={twMerge(
            'relative mx-auto w-full overflow-hidden rounded-lg bg-gradient-to-r p-[1px] transition-all duration-300 ease-in-out',
            borderRadiant[index % borderRadiant.length],
          )}
        >
          <div
            className={twMerge(
              'visible absolute -bottom-96 -top-96 left-10 right-10',
              `bg-gradient-to-r from-transparent group-hover:visible group-hover:animate-spin-surround group-focus:visible ${
                animatedGradient[index % animatedGradient.length]
              } to-transparent`,
            )}
          />
          <div className="relative h-full rounded-lg bg-background p-6">
            <div className="mt-2 flex items-center justify-between">
              <div>
                <h2 className=" text-xl font-bold tracking-tighter">{title}</h2>
                <p className="font-md text-slate-300">{summary}</p>
              </div>
              <p className="ml-2 min-w-fit">{formatDate(publishedAt)}</p>
            </div>
          </div>
        </div>
      </div>
      {/* <ViewCounter
                allViews={allViews}
                slug={post.slug}
                trackView={false}
              /> */}
    </Link>
  )
}

export default async function BlogPage() {
  // const allViews = await getViewsCount();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">
        All my blog posts, mostly talking about engineering challenges 🧑‍💻 and
        things that happened to me 🪴
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post, index) => (
          <BlogPostCard key={post.slug} index={index} blog={post} />
        ))}
    </section>
  )
}
