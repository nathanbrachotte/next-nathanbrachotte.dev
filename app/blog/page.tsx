import type { Metadata } from 'next'
import Link from 'next/link'
import { allBlogs } from 'contentlayer/generated'
// import ViewCounter from './view-counter'
import { twMerge } from 'tailwind-merge'
import { parseISO, format } from 'date-fns'
import { getTimePerPost } from 'helpers/time'
import { getViewsCount } from 'lib/metrics'
import ViewCounter from 'app/blog/view-counter'
import Image from 'next/image'
import { PageTitle } from 'app/components/PageTitle'
// import { getViewsCount } from 'lib/metrics'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Commit by commit: My evolution as a Software Engineer 🚀',
}

const formatDate = (date: string) => {
  const dateObj = parseISO(date)
  const readableDate = format(dateObj, 'MMMM dd, yyyy')

  return readableDate
}

const BlogPostCard = ({
  blog,
  index,
  allViews,
}: {
  blog: (typeof allBlogs)[number]
  index: number
  allViews: Awaited<ReturnType<typeof getViewsCount>>
}) => {
  const { title, summary, slug, publishedAt, body, image } = blog

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
          <div className="relative flex h-full flex-col rounded-lg bg-background hover:rounded-md md:flex-row">
            <div className="relative h-36 w-full md:h-auto md:w-2/5">
              {image ? (
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="max-h-64 rounded-lg object-cover"
                />
              ) : null}
            </div>
            <div className="w-full p-4">
              <div className="flex flex-col justify-between space-y-2">
                <h2 className="text-xl font-bold tracking-tighter">{title}</h2>
                <p className="font-md text-neutral-300">{summary}</p>
                <div className="flex min-w-fit flex-row justify-between pt-2 text-neutral-400">
                  <p>📅 {formatDate(publishedAt)}</p>
                  <p className="text-neutral-400">{getTimePerPost(body.raw)}</p>
                  <ViewCounter
                    allViews={allViews}
                    slug={slug}
                    trackView={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const releasedBlogs =
  process.env.NODE_ENV === 'development'
    ? allBlogs
    : allBlogs.filter((blog) => !blog.draft)

// TODO: Vercel analytics
export default async function BlogPage() {
  const allViews = await getViewsCount()

  return (
    <section>
      <PageTitle>{metadata.description}</PageTitle>
      {releasedBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post, index) => (
          <BlogPostCard
            key={post.slug}
            index={index}
            blog={post}
            allViews={allViews}
          />
        ))}
    </section>
  )
}
