import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mdx } from 'app/components/mdx'
import { allBlogs } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'
import ViewCounter from '../view-counter'
import { getTimePerPost } from 'helpers/time'
import { getViewsCount } from 'lib/metrics'
import Image from 'next/image'
import { TwitterButton } from 'app/blog/[slug]/TwitterButton'
import { GradientLink } from 'app/components/GradientLink'
import { FollowTwitterButton } from 'app/blog/[slug]/FollowTwitterButton'
import { NateDescription } from 'app/components/NateDescription'
import { Separator } from '@/components/ui/separator'
import { formatDistanceToNow } from 'date-fns'
import { getDateWithDistance } from 'helpers/dates'
import { Button } from '@/components/ui/button'

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

  const coverFallback = image
    ? image.replace('cover.webp', 'cover-fallback.png')
    : ''

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
          {
            url: coverFallback,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      creator: '@nathanbrachotte',
      description,
      ...(image && {
        images: [
          { url: image, width: 1200, height: 630, alt: 'Your alt text' },
          {
            url: coverFallback,
            width: 1200,
            height: 630,
            alt: 'Your alt text',
          },
        ],
      }),
    },
  }
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
  const hasFetchedViews = allViews.length > 0

  return (
    <section>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <div className="pb-8">
        <div className="relative h-80 w-full overflow-auto rounded-lg">
          {post.image ? (
            <Image
              priority
              src={post.image}
              alt={post.title}
              fill={true}
              className="rounded-lg object-cover object-center"
            />
          ) : null}
        </div>
      </div>
      <div className="flex">
        <div className="bg-blue-300">
          <h1 className="max-w-[650px] text-2xl font-bold tracking-tighter">
            <Balancer>{post.title}</Balancer>
          </h1>
          <div className="mt-2 flex max-w-[650px] items-center justify-between text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              📅 {getDateWithDistance(post.publishedAt)} -{' '}
              {getTimePerPost(post.body.raw)}
              {hasFetchedViews ? (
                <>
                  {' - '}
                  <ViewCounter
                    allViews={allViews ?? []}
                    slug={post.slug}
                    trackView
                  />
                </>
              ) : null}
            </p>
          </div>
        </div>
        <Button variant={'destructive'}>ndkls</Button>
      </div>
      <Mdx
        code={post.body.code}
        // tweets={tweets}
        tweets={[]}
      />

      <div className="flex flex-col pt-14">
        <div className="flex w-full flex-row flex-wrap justify-between">
          <div className="pt-2">
            <FollowTwitterButton />
          </div>
          <div className="pt-2">
            <TwitterButton title={post.title} slug={post.slug} />
          </div>
          <div className="pt-2">
            <GradientLink href="https://github.com/nathanbrachotte/next-nathanbrachotte.dev">
              Suggest an edit
            </GradientLink>
          </div>
        </div>
        <Separator className="mb-0 mt-6 pt-[1px]" />
        <div className="flex flex-col justify-center px-0 py-4 sm:flex-row sm:px-10">
          <div className="p-4">
            <Image
              alt="picture of me"
              src="/images/nate.webp"
              className="rounded-full object-contain"
              width={150}
              height={150}
            />
          </div>
          <div className="flex w-full flex-col space-y-3 p-4">
            <span className="text-start text-xl font-bold">
              Written by Nathan Brachotte
            </span>
            <NateDescription />
          </div>
        </div>
      </div>
    </section>
  )
}
