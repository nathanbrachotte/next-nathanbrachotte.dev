import { Badges } from 'app/components/Badges'
import { GradientLink } from 'app/components/GradientLink'
import { NateDescription } from 'app/components/NateDescription'
import { H1, H2 } from 'app/components/Typography'
import { ProjectLogo } from 'app/projects/[slug]/ProjectLogo'
import { ProjectStatus } from 'app/projects/ProjectStatus'
import clsx from 'clsx'
import { type Project, allBlogs, allProjects } from 'contentlayer/generated'
import { SimpleAnalyticsIcon } from 'icons/SimpleAnalytics'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { getViewsCount } from 'lib/metrics'
import { BlogPostCard } from './blog/page'

const ProjectCard = ({
  project: { title, summary, image, slug, analytics, status },
  index,
}: {
  project: Project
  index: number
}) => {
  const borderRadiant = [
    'from-gradient-purple via-transparent to-gradient-pink',
    'from-gradient-blue via-transparent to-gradient-cyan',
    'from-gradient-orange via-transparent to-gradient-yellow',
    'from-gradient-purple via-transparent to-gradient-orange',
    'from-gradient-green via-transparent to-gradient-turquoise',
    'from-gradient-pink via-transparent to-gradient-blue',
    'from-gradient-cyan via-transparent to-gradient-green',
    'from-gradient-yellow via-transparent to-gradient-purple',
  ]

  const animatedGradient = [
    'via-gradient-yellow',
    'via-gradient-orange',
    'via-gradient-cyan',
    'via-gradient-blue',
    'via-gradient-green',
    'via-gradient-turquoise',
    'via-gradient-pink',
    'via-gradient-purple',
  ] as const

  return (
    <Link href={slug}>
      <div className="group flex h-full cursor-pointer flex-col justify-between transition-all hover:scale-105">
        <div
          className={clsx(
            'relative mx-auto h-full overflow-hidden rounded-lg bg-gradient-to-r p-[1px] transition-all duration-300 ease-in-out',
            borderRadiant[index % borderRadiant.length],
          )}
        >
          <div
            className={clsx(
              'visible absolute -bottom-96 -top-96 left-10 right-10',
              `bg-gradient-to-r from-transparent group-hover:visible group-hover:animate-spin-surround group-focus:visible ${
                animatedGradient[index % animatedGradient.length]
              } to-transparent`,
            )}
          />
          <div className="relative h-full rounded-lg bg-background p-6">
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <ProjectLogo image={image} title={title} />
                {status ? <ProjectStatus status={status} /> : null}
              </div>
              {analytics != null ? (
                <SimpleAnalyticsIcon className="h-6 w-6" />
              ) : null}
            </div>
            <H2 className="mt-2 text-xl font-bold tracking-tighter">{title}</H2>
            <p className="font-md text-slate-300">{summary}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default async function Page() {
  const allViews = await getViewsCount()

  return (
    <section>
      <H1>Hey there 👋</H1>
      <div className="prose prose-invert">
        I'm Nathan (
        <Link
          href={'https://github.com/nathanbrachotte'}
          className={twMerge(
            'mb-0 mt-0 font-bold underline hover:text-transparent',
            'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          @N8
        </Link>
        ), Senior Full Stack Software Engineer with 5+ years of experience, I
        specialize in <Badges.React />
        , <Badges.ReactNative /> & <Badges.Node /> frameworks.
        <div className="pt-4">
          <Image
            alt="picture of me"
            src="/images/nate.webp"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <NateDescription />
        <p>Some facts about me:</p>
        <ul>
          <li>🚀 Passionate about building world-class products.</li>
          <li>
            ✍️ Love to share my passion for engineering through{' '}
            <GradientLink href={'/blog'}>my blog</GradientLink>, also{' '}
            <GradientLink href="/blog/put-a-cherry-on-top">
              gave a talk
            </GradientLink>{' '}
            at Klarna KonferenSE20.
          </li>
          <li>
            ☁️{' '}
            <GradientLink href="https://www.credly.com/badges/91e5da96-297c-418a-a8a4-789df7fecdbf/public_url">
              AWS Certified Cloud Practitioner
            </GradientLink>
          </li>
          <li>
            <div className="mb-2 flex flex-wrap space-x-2">
              <span className="mb-1">🛠 Tech Stack:</span>
              <Badges.TypeScript />
              <Badges.JavaScript />
              <Badges.React />
              <Badges.ReactNative />
              <Badges.AWS />
              <Badges.Next />
              <span className="mb-1">
                <Badges.Node />
              </span>
              <Badges.Nest />
              <Badges.Express />
              <Badges.Prisma />
              <Badges.Postgre />
              <Badges.Tailwind />
              <span>& much more!</span>
            </div>
          </li>
        </ul>
        {/* // TODO: Scroll animation (https://www.framer.com/motion/scroll-animations/) */}
        <p>
          <span className="font-bold">Want to know more about me?</span> Here is
          my{' '}
          <GradientLink href="https://docs.google.com/document/d/1_bO2q6WnJVjbryx6EF0J4qjppmmwAWXUYl1kryGPpiY">
            my resume
          </GradientLink>
          . <span className="font-bold">Want to work with me?</span> 🤝 Please{' '}
          <Link
            href={'mailto:hey+nate@nathanbrachotte.dev'}
            className={twMerge(
              'mb-0 mt-0 font-bold underline hover:text-transparent',
              'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
            )}
          >
            reach out by email
          </Link>{' '}
          or on{' '}
          <Link
            href={'https://www.linkedin.com/in/nathan-brachotte/'}
            className={twMerge(
              'mb-0 mt-0 font-bold underline hover:text-transparent',
              'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
            )}
          >
            Linkedin
          </Link>
        </p>
        <p></p>
        <p>
          <span className="font-bold">Still unsure?</span> Maybe these{' '}
          <Link
            href={'/testimonials'}
            className={twMerge(
              'mb-0 mt-0 font-bold underline hover:text-transparent',
              'animate-text-gradient-background cursor-pointer bg-gradient-to-r from-gradient-cyan to-gradient-blue bg-clip-text text-gradient-blue decoration-gradient-blue decoration-[0.1em] underline-offset-2 transition-all visited:text-cyan-300 visited:decoration-cyan-300 hover:text-transparent hover:decoration-gradient-cyan',
            )}
          >
            recommendations
          </Link>{' '}
          from my past clients and coworkers will give you a better idea of what
          I could bring to your team 😊
        </p>
      </div>

      <div className="mt-16 flex flex-col gap-6">
        <H2>Latest Blog Posts</H2>
        <div>
          {allBlogs
            .filter((post) => !post.draft)
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1
              }
              return 1
            })
            .slice(0, 3)
            .map((post, index) => (
              <BlogPostCard
                key={post.slug}
                blog={post}
                index={index}
                allViews={allViews}
              />
            ))}
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <H2>Side Projects</H2>
          <GradientLink href="/projects">View all</GradientLink>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
          {allProjects
            .filter(
              (project) =>
                project.isSideProject &&
                (project.status === 'live' ||
                  project.status === 'work-in-progress'),
            )
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1
              }
              return 1
            })
            .map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
        </div>
      </div>
    </section>
  )
}
