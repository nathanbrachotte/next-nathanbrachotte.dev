import { ArchiveIcon, CodeIcon, MobileIcon } from '@radix-ui/react-icons'
import { ProjectStatus } from 'app/projects/ProjectStatus'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type StatusType = 'live' | 'wip' | 'abandoned' | 'stopped'
type ProjectKind = 'app' | 'library'

interface ProjectBadgesProps {
  status?: StatusType
  projectType?: string
  isOpenSource?: boolean
  className?: string
  showStatus?: boolean
  showProjectType?: boolean
  showOpenSource?: boolean
}

const projectTypeConfig: Record<
  ProjectKind,
  { label: string; className: string; Icon: typeof MobileIcon }
> = {
  app: {
    label: 'App',
    className: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    Icon: MobileIcon,
  },
  library: {
    label: 'Library',
    className: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    Icon: ArchiveIcon,
  },
}

export function ProjectBadges({
  status,
  projectType,
  isOpenSource,
  className,
  showStatus = true,
  showProjectType = true,
  showOpenSource = true,
}: ProjectBadgesProps) {
  const normalizedType = projectType?.toLowerCase() as ProjectKind | undefined
  const typeConfig = normalizedType ? projectTypeConfig[normalizedType] : null

  const shouldShowStatus = Boolean(showStatus && status)
  const shouldShowType = Boolean(showProjectType && projectType)
  const shouldShowOpenSource = Boolean(showOpenSource && isOpenSource)

  if (!shouldShowStatus && !shouldShowType && !shouldShowOpenSource) {
    return null
  }

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {shouldShowStatus && status ? <ProjectStatus status={status} /> : null}
      {shouldShowType && projectType ? (
        <Badge
          variant="outline"
          className={typeConfig?.className ?? 'bg-secondary'}
        >
          <span className="flex items-center gap-1.5">
            {typeConfig ? (
              <typeConfig.Icon
                className="h-3.5 w-3.5 flex-none"
                aria-hidden="true"
              />
            ) : null}
            {typeConfig?.label ?? formatProjectType(projectType)}
          </span>
        </Badge>
      ) : null}
      {shouldShowOpenSource ? (
        <Badge
          variant="outline"
          className="border-blue-500/30 bg-blue-500/20 text-blue-400"
        >
          <span className="flex items-center gap-1.5">
            <CodeIcon className="h-3.5 w-3.5 flex-none" aria-hidden="true" />
            Open Source
          </span>
        </Badge>
      ) : null}
    </div>
  )
}

function formatProjectType(value: string) {
  if (!value) {
    return ''
  }

  return value.charAt(0).toUpperCase() + value.slice(1)
}
