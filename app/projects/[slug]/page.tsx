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
import { ShinyButton } from 'app/components/ShinyButton'

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
      <div className="flex flex-col items-start justify-between">
        <div className="flex">
          {post.image && <ProjectLogo image={post.image} title={post.title} />}
          <div className="ml-2 flex flex-col items-start justify-start">
            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
              <h1 className="flex-shrink-0 items-center text-2xl font-bold tracking-tighter">
                <Balancer>{post.title}</Balancer>
              </h1>
              <div className="flex flex-wrap items-center gap-2">
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
            </div>
            <p className="text-sm text-neutral-400">
              Started in {getDateWithDistance(post.publishedAt)}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {post.appleStoreUrl && (
            <ShinyButton
              href={post.appleStoreUrl}
              className="border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
            >
              iOS <AppStoreIcon className="ml-1 h-4 w-4" />
            </ShinyButton>
          )}
          {post.playStoreUrl && (
            <ShinyButton
              href={post.playStoreUrl}
              className="border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20"
            >
              Android <PlayStoreIcon className="ml-1 h-4 w-4" />
            </ShinyButton>
          )}
          {post.projectUrl && (
            <ShinyButton
              href={post.projectUrl}
              className="border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500/20"
            >
              Visit Project <ArrowUpRight className="ml-1 h-4 w-4" />
            </ShinyButton>
          )}
          {post.repoUrl && (
            <ShinyButton
              href={post.repoUrl}
              target="_blank"
              className="border-neutral-500/30 bg-neutral-500/10 text-neutral-400 hover:bg-neutral-500/20"
            >
              GitHub <GithubIcon className="ml-1 h-4 w-4" />
            </ShinyButton>
          )}
          {post.analytics && (
            <ShinyButton
              href={post.analytics}
              className="border-orange-500/30 bg-orange-500/10 text-orange-400 hover:bg-orange-500/20"
            >
              Analytics <SimpleAnalyticsIcon className="ml-1 h-4 w-4" />
            </ShinyButton>
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
