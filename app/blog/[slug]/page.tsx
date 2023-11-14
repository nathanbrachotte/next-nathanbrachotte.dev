import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mdx } from 'app/components/mdx'
import { allBlogs } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'
import ViewCounter from '../view-counter'
import { getTimePerPost } from 'helpers/time'
import { getViewsCount } from 'lib/metrics'
import Image from 'next/image'

const findBlogPost = (slug: string) => {
  return allBlogs.find((post) => post.slug.includes(slug))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = findBlogPost(params.slug)

  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://nathanbrachotte.dev/blog/${slug}`,
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image && {
        images: [
          {
            url: image,
          },
          {
            url: image.replace('cover', 'cover-fallback'),
          },
        ],
      }),
    },
  }
}

function formatDate(date: string) {
  const currentDate = new Date()
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return `${fullDate} (${formattedDate})`
}

export default async function Blog({ params }) {
  const post = findBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  // const [
  // allViews,
  // tweets
  // ] = await Promise.all([
  // getViewsCount(),
  // getTweets(post.tweetIds),
  // ])

  const allViews = await getViewsCount()

  return (
    <section>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <div className="pb-8">
        <div className="relative h-80 w-full overflow-auto rounded-lg">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill={true}
              className="rounded-lg object-cover object-center"
            />
          ) : null}
        </div>
      </div>
      <h1 className="max-w-[650px] text-2xl font-bold tracking-tighter">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          📅 {formatDate(post.publishedAt)} - {getTimePerPost(post.body.raw)}
          {' - '}
          <ViewCounter allViews={allViews ?? []} slug={post.slug} trackView />
        </p>
      </div>
      <Mdx
        code={post.body.code}
        // tweets={tweets}
        tweets={[]}
      />
    </section>
  )
}
