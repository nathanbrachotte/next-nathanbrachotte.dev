import { H1, H2 } from 'app/components/Typography'
import { ProjectLogo } from 'app/projects/[slug]/ProjectLogo'
import { ProjectStatus } from 'app/projects/ProjectStatus'
import clsx from 'clsx'
import { type Project, allProjects } from 'contentlayer/generated'
import { SimpleAnalyticsIcon } from 'icons/SimpleAnalytics'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'N8 - Projects',
  description: "Some of my side projects and apps I've worked on",
}

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

  // TODO: Add touch detection for animation to run on mobile - https://www.npmjs.com/package/react-touch
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
            {
              <div className="flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <ProjectLogo image={image} title={title} />
                  {status ? <ProjectStatus status={status} /> : null}
                </div>
                {analytics != null ? (
                  <SimpleAnalyticsIcon className="h-6 w-6" />
                ) : null}
              </div>
            }
            <H2 className="mt-2 text-xl font-bold tracking-tighter">{title}</H2>
            <p className="font-md text-slate-300">{summary}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ProjectsPage() {
  return (
    <section>
      <H1>{metadata.description}</H1>
      <H2 className="mb-2 mt-10">My side projects</H2>
      <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
        {allProjects
          .filter((project) => project.isSideProject)
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
      <H2 className="mb-2 mt-10">
        Apps I've worked on at work that you may know of
      </H2>
      <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
        {allProjects
          .filter((project) => !project.isSideProject)
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
    </section>
  )
}
