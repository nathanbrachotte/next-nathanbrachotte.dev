import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mdx } from 'app/components/mdx'
import { allProjects } from 'contentlayer/generated'
// import { getTweets } from 'lib/twitter'
import Balancer from 'react-wrap-balancer'
import { Badges } from 'app/components/Badges'
import React from 'react'
import { ProjectLogo } from 'app/projects/[slug]/ProjectLogo'
import { LinkButton } from 'app/components/LinkButton'
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
    year: 'numeric',
  })

  return `${fullDate} (${formattedDate})`
}

function Tools({ tools }: { tools: string[] }) {
  return (
    <div className="mb-8 mt-2 flex w-full flex-wrap">
      {tools.map((tool) => {
        return (
          <div className="mr-2 mt-2">{React.createElement(Badges[tool])}</div>
        )
      })}
    </div>
  )
}

export default async function Project({ params }) {
  const post = findProject(params.slug)

  if (!post) {
    notFound()
  }

  // const [allViews, tweets] = await Promise.all([
  //   getViewsCount(),
  //   getTweets(post.tweetIds),
  // ])
  console.log({ postUrl: post.projectUrl })

  return (
    <section>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <div className="flex items-center justify-between">
        <h1 className="flex max-w-[650px] items-center text-2xl font-bold tracking-tighter">
          {post.image && <ProjectLogo image={post.image} title={post.title} />}
          <Balancer className="ml-2">{post.title}</Balancer>
        </h1>
        {post.projectUrl && (
          <LinkButton href={post.projectUrl}>Visit project</LinkButton>
        )}
      </div>
      <div className="mt-2 flex max-w-[650px] items-center justify-between text-sm">
        <p className="text-sm text-neutral-400">
          Started in {formatDate(post.publishedAt)}
        </p>

        {/* <ViewCounter allViews={allViews} slug={post.slug} trackView /> */}
      </div>
      <Tools tools={post.tools ?? []} />
      <Mdx
        code={post.body.code}
        // tweets={tweets}
        tweets={[]}
      />
    </section>
  )
}
