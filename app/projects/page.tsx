import { H1, H2 } from 'app/components/Typography'
import { ProjectCard } from 'app/projects/ProjectCard'
import { allProjects } from 'contentlayer/generated'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'N8 - Projects',
  description: "Some of my side projects and apps I've worked on",
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
