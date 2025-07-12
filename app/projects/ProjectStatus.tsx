import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ProjectStatusProps {
  status: 'live' | 'work-in-progress' | 'abandoned'
  className?: string
}

export function ProjectStatus({ status, className }: ProjectStatusProps) {
  const statusConfig = {
    live: {
      label: 'Live',
      className: 'bg-green-500/20 text-green-400 border-green-500/30',
    },
    'work-in-progress': {
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
      {config.label}
    </Badge>
  )
}
