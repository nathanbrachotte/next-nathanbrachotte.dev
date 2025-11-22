import { Badges } from 'app/components/Badges'
import { GradientLink } from 'app/components/GradientLink'
import { H1, H2, H3 } from 'app/components/Typography'
import { ProjectCard } from 'app/projects/ProjectCard'
import { allBlogs, allProjects } from 'contentlayer/generated'
import Image from 'next/image'
import React from 'react'

import { getViewsCount } from 'lib/metrics'
import { BlogPostCard } from './blog/page'
import { CopyEmailCta } from './components/CopyEmailCta'

export default async function Page() {
  const allViews = await getViewsCount()

  return (
    <section>
      {/* Hero Section */}
      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 ">
          <H1 className="mt">Hey there, I'm Nate 👋🏻</H1>
          <p className="mb-6 text-lg leading-relaxed text-neutral-400">
            I'm an engineer/team lead with {new Date().getFullYear() - 2018}+
            years creating world-class products for companies like Klarna,
            Blinkist and many other startups.
          </p>

          {/* Social Proof */}
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <span className="flex items-center gap-2">
              🎯{' '}
              <GradientLink href="/blog/put-a-cherry-on-top">
                Speaker at Klarna KonferenSE
              </GradientLink>
            </span>
            <span className="flex items-center gap-2">
              ☁️{' '}
              <GradientLink href="https://www.credly.com/badges/91e5da96-297c-418a-a8a4-789df7fecdbf/public_url">
                AWS Certified
              </GradientLink>
            </span>
            <span className="flex items-center gap-2">
              ✍️ <GradientLink href="/blog">Technical Writer</GradientLink>
            </span>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <CopyEmailCta />
            <GradientLink
              href="https://docs.google.com/document/d/1_bO2q6WnJVjbryx6EF0J4qjppmmwAWXUYl1kryGPpiY"
              className="rounded-lg border border-neutral-600 px-6 py-3 font-semibold transition-all hover:border-neutral-500"
            >
              View my resume
            </GradientLink>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            alt="Nathan Brachotte"
            src="/images/nate.webp"
            className="rounded-full ring-2 ring-gradient-purple"
            width={160}
            height={160}
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-12">
        <H2>Tech Stack</H2>
        <div className="mt-2 flex flex-wrap gap-2">
          <Badges.TypeScript />
          <Badges.React />
          <Badges.ReactNative />
          <Badges.Astro />
          <Badges.Next />
          <Badges.Node />
          <Badges.Nest />
          <Badges.Electron />
          <Badges.AWS />
          <Badges.Postgre />
          <Badges.Prisma />
          <Badges.Shadcn />
          <Badges.Tailwind />
        </div>
      </div>

      {/* Testimonials Teaser */}
      <div className="mt-6 rounded-lg bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange p-[1px] transition-all duration-300 hover:scale-[1.02] hover:shadow-neon">
        <div className="rounded-lg bg-background p-4 transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <H3 className="text-lg font-semibold">
                What people say about me
              </H3>
              <p className="text-neutral-400">
                Recommendations from clients & colleagues
              </p>
            </div>
            <GradientLink href="/testimonials" className="font-semibold">
              Read testimonials →
            </GradientLink>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-6">
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

      <div className="mt-12 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <H2>Side Projects (live)</H2>
          <GradientLink href="/projects">View all</GradientLink>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
          {allProjects
            .filter(
              (project) =>
                project.isSideProject &&
                (project.status === 'live' || project.status === 'wip'),
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
