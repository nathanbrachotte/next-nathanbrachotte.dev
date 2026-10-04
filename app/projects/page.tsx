import { H1, H2 } from 'app/components/Typography'
import { ProjectCard } from 'app/projects/ProjectCard'
import { ToolFilter, getToolLabel } from 'app/projects/ToolFilter'
import { allProjects, type Project } from 'contentlayer/generated'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'N8 - Projects',
  description: "Some of my side projects and apps I've worked on",
}

interface ProjectsPageProps {
  searchParams: { tool?: string }
}

export default function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const tools = getToolCounts(allProjects)
  const selectedTool = tools.some(({ name }) => name === searchParams.tool)
    ? searchParams.tool
    : undefined

  const filteredProjects = allProjects
    .filter(
      (project) =>
        selectedTool == null || (project.tools ?? []).includes(selectedTool),
    )
    .sort((a, b) => {
      if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
        return -1
      }
      return 1
    })
  const sideProjects = filteredProjects.filter(
    (project) => project.isSideProject,
  )
  const workProjects = filteredProjects.filter(
    (project) => !project.isSideProject,
  )

  return (
    <section>
      <H1>{metadata.description}</H1>
      <ToolFilter tools={tools} selectedTool={selectedTool} />
      {sideProjects.length > 0 ? (
        <>
          <H2 className="mb-2 mt-10">My side projects</H2>
          <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
            {sideProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </>
      ) : null}
      {workProjects.length > 0 ? (
        <>
          <H2 className="mb-2 mt-10">
            Apps I've worked on at work that you may know of
          </H2>
          <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
            {workProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </>
      ) : null}
    </section>
  )
}

// Every tool used across projects, most used first
function getToolCounts(projects: Project[]) {
  const counts = new Map<string, number>()
  for (const project of projects) {
    for (const tool of project.tools ?? []) {
      counts.set(tool, (counts.get(tool) ?? 0) + 1)
    }
  }

  return Array.from(counts, ([name, count]) => ({ name, count })).sort(
    (a, b) =>
      b.count - a.count ||
      getToolLabel(a.name).localeCompare(getToolLabel(b.name)),
  )
}
