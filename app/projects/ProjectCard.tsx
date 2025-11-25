import { H2 } from 'app/components/Typography'
import { ProjectLogo } from 'app/projects/[slug]/ProjectLogo'
import { ProjectBadges } from 'app/projects/[slug]/ProjectBadges'
import clsx from 'clsx'
import { type Project } from 'contentlayer/generated'
import { SimpleAnalyticsIcon } from 'icons/SimpleAnalytics'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({
  project: {
    title,
    summary,
    image,
    slug,
    analytics,
    status,
    isOpenSource,
    projectType,
  },
  index,
}: ProjectCardProps) {
  const borderRadiant = [
    'from-gradient-purple via-transparent to-gradient-pink',
    'from-gradient-blue via-transparent to-gradient-cyan',
    'from-gradient-orange via-transparent to-gradient-yellow',
    'from-gradient-purple via-transparent to-gradient-orange',
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
          <div className="relative flex h-full flex-col rounded-lg bg-background p-6">
            <div className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <ProjectLogo image={image} title={title} />
                <ProjectBadges
                  status={status}
                  showProjectType={false}
                  showOpenSource={false}
                />
              </div>
              {analytics != null ? (
                <SimpleAnalyticsIcon className="h-6 w-6" />
              ) : null}
            </div>
            <H2 className="mt-2 text-xl font-bold tracking-tighter">{title}</H2>
            <p className="font-md text-slate-300">{summary}</p>
            <ProjectBadges
              status={status}
              projectType={projectType}
              isOpenSource={isOpenSource}
              showStatus={false}
              className="mt-auto pt-4"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}
