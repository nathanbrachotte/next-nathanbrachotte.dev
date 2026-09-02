import { Metadata } from 'next'
import Link from 'next/link'
import { allProjects } from 'contentlayer/generated'
import { Badge } from '@/components/ui/badge'
import { GradientLink } from 'app/components/GradientLink'
import { H1 } from 'app/components/Typography'
import { ProjectStatus } from 'app/projects/ProjectStatus'
import { cn } from '@/lib/utils'
import { domainOnlyStatusConfig, ownedDomains } from './data'

export const metadata: Metadata = {
  title: 'Domains',
  description: 'Every domain I own and what it currently points at.',
  // A personal inventory, not something worth ranking for.
  robots: { index: false, follow: false },
}

export default function DomainsPage() {
  return (
    <section>
      <H1>Domains I own</H1>
      <p className="text-xl text-muted-foreground">{metadata.description}</p>

      <hr className="mb-8 mt-8 w-full border-border" />

      <ul className="flex flex-col gap-6">
        {ownedDomains.map(({ name, status, note }) => {
          const project = allProjects.find(({ domain }) => domain === name)

          return (
            <li key={name} className="flex flex-col gap-1">
              <div className="flex flex-row flex-wrap items-center gap-2">
                <GradientLink
                  href={`https://${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </GradientLink>
                {project?.status ? (
                  <ProjectStatus status={project.status} />
                ) : (
                  <Badge
                    variant="outline"
                    className={cn(
                      'rounded-full',
                      domainOnlyStatusConfig[status ?? 'parked'].className,
                    )}
                  >
                    {domainOnlyStatusConfig[status ?? 'parked'].label}
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {note ??
                  project?.summary ??
                  'Registered, nothing served on it.'}
              </p>
              {project ? (
                <Link
                  href={`/${project.slug}`}
                  className="w-fit text-sm text-neutral-400 underline underline-offset-2 transition-colors hover:text-neutral-200"
                >
                  {project.title}
                </Link>
              ) : null}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
