import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mdx } from 'app/components/mdx'
import { allProjects } from 'contentlayer/generated'
// import { getTweets } from 'lib/twitter'
import Balancer from 'react-wrap-balancer'
import {
  GastbyBadge,
  NextBadge,
  PlanetScaleBadge,
  ReactBadge,
  ReactNativeBadge,
  VercelBadge,
} from 'app/components/Badges'
// import { getViewsCount } from 'lib/metrics'

const findProject = (slug: string) => {
  return allProjects.find((post) => post.slug.includes(slug))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = findProject(params.slug)
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
  // const ogImage = image
  //   ? `https://leerob.io${image}`
  //   : `https://leerob.io/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://nathanbrachotte.dev/blog/${slug}`,
      // images: [
      //   {
      //     url: ogImage,
      //   },
      // ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // images: [ogImage],
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

export default async function Project({ params }) {
  const post = findProject(params.slug)

  console.log({ post, allProjects, params })

  if (!post) {
    notFound()
  }

  // const [allViews, tweets] = await Promise.all([
  //   getViewsCount(),
  //   getTweets(post.tweetIds),
  // ])

  return (
    <section>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <h1 className="max-w-[650px] text-2xl font-bold tracking-tighter">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mb-8 mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <p className="text-sm text-neutral-400">
          {formatDate(post.publishedAt)}
        </p>
        {/* <ViewCounter allViews={allViews} slug={post.slug} trackView /> */}
      </div>
      <Mdx
        code={post.body.code}
        // tweets={tweets}
        tweets={[]}
      />
    </section>
  )
}
