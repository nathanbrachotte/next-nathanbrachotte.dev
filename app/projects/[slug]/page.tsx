import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Mdx } from 'app/components/mdx'
import { allProjects } from 'contentlayer/generated'
// import { getTweets } from 'lib/twitter'
import Balancer from 'react-wrap-balancer'
import { Badges } from 'app/components/Badges'
import React from 'react'
import { ProjectLogo } from 'app/projects/[slug]/ProjectLogo'
import { ProjectStatus } from 'app/projects/ProjectStatus'
import { LinkButton } from 'app/components/LinkButton'
import { ArrowUpRight } from 'icons/ArrowUpRight'
import { AppStoreIcon } from 'icons/AppStore'
import { PlayStoreIcon } from 'icons/PlayStore'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { getDateWithDistance } from 'helpers/dates'
import { Button } from '@/components/ui/button'
import { SimpleAnalyticsIcon } from 'icons/SimpleAnalytics'
import { Badge } from '@/components/ui/badge'
import { GithubIcon } from 'icons/Github'

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

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://nathanbrachotte.dev/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image && { images: [image] }),
    },
  }
}

function Tools({ tools }: { tools: string[] }) {
  return (
    <div className="mb-8 mt-2 flex w-full flex-wrap">
      {tools.map((tool) => {
        if (!Badges[tool]) {
          console.error('tool not found', tool)
          return null
        }

        return (
          <div key={tool} className="mr-2 mt-2">
            {React.createElement(Badges[tool])}
          </div>
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

  return (
    <section>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(post.structuredData)}
      </script>
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex">
          {post.image && <ProjectLogo image={post.image} title={post.title} />}
          <div className="ml-2 flex flex-col items-start justify-start">
            <div className="flex items-center justify-between gap-2">
              <h1 className="flex-shrink-0 items-center text-2xl font-bold tracking-tighter">
                <Balancer>{post.title}</Balancer>
              </h1>
              {post.status ? <ProjectStatus status={post.status} /> : null}
              {post.projectType ? (
                <Badge variant="outline" className="bg-secondary">
                  {post.projectType.charAt(0).toUpperCase() +
                    post.projectType.slice(1)}
                </Badge>
              ) : null}
              {post.isOpenSource ? (
                <Badge
                  variant="outline"
                  className="border-blue-500/30 bg-blue-500/20 text-blue-400"
                >
                  Open Source
                </Badge>
              ) : null}
            </div>
            <p className="text-sm text-neutral-400">
              Started in {getDateWithDistance(post.publishedAt)}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-shrink-0 space-x-2 sm:mt-0">
          {post.appleStoreUrl && (
            // TODO: Improve color a11y
            <Link
              className={twMerge(
                'flex flex-row items-center justify-center',
                'rounded-md px-3 py-2 text-sm font-semibold text-white',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                'animate-text-gradient-background bg-gradient-to-r from-gradient-blue to-gradient-cyan',
                'transition-all hover:scale-105 active:scale-95',
              )}
              href={post.appleStoreUrl}
            >
              iOS <AppStoreIcon className="ml-2 h-4 w-4 fill-white" />
            </Link>
          )}
          {post.playStoreUrl && (
            <Link
              href={post.playStoreUrl}
              className={twMerge(
                'flex flex-row items-center justify-center',
                'rounded-md px-3 py-2 text-sm font-semibold text-white',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                'to-gradient-turquoise animate-text-gradient-background bg-gradient-to-r from-gradient-green',
                'transition-all hover:scale-105 active:scale-95',
              )}
            >
              Android <PlayStoreIcon className="ml-2 h-4 w-4" />
            </Link>
          )}
          {post.projectUrl && (
            <LinkButton href={post.projectUrl}>
              See project <ArrowUpRight className="ml-2 h-4 w-4" />
            </LinkButton>
          )}
          {post.repoUrl && (
            <Button variant="default" size="icon" asChild>
              <Link href={post.repoUrl} target="_blank">
                <GithubIcon className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {post.analytics && (
            <Button variant="default" size="icon" asChild>
              <Link href={post.analytics}>
                <SimpleAnalyticsIcon className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <div className="mt-2 flex max-w-[650px] items-center justify-between text-sm">
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
