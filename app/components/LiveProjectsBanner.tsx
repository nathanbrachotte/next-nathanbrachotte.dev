import { LiveIndicator } from 'app/projects/ProjectStatus'
import { allProjects, type Project } from 'contentlayer/generated'
import Image from 'next/image'

// Every live side project with a public URL, scrolling across the top of the
// site. This site itself is skipped since visitors are already on it.
export function LiveProjectsBanner() {
  const liveProjects = allProjects
    .filter(
      (project) =>
        project.status === 'live' &&
        project.projectUrl != null &&
        project.domain !== 'nathanbrachotte.dev',
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )

  if (liveProjects.length === 0) {
    return null
  }

  return (
    <div className="group relative w-full overflow-hidden border-b border-border bg-background/80 py-2 text-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />
      {/* The list is rendered twice so translating by -50% loops seamlessly */}
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <BannerItems projects={liveProjects} />
        <BannerItems projects={liveProjects} isDuplicate />
      </div>
    </div>
  )
}

function BannerItems({
  projects,
  isDuplicate = false,
}: {
  projects: Project[]
  isDuplicate?: boolean
}) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={isDuplicate}>
      {projects.map((project) => (
        <li key={project.slug}>
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isDuplicate ? -1 : undefined}
            className="flex items-center gap-2 px-6 text-neutral-400 transition-colors hover:text-neutral-100"
          >
            <LiveIndicator />
            {project.image != null ? (
              <Image
                src={project.image}
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 rounded-sm object-contain"
              />
            ) : null}
            <span className="font-semibold text-neutral-200">
              {project.title}
            </span>
            {project.domain !== project.title.toLowerCase() ? (
              <span className="hidden sm:inline">{project.domain}</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  )
}
