import { ProjectLogo } from 'app/projects/[slug]/ProjectLogo'
import clsx from 'clsx'
import { Project, allProjects } from 'contentlayer/generated'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: "A curated list of some of projects I've worked on in the past",
}

const Project = ({
  project: { title, summary, image, slug },
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
  ]

  const animatedGradient = [
    'via-gradient-yellow',
    'via-gradient-orange',
    'via-gradient-cyan',
    'via-gradient-blue',
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
            {image && <ProjectLogo image={image} title={title} />}
            <h2 className="mt-2 text-xl font-bold tracking-tighter">{title}</h2>
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
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">
        A curated list of some of projects I've worked on in the past 👇
      </h1>
      <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
        {allProjects
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1
            }
            return 1
          })
          .map((project, index) => (
            <Project key={project.slug} project={project} index={index} />
          ))}
      </div>
    </section>
  )
}
