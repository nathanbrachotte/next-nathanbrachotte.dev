import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProjectStatusProps {
  status: 'live' | 'wip' | 'abandoned'
  className?: string
}

export function ProjectStatus({ status, className }: ProjectStatusProps) {
  const statusConfig = {
    live: {
      label: 'Live',
      className: 'bg-green-500/20 text-green-400 border-green-500/30',
      showDot: true,
    },
    wip: {
      label: 'Work in Progress',
      className: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    },
    abandoned: {
      label: 'Abandoned',
      className: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    },
    stopped: {
      label: 'Stopped',
      className: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
    },
  }

  const config = statusConfig[status]

  return (
    <Badge
      variant="outline"
      className={cn('rounded-full', config.className, className)}
    >
      <div className="flex items-center gap-1.5">
        {'showDot' in config && config.showDot && (
          <div className="relative">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <div className="absolute left-0 top-0 h-2 w-2 animate-ping rounded-full bg-green-400"></div>
          </div>
        )}
        {config.label}
      </div>
    </Badge>
  )
}
